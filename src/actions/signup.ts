"use server"

import { signupFormSchema, TypeSignupFormSchema } from "@/app/auth/signup/_components/schema"
import { getUserByEmail } from "@/data/user"
import { db } from "@/lib/db"
import { hash } from 'bcryptjs'

export const signup = async (data: TypeSignupFormSchema) => {

    const isDataAcordingSchema = signupFormSchema.safeParse(data)

    if (!isDataAcordingSchema.success) return null

    const { username, email, password } = isDataAcordingSchema.data

    const isUserAlreadyRegistered = await getUserByEmail(email)

    if (isUserAlreadyRegistered) return null

    const encodedPassword = await hash(password, 10)

    const registeredUser = await db.user.create({
        data: {
            username,
            email,
            password: encodedPassword,
        }
    })

    const { password: _, ...user } = registeredUser
    return user
}
