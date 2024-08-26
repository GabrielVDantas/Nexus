import { signinFormSchema, TypeSigninFormSchema } from "@/app/auth/signin/_components/schema";
import { signIn } from "@/auth";
import { DEFAULT_SIGNIN_REDIRECT } from "../../routes";
import { AuthError } from "next-auth";

export const signin = async (data: TypeSigninFormSchema) => {

    const isDataAcordingSchema = signinFormSchema.safeParse(data)

    if (!isDataAcordingSchema.success) return { error: 'Dados inválidos!' }

    const { email, password } = isDataAcordingSchema.data

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
                    return { error: 'Algo deu errado' }
            }
        }
        throw error
    }
}