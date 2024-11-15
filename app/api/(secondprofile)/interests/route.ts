export const runtime = 'nodejs';


import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";

export async function POST(req: NextRequest, res: NextResponse) {
    if (req.method !== 'POST') {
        return NextResponse.json({ msg: "Method not allowed" }, { status: 501 });
    }
    const session = await getServerSession(authOptions);

    if (!session || !session?.user) {
        return NextResponse.json({ msg: "User is not authenticated" }, { status: 403 });
    }

    try {
        const { interests } = await req.json();

        if (!Array.isArray(interests) || interests.length === 0) {
            return NextResponse.json(
                { message: 'Invalid interests format' },
                { status: 400 }
            );
        }

        console.log(interests);

        const response = await prisma.user.update({
            where: {
                email: session?.user?.email as string
            },
            data: {
                interests
            }
        })

        if(!response) {
            return NextResponse.json({ msg: "Unable to update the interests section" }, { status: 501 });
        }

        return NextResponse.json({ msg: "Interests updated successfully", interests }, { status: 200 });
    } catch (err: any) {
        console.log("Error while updating Interests Section: " + err);
        return NextResponse.json({ msg: "Error while updating interests section" }, { status: 501 });
    }
}