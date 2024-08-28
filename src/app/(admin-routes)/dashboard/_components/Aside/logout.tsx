'use client'
import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { signout } from '@/actions/signout'

interface Props {
    children: React.ReactNode
}

const Logout = ({ children }: Props) => {

    const logout = async () => {
        signout()
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                {
                    <Button
                        variant='ghost' className='hover:bg-transparent'>
                        {children}
                    </Button>
                }
            </AlertDialogTrigger>
            <AlertDialogContent className='bg-nexus-black border-none rounded'>
                <AlertDialogHeader>
                    <AlertDialogTitle
                        className='text-nexus-red font-semibold text-2xl'>
                        Tem certeza que deseja sair?
                    </AlertDialogTitle>
                    <AlertDialogDescription className='text-nexus-gray text-sm'>
                        Você está prestes a encerrar sua sessão.
                        Você poderá retornar a qualquer momento mas terá que fazer login novamente...
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel
                        className='rounded border-2 border-nexus-red text-nexus-red bg-transparent hover:text-nexus-black hover:bg-nexus-red'>
                        Não
                    </AlertDialogCancel>
                    <AlertDialogAction onClick={() => logout()}
                        className='rounded border-2 border-nexus-red text-nexus-red bg-transparent hover:text-nexus-black hover:bg-nexus-red'>
                        Sim
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default Logout