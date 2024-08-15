'use client'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import '../../styles/globals.css'
import { signIn } from 'next-auth/react'
import buttonStyle from '../../styles/cssmodules/Button.module.css'
import { Button } from '@/components/ui/button'
import SignupForm from '@/components/shared/Form/signup'

export default function SignupPage() {
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
                        <CardTitle>Seja bem-vindo ao Nexus</CardTitle>
                        <CardDescription className='text-center text-nexus-gray text-base'>
                            Preencha seus dados para criar uma conta
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <SignupForm />
                    </CardContent>
                    <CardFooter className='flex flex-col'>
                        <p className='text-center text-nexus-gray text-base font-light'>ou continue com...</p>
                        <Button
                            onClick={() => signIn('discord')}
                            className={`${buttonStyle['button-discord-config']} w-full mt-4`}>
                            <img src='/discord-logo-blue.svg' className={buttonStyle['disc-logo']} />
                        </Button>
                        <Button 
                            onClick={() => signIn('google')}
                            className={`${buttonStyle['button-google-config']} w-full mt-4`}>
                        <img src='/google-logo.svg' className={buttonStyle['google-logo']}/>
                        </Button>
                    </CardFooter>
                </Card>
            </CardContent>
        </Card>
    )
}