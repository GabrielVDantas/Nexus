'use client'
import { z } from 'zod'

export const signinSchema = z.object({
    username: z
        .string({ message: "O campo 'Nome' é obrigatório!" })
        .min(1, { message: "O campo 'Nome' é obrigatório!" }),
    email: z
        .string({ message: "O campo 'E-mail' é obrigatório!" })
        .email({ message: "Formato incorreto!" }),
    password: z
        .string({ message: "O campo 'Senha' é obrigatório!" })
        .min(1, { message: "O campo 'Senha' é obrigatório!" }),
})

export type FormSchema = z.infer<typeof signinSchema>

