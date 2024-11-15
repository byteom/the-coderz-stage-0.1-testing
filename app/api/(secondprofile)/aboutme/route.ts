export const runtime = 'edge';


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
        const body = await req.json();
        const { tempAboutMe } = body;

        if (!tempAboutMe) {
            return NextResponse.json(
                { msg: "About me content is required" },
                { status: 400 }
            );
        }

        const updatedResponse = await prisma.user.update({
            where: {
                email: session?.user?.email as string
            },
            data: {
                aboutme: tempAboutMe
            }
        })

        if (!updatedResponse) {
            return NextResponse.json({ msg: "Unable to update the About Me Section..." }, { status: 503 });
        }

        return NextResponse.json({
            msg: "Profile updated successfully",
            aboutme: updatedResponse?.aboutme
        });
    } catch (err: any) {
        console.log("Error while updating About Section: " + err);
        return NextResponse.json({ msg: "Error while updating about section" }, { status: 501 });
    }
}