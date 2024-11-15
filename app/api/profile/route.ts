export const runtime = 'nodejs';


import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "@/auth";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";

export async function GET(req: NextRequest, res: NextResponse) {
    if (req.method !== 'GET') {
        return NextResponse.json({ msg: "Method not allowed" }, { status: 501 });
    }

    const session = await getServerSession(authOptions);

    if (!session || !session?.user) {
        return NextResponse.json({ msg: "User is not authenticated" }, { status: 403 });
    }

    try {
        const user = await prisma.user.findUnique({
            where: {
                email: session?.user?.email as string
            },
            select: {
                aboutme: true,
                gender: true,
                phone: true,
                yearofbirth: true,
                tagline: true,
                college: true,
                location: true,
                github: true,
                linkedin: true,
                twitter: true,
                leetcode: true,
                website: true,
                interests: true,
                skills: true,
                proofofwork: true
            }
        })

        if (!user) {
            return NextResponse.json({ msg: "User not found" }, { status: 404 })
        }

        return NextResponse.json({ data: user }, { status: 200 });
    } catch (err: any) {
        console.log("Error while fetching user data" + err);
        return NextResponse.json({ msg: "Error while fetching user data" }, { status: 501 });
    }
}