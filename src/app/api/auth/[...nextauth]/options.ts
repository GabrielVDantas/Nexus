import CredentialProvider from 'next-auth/providers/credentials'
import DiscordProvider from 'next-auth/providers/discord'
import GoogleProvider from 'next-auth/providers/google'
import prisma from '../../../../lib/db'
import { compare } from 'bcrypt'
import { PrismaAdapter } from '@auth/prisma-adapter'

export const options = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialProvider({
            name: "credentials",
            credentials: {
                email: { label: 'email', type: 'text' },
                password: { label: 'password', type: 'text' },
            },
            async authorize(credentials) {
                if (!credentials) return null

                const { email, password } = credentials

                const isUserRegistered = await prisma.user.findUnique({
                    where: {
                        email: email
                    }
                })

                if (!isUserRegistered) return null

                const isPasswordCorrect = await compare(password, isUserRegistered.password as string)

                if (!isPasswordCorrect) return null

                const { password: _, avatar: __, ...userWithoutPasswordAndAvatar } = isUserRegistered

                return userWithoutPasswordAndAvatar
            }
        }),
        DiscordProvider({
            clientId: process.env.DISCORD_ID!,
            clientSecret: process.env.DISCORD_SECRET!,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID!,
            clientSecret: process.env.GOOGLE_SECRET!
        })
    ],
}
