'use client'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { signIn } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import buttonStyles from '../../../styles/cssmodules/Button.module.css'
import cardStyles from '../../../styles/cssmodules/Card.module.css'
import { DEFAULT_SIGNIN_REDIRECT } from '../../../../routes'

interface Props {
    title?: string,
    description?: string,
    content: React.ReactNode,
}

const AuthCard = ({ title, description, content }: Props) => {

    const oauthSignin = (provider: 'discord' | 'google') => {
        signIn(provider, {
            callbackUrl: DEFAULT_SIGNIN_REDIRECT
        })
    }
    return (
        <section className={cardStyles['card-middle-card-config']}>
            <div className={cardStyles['card-left-content-config']}>
                <img
                    className={cardStyles['card-auth-image-config']}
                    src='/side-image.png'
                    alt='Pessoa na frente do computador' />
            </div>
            <div className={cardStyles['card-right-content-config']}>
                <Card className={cardStyles['card-auth-form-card-config']}>
                    <CardHeader className='text-center'>
                        <CardTitle className={cardStyles['card-auth-title-config']}>
                            {title}
                        </CardTitle>
                        <CardDescription className={cardStyles['card-auth-description-config']}>
                            {description}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        {content}
                    </CardContent>
                    <CardFooter className='flex flex-col text-center'>
                        <p className={cardStyles['card-auth-footer-config']}>ou continue com...</p>
                        <Button
                            onClick={() => signIn('discord', { callbackUrl: DEFAULT_SIGNIN_REDIRECT })}
                            className={`${buttonStyles['button-discord-config']} w-full mt-4`}>
                            <img src='/discord-logo-blue.svg' className={buttonStyles['disc-logo']} />
                        </Button>
                        <Button
                            onClick={() => signIn('google', { callbackUrl: DEFAULT_SIGNIN_REDIRECT })}
                            className={`${buttonStyles['button-google-config']} w-full mt-4`} >
                            <img src='/google-logo.svg' className={buttonStyles['google-logo']} />
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </section>
    )
}

export default AuthCard