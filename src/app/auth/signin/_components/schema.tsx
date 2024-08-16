'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const signinFormSchema = z.object({
    email: z
        .string({ message: "O campo 'E-mail' é obrigatório!" })
        .email({ message: "Formato incorreto!" }),
    password: z
        .string({ message: "O campo 'Senha' é obrigatório!" })
        .min(6, { message: 'Use uma senha que possue no mínimo 6 caracteres' }),
})

export type TypeSigninFormSchema = z.infer<typeof signinFormSchema>

const useFormSignin = () => {
    return useForm<TypeSigninFormSchema>({
        resolver: zodResolver(signinFormSchema)
    })
}

export default useFormSignin