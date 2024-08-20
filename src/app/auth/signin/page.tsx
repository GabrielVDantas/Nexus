import React from 'react'
import AuthCard from '../_components/auth-card'
import SigninForm from '@/app/auth/signin/_components'

const SigninPage = () => {

    return <AuthCard
        title='Que bom ter você de volta'
        description='Preencha os campos para entrar em sua conta'
        content={
            <SigninForm />
        } />
}

export default SigninPage

