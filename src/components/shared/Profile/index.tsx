'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import NoFileForm from './forms/noFileForm'
import FileForm from './forms/fileForm'

interface UserData {
    username: string,
}

const Profile = ({ username }: UserData) => {

    return (
        <section className='flex-1 flex flex-col my-4 mx-72 px-4 py-3'>
            <Card className="rounded bg-nexus-black border-none">
                <CardHeader>
                    <CardTitle className="text-nexus-red text-center font-semibold text-3xl">
                        Olá, {username}</CardTitle>
                    <CardDescription className="text-center text-nexus-gray text-base">
                        Este é o seu perfil. Essas são suas informações</CardDescription>
                    <CardContent className='flex flex-col items-center'>
                        <FileForm />
                        <NoFileForm 
                            keyword='username' 
                            label='Nome:' 
                            currentData='Gabriel' 
                            placeholder='Seu nome aqui...' 
                            buttonContent='Atualizar nome' />
                        <NoFileForm 
                            keyword='email' 
                            label='E-mail:' 
                            currentData='gab@gab.com' 
                            placeholder='Seu e-mail aqui...' 
                            buttonContent='Atualizar e-mail' />
                        <NoFileForm 
                            keyword='password' 
                            label='Senha:' 
                            currentData='123456' 
                            placeholder='Sua senha aqui...' 
                            buttonContent='Atualizar senha' />
                    </CardContent>
                </CardHeader>
            </Card>
        </section>
    )
}

export default Profile