'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export const signupFormSchema = z.object({
    username: z
        .string({ message: 'O campo "Nome" é obrigatório' })
        .min(1, { message: 'O campo "Nome" é obrigatório' }),
    email: z
        .string({ message: 'O campo "E-mail" é obrigatório' })
        .email({ message: 'Este formato de e-mail é inválido' }),
    password: z
        .string({ message: 'O campo "Senha" é obrigatório' })
        .min(6, { message: 'Use uma senha que possue no mínimo 6 caracteres' }),
    terms: z
        .boolean({ message: 'Você deve aceitar os termos e condições' })
        .refine(val => val === true, {message: 'Você deve aceitar os termos e condições'})
})

export type TypeSignupFormSchema = z.infer<typeof signupFormSchema>

const useFormSignup = () => {
  return useForm<TypeSignupFormSchema>({
    resolver: zodResolver(signupFormSchema)
})
}

export default useFormSignup