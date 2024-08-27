"use server"

import { TypeSignupFormSchema } from "@/app/auth/signup/_components/schema"
import { getUserByEmail } from "@/data/user"
import { db } from "@/lib/db"
import { signupSchema } from "@/schemas"
import { hash } from 'bcryptjs'

export const signup = async (data: TypeSignupFormSchema) => {
    
    const isDataAsSchema = signupSchema.safeParse(data)

    if (!isDataAsSchema.success) return null
    
    const { username, email, password } = isDataAsSchema.data

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
