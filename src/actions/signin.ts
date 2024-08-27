'use server'
import { TypeSigninFormSchema } from "@/app/auth/signin/_components/schema";
import { signIn } from "@/auth";
import { DEFAULT_SIGNIN_REDIRECT } from "../../routes";
import { AuthError } from "next-auth";
import { signinSchema } from "@/schemas";

export const signin = async (data: TypeSigninFormSchema) => {

    const isDataAsSchema = signinSchema.safeParse(data)

    if (!isDataAsSchema.success) return { error: 'Dados inválidos!' }

    const { email, password } = isDataAsSchema.data

    try {
        await signIn('credentials', {
            email,
            password,
            redirectTo: DEFAULT_SIGNIN_REDIRECT
        })
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return { error: 'Credenciais inválidas' }
                default:
                    return { error: "Algo deu errado na autenticação" }
            }
        }
        throw error
    }
}