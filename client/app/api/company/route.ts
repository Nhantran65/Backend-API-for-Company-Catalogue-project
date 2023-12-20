import { NextResponse } from "next/server";
import pool from "@/mysql/db";
import prismadb from "@/lib/prismadb";

export  async function GET() {
    try {
        const companies = await prismadb.company.findMany()
        return NextResponse.json(companies)
    } catch (error:any) {
        console.log("get-companies ", error.message)
        return new NextResponse("Internal error", {status: 500})
    }
}