import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "./app/lib/prisma";
import bcrypt from 'bcryptjs';

import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";
import { JWT } from "next-auth/jwt";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma) as Adapter,
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                },
                password: {
                    label: "Password",
                    type: "password"
                }
            },
            async authorize(credentials) {
                if(!credentials || !credentials.email || !credentials.password) {
                    throw new Error("Please enter an email and password");
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials?.email
                    }
                })

                if(!user) {
                    throw new Error("No user found with this credentials");
                }

                const passwordMatch = await bcrypt.compare(credentials?.password, user?.hashedPassword!);

                if(!passwordMatch) {
                    throw new Error("Password incorrect");
                }
                console.log("Authorized user:", user);
                return {
                    id: user.id,
                    email: user.email,
                    name: user?.name,
                    image: user?.image,
                };
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_SECRET_ID || ""
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID || "",
            clientSecret: process.env.GITHUB_SECRET_ID || ""
        })
    ],
    secret: process.env.NEXT_AUTH_SECRET,
    session: {
        strategy: "jwt"
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = token.sub;
                token.name = user.name;
                token.email = user.email;
                token.image = user.image;
            }
            return token;
        },
        session({ session, token } : { session: any; token: JWT }) {
            if(token && session?.user) {
                session.user.id = token.id;
                session.user.name = token.name;
                session.user.email = token.email;
                session.user.image = token.image;
            }
            return session;
        }
    },
    pages: {
        signIn: '/signin',
        error: '/signin?error=CredentialsSignin',
    },
}