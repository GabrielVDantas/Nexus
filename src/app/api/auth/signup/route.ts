import { NextRequest, NextResponse } from "next/server"
import { hash } from 'bcrypt'
import { getUserByEmail } from "@/data/user"
import { db } from "@/lib/db"

export const POST = async (req: NextRequest) => {
    try {
        const { username, email, password } = await req.json()

        const isUserUnique = await getUserByEmail(email)

        if (isUserUnique) return NextResponse.json({ message: 'Já existe um usuário com essas informações' }, { status: 409 })

        const encodedPassword = await hash(password, 10)

        const userSavedOnDb = await db.user.create({
            data: {
                username: username,
                email: email,
                password: encodedPassword
            }
        })

        const { password: _, avatar: __, ...userWithoutPasswordAndAvatar } = userSavedOnDb

        return NextResponse.json({ user: userWithoutPasswordAndAvatar }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: 'Erro ao registrar usuário ' }, { status: 500 })
    }
}
