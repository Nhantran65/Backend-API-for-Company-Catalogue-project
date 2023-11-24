import { NextResponse } from "next/server";
import pool from "@/mysql/db";

export  async function GET() {
    try {
        const query = `
    SELECT 
      s.id as story_id, 
      s.company_id, 
      s.title, 
      s.content, 
      s.posted, 
      s.likes, 
      s.status, 
      u.first_name, 
      u.role,
      u.email
    FROM 
      story s
    JOIN 
      user u ON s.user_id = u.id;
  `;
        const [rows] = await pool.query<any>(query)
        return NextResponse.json(rows) 
    } catch (error:any) {
        console.log("get-stories ", error.message)
        return new NextResponse("Internal error", {status: 500})
    }
}