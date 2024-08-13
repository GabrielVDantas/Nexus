import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import '../../styles/globals.css'
import SigninForm from '@/components/shared/Form/signin'

export default function SigninPage() {
    return (
        <Card className='mx-auto w-3/5 flex rounded border-none bg-nexus-black h-screen'>
            <CardHeader className='w-2/4'>
                <img
                    className='bg-nexus-darker h-full rounded'
                    src='/side-image.png'
                    alt='Pessoa na frente do computador' />
            </CardHeader>
            <CardContent className='w-2/4 flex justify-center p-6'>
                <Card className='w-full rounded border-none bg-nexus-black'>
                    <CardHeader className='text-center text-nexus-red font-semibold text-3xl'>
                        <CardTitle>Seja bem-vindo de volta</CardTitle>
                        <CardDescription className='text-center text-nexus-gray text-base'>
                            Preencha seus dados para entrar novamente
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <SigninForm />
                    </CardContent>
                </Card>
            </CardContent>
        </Card>
    )
}