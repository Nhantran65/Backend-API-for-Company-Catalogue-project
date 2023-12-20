import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import pool from "@/mysql/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  // You can find this in the Clerk Dashboard -> Webhooks -> choose the webhook
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  console.log("Hitted");
  if (!WEBHOOK_SECRET) {
    throw new Error(
      "Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }

  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occured -- no svix headers", {
      status: 400,
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occured", {
      status: 400,
    });
  }

  // Get the ID and type
  const { id } = evt.data;
  const eventType = evt.type;

  console.log(`Webhook with and ID of ${id} and type of ${eventType}`);
  console.log("Webhook body:", payload.data);

  if (eventType === "user.created") {
    const query = `
      INSERT INTO user (
        first_name,
        last_name,
        email,
        role, 
        profile_picture,
        bio
      ) VALUES (?, ?, ?, ?, ?, ?)
      ON DUPLICATE KEY UPDATE
        first_name = VALUES(first_name),
        last_name = VALUES(last_name),
        profile_picture = VALUES(profile_picture),
        bio = VALUES(bio);
    `;

    const values = [
      payload.data.username,
      "",
      payload.data.email_addresses.length > 0
        ? payload.data.email_addresses[0].email_address
        : payload.data.username,
      "admin",
      payload.data.profile_image_url,
      "",
    ];
    await pool.execute(query, values);

    console.log("Success");

    return new NextResponse("sync Success", { status: 200 });
  } else if (eventType === "session.created") {
    console.log("user hass logged in")
    return new NextResponse("sync Success", { status: 200 });
  } else if (eventType === "session.ended") {
    console.log("ended")
    return new NextResponse("sync Success", { status: 200 });
  }

  return new Response("", { status: 200 });
}
