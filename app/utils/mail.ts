import nodemailer from "nodemailer";
import bcrypt from 'bcryptjs';

import { NextResponse } from "next/server";

interface SendEmailprops {
    email: string;
    emailType: string;
    userId: string
}

export const sendEmail = async ({ email, emailType, userId }: SendEmailprops) => {
    try {

        // These are for the configuration to connect to the Nodemailer:
        var transport = nodemailer.createTransport({
            host: process.env.NODEMAILER_HOST,
            port: 2525,
            auth: {
                user: process.env.NODEMAILER_USER,
                pass: process.env.NODEMAILER_PASSWORD
            }
        });

        let mailOptions;
        const token = await bcrypt.hash(userId.toString(), 10);

        // Now we have to write the cases for which we want to send an email to the user: e.g. Verify email, Forgot Password
        if (emailType === "VERIFY") {
            if (!token) {
                return NextResponse.json({ message: "No token found" }, { status: 400 });
            }
            const verifyLink = `${process.env.NEXT_AUTH_URL}/verifyemail?token=${token}`;
            mailOptions = {
                from: process.env.SMTP_FROM_EMAIL,
                to: email,
                subject: "Verify Your Account",
                text: `Welcome! Please verify your email by clicking the link below:\n\n${verifyLink}\n\nOr copy and paste the following URL into your browser:\n${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/verifyemail?token=${token}`,
                html: `
                    <html>
                        <body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4;">
                            <div style="max-width: 600px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
                                <h2 style="color: #333;">Welcome to Our Platform!</h2>
                                <p style="font-size: 16px; color: #555;">
                                    Thank you for registering! To complete your registration, please verify your email address by clicking the button below:
                                </p>
                                <a href="${verifyLink}" style="display: inline-block; margin: 20px 0; padding: 12px 20px; background-color: #007BFF; color: white; text-decoration: none; border-radius: 5px;">Verify Your Email</a>
                                <p style="font-size: 16px; color: #555;">
                                    If the button above doesn't work, you can also copy and paste the link below into your browser:
                                </p>
                                <p style="font-size: 14px; color: #007BFF; word-break: break-all;">
                                    ${process.env.NEXT_AUTH_URL}/verifyemail?token=${token}
                                </p>
                                <p style="font-size: 14px; color: #777;">
                                    If you did not create an account, please ignore this email.
                                </p>
                                <p style="font-size: 14px; color: #777;">
                                    Best regards,<br>Your Company Name
                                </p>
                            </div>
                        </body>
                    </html>
                `,
            };
        } else {
            if (!token) {
                return NextResponse.json({ message: "No token found" }, { status: 400 });
            }
            const resetLink = `${process.env.NEXT_AUTH_URL}/verifyemail?token=${token}`;
            mailOptions = {
                from: process.env.SMTP_FROM_EMAIL,
                to: email,
                subject: "Password Reset Request",
                text: `We received a request to reset your password. Click the link below to reset it:\n\n${resetLink}\n\nOr copy and paste the following URL into your browser:\n${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/resetpassword?token=${token}`,
                html: `
                    <html>
                        <body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4;">
                            <div style="max-width: 600px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
                                <h2 style="color: #333;">Password Reset Request</h2>
                                <p style="font-size: 16px; color: #555;">
                                    We received a request to reset your password. If you did not make this request, you can safely ignore this email.
                                </p>
                                <p style="font-size: 16px; color: #555;">
                                    To reset your password, please click the button below:
                                </p>
                                <a href="${resetLink}" style="display: inline-block; margin: 20px 0; padding: 12px 20px; background-color: #007BFF; color: white; text-decoration: none; border-radius: 5px;">Reset Your Password</a>
                                <p style="font-size: 16px; color: #555;">
                                    If the button above doesn't work, you can also copy and paste the link below into your browser:
                                </p>
                                <p style="font-size: 14px; color: #007BFF; word-break: break-all;">
                                    ${process.env.NEXT_AUTH_URL}/resetpassword?token=${token}
                                </p>
                                <p style="font-size: 14px; color: #777;">
                                    If you have any questions, feel free to reach out to our support team.
                                </p>
                                <p style="font-size: 14px; color: #777;">
                                    Best regards,<br>Your Company Name
                                </p>
                            </div>
                        </body>
                    </html>
                `,
            };
        }

        const mailResponse = await transport.sendMail(mailOptions);
        if (!mailOptions) {
            throw new Error("Mail sending process is failed");
        }
        return mailResponse;
    } catch (err: any) {
        throw new Error(err.message);
    }
}