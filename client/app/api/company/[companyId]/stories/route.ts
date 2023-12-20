import { NextResponse } from "next/server";
import pool from "@/mysql/db";
import prismadb from "@/lib/prismadb";

export async function GET(
  req: Request,
  { params }: { params: { companyId: any } }
) {
  try {
    if (!params.companyId) {
      return new NextResponse("comapny Id not found", { status: 400 });
    }

    // SQL query to select stories where the company_id matches
    

    const stories = await prismadb.story.findMany({
      where: {
        company_id: parseInt(params.companyId as string,10),
        status: 'published',
      },
      include: { user: true, company: true }
    })
    return NextResponse.json(stories);
  } catch (error: any) {
    console.log("get-company", error.message);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
