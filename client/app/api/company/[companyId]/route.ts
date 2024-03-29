import pool from "@/mysql/db";
import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";


export async function GET(req: Request,{params}:{params: {companyId: any}}) {
    try {
        if (!params.companyId) {
            return new NextResponse("comapny Id not found", {status: 400})
        }

        const company = await prismadb.company.findUnique({
            where: { id: Number(params.companyId) },
          });

        if (company) {
            return NextResponse.json(company);
        } else {
            return new NextResponse("Company not found", {status: 400});
        }
    } catch (error: any) {
        console.log("get-company", error.message)
        return new NextResponse("Internal server error", {status: 500})
    }
}