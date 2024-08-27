import Credentials from "next-auth/providers/credentials"
import Discord from "next-auth/providers/discord"
import Google from 'next-auth/providers/google'
import type { NextAuthConfig } from "next-auth"
import { getUserByEmail } from "@/data/user"
import { compare } from "bcryptjs"
import { signinSchema } from "@/schemas"

export default {
    providers: [
        Discord({
            clientId: process.env.DISCORD_CLIENT_ID as string,
            clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
        }),
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        Credentials({
            async authorize(credentials) {
                const isDataAsSchema = signinSchema.safeParse(credentials)
                
                if (!isDataAsSchema.success) return null
                
                const { email, password } = isDataAsSchema.data

                const isUserRegistered = await getUserByEmail(email)

                if (!isUserRegistered || !isUserRegistered.password) return null

                const isPasswordCorrect = await compare(password, isUserRegistered.password)

                if (!isPasswordCorrect) return null

                const { password: _, ...userWithoutPassword } = isUserRegistered
                return userWithoutPassword
            }
        }),
        ]
} satisfies NextAuthConfig