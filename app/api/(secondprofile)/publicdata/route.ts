export const runtime = 'edge';


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

    // {
    //     "name": "Niraj Jha", 
    //     "tagline": "Front-End Developer", 
    //     "college": "Lovely Professional University", 
    //     "location": "Nepal", 
    //     "github": "https://github.com/jha-niraj", 
    //     "linkedin": "https://github.com/jha-niraj", 
    //     "twitter": "https://github.com/jha-niraj", 
    //     "leetcode": "https://github.com/jha-niraj", 
    //     "website": "https://github.com/jha-niraj"
    // }

    try {
        const body = await req.json();
        const { tagline, college, location, github, linkedin, twitter, leetcode, website } = body;

        const updatedUser = await prisma.user.update({
            where: {
                email: session?.user?.email as string
            },
            data: {
                tagline, 
                college, 
                location, 
                github, 
                linkedin, twitter, 
                leetcode, 
                website
            }
        })

        if(!updatedUser) {
            return NextResponse.json({ msg: "Unable to update the Public Profile" }, { status: 501 });
        }

        return NextResponse.json({ data: updatedUser }, { status: 200 });
    } catch(err: any) {
        console.log("Error while updating Public Profile" + err);
        return NextResponse.json({ msg: "Error while updating Public Profile" }, { status: 501 });
    }
}