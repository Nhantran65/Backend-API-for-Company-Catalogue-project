import { NextResponse } from "next/server";
import pool from "@/mysql/db";
import prismadb from "@/lib/prismadb";

export async function GET() {
  try {
    // Use Prisma's findMany method to get all stories with company and user information
    const stories = await prismadb.story.findMany({
      include: {
        user: true, // Include the user information
        company: {
          select: { name: true }, // Select only the company name
        },
        
      },
    });

    return NextResponse.json(stories);
  } catch (error: any) {
    console.log("get-stories ", error.message);
    return new NextResponse("Internal error", { status: 500 });
  }
}
