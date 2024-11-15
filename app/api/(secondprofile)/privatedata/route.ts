export const runtime = 'nodejs';

import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "@/auth";
import { getServerSession } from "next-auth";

export async function POST(req: NextRequest, res: NextResponse) {
    if(req.method !== "POST") {
        return NextResponse.json({ msg: "Method not allowed" }, { status: 501 });
    }

    const session = await getServerSession(authOptions);

    if (!session || !session?.user) {
        return NextResponse.json({ msg: "User is not authenticated" }, { status: 403 });
    }

    try {
        const body = await req.json();
        const { gender, phone, yearOfBirth } = body;

        const updatedUser = await prisma.user.update({
            where: {
                email: session?.user?.email as string
            },
            data: {
                gender,
                phone,
                yearofbirth: yearOfBirth
            }
        })

        if(!updatedUser) {
            return NextResponse.json({ msg: "Unable to update the Private Data" }, { status: 501 });
        }

        return NextResponse.json({ data: updatedUser }, { status: 200 });
    } catch(err: any) {
        console.log("Error while updating Private Data" + err);
        return NextResponse.json({ msg: "Error while updating Private Data" }, { status: 501 });
    }
}