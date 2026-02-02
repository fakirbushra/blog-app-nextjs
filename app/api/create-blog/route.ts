import { NextResponse } from "next/server";
import { success } from "zod";

export async function POST() {
    console.log("Hello its from server");

    return NextResponse.json({ success: true })
}