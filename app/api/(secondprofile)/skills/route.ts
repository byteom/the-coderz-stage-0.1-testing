export const runtime = 'nodejs';

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import { getCurrentUser } from "@/actions/user.action";
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
        const { skills } = await req.json();

        if (!Array.isArray(skills) || skills.length === 0) {
            return NextResponse.json(
                { message: 'Invalid interests format' },
                { status: 400 }
            );
        }

        console.log(skills);

        const updatedResponse = await prisma.user.update({
            where: {
                email: session?.user?.email as string
            },
            data: {
                skills
            }
        })

        if(!updatedResponse) {
            return NextResponse.json({ msg: "Unable to update the skill section" }, { status: 501 });
        }

        return NextResponse.json({ 
            msg: "Skills updated successfully", 
            skills: updatedResponse?.skills 
        }, { 
            status: 200 
        });
    } catch (err: any) {
        console.log("Error while updating skills Section: " + err);
        return NextResponse.json({ msg: "Error while updating skills section" }, { status: 501 });
    }
}