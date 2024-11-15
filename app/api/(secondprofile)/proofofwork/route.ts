export const runtime = 'edge';


import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import { getCurrentUser } from "@/actions/user.action";

interface ProofOfWorkItem {
    description: string;
    skills: string[];
    link: string;
}

export async function POST(req: NextRequest) {
    if (req.method !== 'POST') {
        return NextResponse.json({ msg: "Method not allowed" }, { status: 501 });
    }

    const session = await getServerSession(authOptions);
    if (!session || !session?.user) {
        return NextResponse.json({ msg: "User is not authenticated" }, { status: 403 });
    }

    try {
        const user = await getCurrentUser();
        console.log(user);
        const body = await req.json();

        if (!Array.isArray(body)) {
            return NextResponse.json(
                { error: "Expected an array of proof of work items" },
                { status: 400 }
            );
        }

        for (const item of body) {
            const { description, skills, link } = item;
            if (!description || !Array.isArray(skills) || !link) {
                return NextResponse.json(
                    { error: "Missing required fields in one or more items" },
                    { status: 400 }
                );
            }
        }

        const createdItems = await Promise.all(
            body.map((item: ProofOfWorkItem) =>
                prisma.proofOfWork.create({
                    data: {
                        description: item.description,
                        skills: item.skills,
                        link: item.link,
                        userId: user?.id!
                    }
                })
            )
        );

        return NextResponse.json(
            {
                message: "Proof of work items created successfully",
                data: createdItems
            },
            { status: 201 }
        );
    } catch (error) {
        console.error("Error creating proof of work:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}