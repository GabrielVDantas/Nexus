'use client'
import React from 'react'
import { updateEmailFormData } from '../schema'
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import styles from '../../../../styles/cssmodules/Profile.module.css'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

const AvatarForm = () => {

    const form = updateEmailFormData()

    return (
        <>
            <Dialog>
                <DialogTrigger asChild className='flex flex-col items-center mt-4 text-nexus-red'>
                    <Button className='size-44 rounded-full'>
                        <Avatar className='size-44'>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-nexus-black border-none">
                    <DialogHeader>
                        <DialogTitle className='text-center text-nexus-red font-semibold text-2xl'>Avatar: </DialogTitle>
                        <DialogDescription className='text-center text-nexus-gray text-base'>
                            Escolha um novo avatar e salve para alterá-lo
                        </DialogDescription>
                    </DialogHeader>
                    <Form {...form}>
                        <form>
                            <FormField
                                control={form.control}
                                name='name'
                                render={({ field }) => (
                                    <FormItem className='mt-4'>
                                        <FormLabel className="text-nexus-red">Nome:</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder='Sua foto de perfil...'
                                                type='file' {...field} className={styles['form-input-config']} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </form>
                    </Form>
                    <DialogFooter>
                        <Button type="submit" className='bg-nexus-red border-2 border-nexus-red bg-transparent rounded text-nexus-red
    hover:bg-nexus-red hover:text-nexus-black mt-3'>Atualizar foto</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>

    )
}

export default AvatarForm

{/* <Form {...form}>
                <form className='flex flex-row min-w-full mt-1'>
                    <FormField
                        control={form.control}
                        name='password'
                        render={({ field }) => (
                            <FormItem className='w-full mt-4'>
                                <FormLabel className='text-nexus-red'>Senha:</FormLabel>
                                <FormControl>
                                    <Input {...field} value='uau' placeholder='Sua senha aqui...'
                                        className={styles['form-input-config']} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className={styles['form-submit-button-config']}>
                        Atualizar senha
                    </Button>
                </form>
            </Form> */}