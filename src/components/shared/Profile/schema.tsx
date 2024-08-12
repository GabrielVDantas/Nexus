import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

export const updateUsernameFormSchema = z.object({
    username: z
        .string({ message: "Campo 'Nome' é obrigatório!" })
        .min(1, { message: "Campo 'Nome' é obrigatório!" }),
})

export type UpdateUsernameFormSchema = z.infer<typeof updateUsernameFormSchema>


export const updateUsernameFormData = () => {
    return useForm({
        resolver: zodResolver(updateUsernameFormSchema)
    })
}

export const updateEmailFormSchema = z.object({
    email: z
        .string({ message: "Campo 'E-mail' é obrigatório!" })
        .email({ message: "Formato de e-mail inválido!" })
})

export type UpdateEmailFormSchema = z.infer<typeof updateEmailFormSchema>

export const updateEmailFormData = () => {
    return useForm({
        resolver: zodResolver(updateEmailFormSchema)
    })
}

export const updatePasswordFormSchema = z.object({
    password: z
        .string({ message: "Campo 'Senha' é obrigatório!" })
        .min(1, { message: "Campo 'Senha' é obrigatório!" }),
})

export type UpdatePasswordFormSchema = z.infer<typeof updatePasswordFormSchema>

export const updatePasswordFormData = () => {
    return useForm({
        resolver: zodResolver(updatePasswordFormSchema)
    })
}