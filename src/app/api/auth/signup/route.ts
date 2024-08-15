import prisma from "@/lib/db"
import { NextRequest, NextResponse } from "next/server"
import { hash } from 'bcrypt'

export const POST = async (req: NextRequest) => {
    try {
        const { username, email, password } = await req.json()

        const isUserUnique = await prisma.user.findUnique({
            where: { email: email }
        })

        if (isUserUnique) return NextResponse.json({ message: 'Já existe um usuário com essas informações' }, { status: 409 })

        const encodedPassword = await hash(password, 10)

        const userSavedOnDb = await prisma.user.create({
            data: {
                username: username,
                email: email,
                password: encodedPassword
            }
        })

        const { password: _, avatar:__, ...userToReturn } = userSavedOnDb

        return NextResponse.json({ user: userToReturn }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: 'Erro ao registrar usuário ' }, { status: 500 })
    }
}
