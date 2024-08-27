'use client'
import React, { useTransition } from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { signinFormSchema, TypeSigninFormSchema } from './schema'
import styles from '../../../../styles/cssmodules/Form.module.css'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signin } from '@/actions/signin'

const SigninForm = () => {

    const [isPending, startTransition] = useTransition()

    const form = useForm<TypeSigninFormSchema>({
        resolver: zodResolver(signinFormSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    })

    const submitForm = async (data: TypeSigninFormSchema) => {
        startTransition(() => {
            signin(data)
        })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(submitForm)}>
                <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                        <FormItem className='mt-2'>
                            <FormLabel className='text-nexus-red'>E-mail:</FormLabel>
                            <FormControl>
                                <Input 
                                    disabled={isPending}
                                    {...field} 
                                    type='text' 
                                    placeholder='Seu e-mail aqui...' 
                                    className={styles['form-input-config']} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='password'
                    render={({ field }) => (
                        <FormItem className='mt-2'>
                            <FormLabel className='text-nexus-red'>Senha:</FormLabel>
                            <FormControl>
                                <Input 
                                    disabled={isPending}
                                    {...field} 
                                    type='text' 
                                    placeholder='Sua senha aqui...' 
                                    className={styles['form-input-config']} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button
                    type='submit'
                    className={`${styles['form-submit-button-config']} w-full`}>
                    Entar
                </Button>
            </form>
        </Form>
    )
}

export default SigninForm
