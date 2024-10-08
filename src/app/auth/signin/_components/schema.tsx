'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export const signinFormSchema = z.object({
    email: z
        .string({ message: "O campo 'E-mail' é obrigatório!" })
        .email({ message: "Este formato de e-mail é inválido!" }),
    password: z
        .string({ message: "O campo 'Senha' é obrigatório!" })
        .min(1, { message: "O campo 'Senha' é obrigatório!" }),
})

export type TypeSigninFormSchema = z.infer<typeof signinFormSchema>

const useFormSignin = () => {
    return useForm<TypeSigninFormSchema>({
        resolver: zodResolver(signinFormSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    })
}

export default useFormSignin