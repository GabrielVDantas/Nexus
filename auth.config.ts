import Credentials from "next-auth/providers/credentials"
import Discord from "next-auth/providers/discord"
import Google from 'next-auth/providers/google'
import type { NextAuthConfig } from "next-auth"
import { signinFormSchema } from "@/app/auth/signin/_components/schema"
import { getUserByEmail } from "@/data/user"
import { compare } from "bcryptjs"

export default {
    providers: [
        Credentials({
            async authorize(credentials) {
                const isDataAcordingSchema = signinFormSchema.safeParse(credentials)

                if (isDataAcordingSchema.success) {
                    const { email, password } = isDataAcordingSchema.data

                    const isUserRegistered = await getUserByEmail(email)

                    if (!isUserRegistered || !isUserRegistered.password) return null

                    const isPasswordCorrect = await compare(password, isUserRegistered.password)

                    if (!isPasswordCorrect) return null

                    const { password: _, ...userWithoutPassword } = isUserRegistered
                    return userWithoutPassword
                }
                return null
            }
        }), 
        Discord, 
        Google]
} satisfies NextAuthConfig