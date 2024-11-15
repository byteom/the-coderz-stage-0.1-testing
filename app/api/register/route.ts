export const runtime = 'edge';

import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcryptjs';
import { RequestBody } from "@/app/types";
import { sendEmail } from "@/app/utils/mail";

export async function POST(request: NextRequest) {
    try {
        const body: RequestBody = await request.json();
        const { name, email, password } = body;

        if (!name || !email || !password) {
            return NextResponse.json(
                { message: "Missing required fields" },
                { status: 400 }
            );
        }

        console.log(body);

        const existingUser = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if(existingUser) {
            return NextResponse.json({ message: "User alreay exist with this email" }, { status: 501 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        // Now create a verify token and verify expiry time
        const verifyToken = Math.random().toString(36).substring(2); // Simple token for example purpose
        const verifyTokenExpiry = new Date();
        verifyTokenExpiry.setHours(verifyTokenExpiry.getHours() + 72); // Token will be valid for 3 days

        // Now create a new user in the database:
        const user = await prisma.user.create({
            data: {
                name,
                email,
                hashedPassword,
                verifyToken,
                verifyTokenExpiry
            }
        })

        // After you have created the user in the database, send an verification email to the user:
        // await sendEmail({ email, emailType: "VERIFY", userId: user?.id });

        return NextResponse.json({ message: "Sign Up Successful", user }, { status: 200 });
    } catch(err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}