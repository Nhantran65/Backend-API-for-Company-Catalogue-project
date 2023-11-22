import pool from "@/mysql/db";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { companyId: any } }
) {
  try {
    if (!params.companyId) {
      return new NextResponse("comapny Id not found", { status: 400 });
    }

    // SQL query to select stories where the company_id matches
    const query = `
    SELECT * FROM story
    WHERE company_id = ?
    AND status = 'published'  `;

    const stories = await pool.query(query, [params.companyId]);
    return NextResponse.json(stories);
  } catch (error: any) {
    console.log("get-company", error.message);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
