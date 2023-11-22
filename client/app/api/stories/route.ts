import { NextResponse } from "next/server";
import pool from "@/mysql/db";

export  async function GET() {
    try {
        const [rows] = await pool.query<any>("SELECT * FROM story")
        return NextResponse.json(rows) 
    } catch (error:any) {
        console.log("get-stories ", error.message)
        return new NextResponse("Internal error", {status: 500})
    }
}