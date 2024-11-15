export const runtime = 'edge';

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { token } = reqBody;

        const user = await prisma.user.findFirst({
            where: {
                verifyToken: token,
                verifyTokenExpiry: {
                    gt: new Date()
                }
            }
        })

        if(!user) {
            return NextResponse.json({ message: "Invalid token" }, { status: 501 });
        }

        const verifyResponse = await prisma.user.update({
            where: {
                id: user?.id
            },
            data: {
                emailVerified: true,
                verifyToken: null,
                verifyTokenExpiry: null
            } 
        })

        if(!verifyResponse) {
            return NextResponse.json({ message: "Email verification failed" }, { status: 501 });
        }
        return NextResponse.json({ message: "Email verification successful" }, { status: 200 });
    } catch (err: any) {
        console.log(err.message);
        return NextResponse.json({ message: "Error while verifying user!!!" }, { status: 501 });
    }
}
