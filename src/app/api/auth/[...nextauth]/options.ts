import CredentialProvider from 'next-auth/providers/credentials'
import DiscordProvider from 'next-auth/providers/discord'
import GoogleProvider from 'next-auth/providers/google'
import prisma from '../../../../lib/db'
import { compare } from 'bcrypt'

export const authOptions = {
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

                const isPasswordCorrect = await compare(password, isUserRegistered.password)

                if (!isPasswordCorrect) return null

                const { password:_, avatar:__, ...loggedUser} = isUserRegistered

                return loggedUser
            }
        }),
        DiscordProvider({
            clientId: process.env.DISCORD_ID!,
            clientSecret: process.env.DISCORD_SECRET!,
        }),
        // GoogleProvider({
        //     clientId: process.env.GOOGLE_ID!,
        //     clientSecret: process.env.GOOGLE_SECRET!,

        //     authorization: {
        //         params: {
        //             prompt: 'consent',
        //             access_type: 'offline',
        //             response_type: 'code'
        //         }
        //     }
        // })
    ],
    // session: {
    //     strategy: 'jwt'
    // },
    // callbacks: {
    //     async signIn(account: any, profile: any) {
    //         if (!profile?.email) throw new Error("Perfil não encontrado!");

    //         await prisma.user.upsert({
    //             where: {
    //                 email: profile.email,
    //             },
    //             create: {
    //                 username: profile.name,
    //                 email: profile.email,
    //             },
    //             update: {
    //                 email: profile.email,
    //             }
    //         })

    //         return true
    //     }
    // }

}
