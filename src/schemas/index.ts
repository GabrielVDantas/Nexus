import { z } from 'zod'

export const signupSchema = z.object({
    username: z
        .string({ message: 'O campo "Nome" é obrigatório' })
        .min(1, { message: 'O campo "Nome" é obrigatório' }),
    email: z
        .string({ message: 'O campo "E-mail" é obrigatório' })
        .email({ message: 'Este formato de e-mail é inválido' }),
    password: z
        .string({ message: 'O campo "Senha" é obrigatório' })
        .min(6, { message: 'Use uma senha que possue no mínimo 6 caracteres' }),
})

export const signinSchema = z.object({
    email: z
        .string({ message: "O campo 'E-mail' é obrigatório!" })
        .email({ message: "Formato incorreto!" }),
    password: z
        .string({ message: "O campo 'Senha' é obrigatório!" })
        .min(1, { message: "O campo 'Senha' é obrigatório!" }),
})