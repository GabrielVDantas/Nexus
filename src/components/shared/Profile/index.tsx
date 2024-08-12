'use client'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import Username from './forms/username'
import Email from './forms/email'
import Password from './forms/password'
import AvatarForm from './forms/avatar'



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
                        Este é o seu perfil, abaixo você verá suas informações</CardDescription>
                    <CardContent className='flex flex-col items-center'>
                        <AvatarForm />
                        <Username username={username} />
                        <Email email='Gab@gab.com' />
                        <Password password='123456' />
                    </CardContent>
                </CardHeader>
            </Card>
        </section>
    )
}

export default Profile