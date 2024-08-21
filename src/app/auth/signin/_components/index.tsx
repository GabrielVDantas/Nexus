'use client'
import React from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import useFormSignin, { TypeSigninFormSchema } from './schema'
import styles from '../../../../styles/cssmodules/Form.module.css'
import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const SigninForm = () => {

    const router = useRouter()

    const form = useFormSignin()

    const submitForm = async (data: TypeSigninFormSchema) => {
        try {
            const response = await signIn('credentials', {
                redirect: false,
                email: data.email,
                password: data.password,
            })
            if (response && response.ok) {
                router.replace('/dashboard')
            } else {
                alert('Algo deu errado')
            }
        } catch (error) {
            throw error
        }

    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(submitForm)}>
                <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                        <FormItem className='mt-4'>
                            <FormLabel className='text-nexus-red'>E-mail:</FormLabel>
                            <FormControl>
                                <Input {...field} type='text' placeholder='Seu e-mail aqui...' className={styles['form-input-config']} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='password'
                    render={({ field }) => (
                        <FormItem className='mt-4'>
                            <FormLabel className='text-nexus-red'>Senha:</FormLabel>
                            <FormControl>
                                <Input {...field} type='text' placeholder='Sua senha aqui...' className={styles['form-input-config']} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button
                    type='submit'
                    className={`${styles['form-submit-button-config']} w-full mt-7`}>
                    Entar</Button>
            </form>
        </Form>
    )
}

export default SigninForm
