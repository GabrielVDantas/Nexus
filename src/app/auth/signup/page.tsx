'use client'
import SignupForm from '@/app/auth/signup/_components'
import AuthCard from '../_components/auth-card'

const SignupPage = () => {
    return <AuthCard
        title='Seja bem vindo ao Nexus'
        description='Preencha os campos a seguir para criar uma conta'
        content={
            <SignupForm />
        } />
}

export default SignupPage