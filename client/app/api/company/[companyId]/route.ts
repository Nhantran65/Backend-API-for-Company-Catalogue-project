import pool from "@/mysql/db";
import { NextResponse } from "next/server";


export async function GET(req: Request,{params}:{params: {companyId: any}}) {
    try {
        if (!params.companyId) {
            return new NextResponse("comapny Id not found", {status: 400})
        } else {
            console.log("id of comp ", params.companyId)
        }

        const query = 'SELECT * FROM company WHERE id = ?';
        const values = [params.companyId]

        const [result] = await pool.execute<any>(query, values)

        if (result.length > 0) {
            return NextResponse.json(result[0]);
        } else {
            return new NextResponse("Company not found", {status: 400});
        }
    } catch (error: any) {
        console.log("get-company", error.message)
        return new NextResponse("Internal server error", {status: 500})
    }
}