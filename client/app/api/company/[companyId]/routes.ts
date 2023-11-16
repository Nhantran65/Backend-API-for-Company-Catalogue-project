import pool from "@/mysql/db";
import { NextResponse } from "next/server";

export async function GET(req: Request,{params}:{params: {companyId: string}}) {
    try {
        if (!params.companyId) {
            return new NextResponse("comapny Id not found", {status: 400})
        }
    } catch (error: any) {
        console.log("get-company", error.message)
        return new NextResponse("Internal server error", {status: 500})
    }
}