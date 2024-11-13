export const runtime = 'edge';

import { NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';

export async function POST(req: Request) {
    try {
        const { name, skill, yearofstudy, email, details } = await req.json()

        if (!name || !skill || !yearofstudy || !email) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            )
        }

        console.log(name, email, skill);

        const submission = await prisma.contactSubmission.create({
            data: {
                name,
                skill,
                yearofstudy,
                email,
                details: details || ''
            },
        })

        return NextResponse.json(
            { message: 'Submission successful', data: submission },
            { status: 201 }
        )
    } catch (error) {
        console.error('Submission error:', error)
        return NextResponse.json(
            { error: 'Failed to submit form' },
            { status: 500 }
        )
    }
}