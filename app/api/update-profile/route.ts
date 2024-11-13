export const runtime = 'edge';

import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "@/auth";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";

export async function PUT(req: NextRequest, res: NextResponse) {
    if (req.method !== 'PUT') {
        return NextResponse.json({ msg: "Method not allowed" }, { status: 501 });
    }

    const session = await getServerSession(authOptions);

    if (!session || !session?.user) {
        return NextResponse.json({ msg: "User is not authenticated" }, { status: 403 });
    }

    const rawBody = await req.text();
    
    // Parse the JSON
    let changedData;
    try {
        changedData = JSON.parse(rawBody);
    } catch (error) {
        console.error("Error parsing JSON:", error);
        return NextResponse.json({ msg: "Invalid JSON in request body" }, { status: 400 });
    }

    console.log("Received changed data:", changedData);

    const {
        aboutMe = undefined,
        socialHandles = {},
        selectedSkills = [],
        selectedInterests = []
    } = changedData;

    try {
        const updatedUser = await prisma.user.update({
            where: {
                email: session?.user?.email as string
            },
            data: {
                aboutme: aboutMe,
                github: socialHandles?.github,
                linkedin: socialHandles?.linkedin,
                twitter: socialHandles?.twitter,
                leetcode: socialHandles?.leetcode,
                website: socialHandles?.website,
                skills: selectedSkills,
                interests: selectedInterests,
            }
        })

        console.log(updatedUser);

        if (!updatedUser) {
            return NextResponse.json({ msg: "Failed to update user details" }, { status: 501 })
        }

        return NextResponse.json({ data: updatedUser }, { status: 200 });
    } catch (err: any) {
        console.log("Error while updating profile" + err);
        return NextResponse.json({ msg: "Error while updating the profile" }, { status: 501 });
    }
}