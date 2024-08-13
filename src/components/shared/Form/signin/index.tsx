'use client'
import React from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signinSchema } from './schema'
import styles from '../../../../styles/cssmodules/Form.module.css'
import { Button } from '@/components/ui/button'

const SigninForm = () => {
    const form = useForm({
        resolver: zodResolver(signinSchema)
    })

    return (
        <Form{...form}>
            <form>
                <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                        <FormItem className='mt-4'>
                            <FormLabel className='text-nexus-red'>E-mail:</FormLabel>
                            <FormControl>
                                <Input
                                    className={styles['form-input-config']}
                                    placeholder='Seu e-mail...'
                                    type='text' {...field} />
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
                                <Input
                                    className={styles['form-input-config']}
                                    placeholder='Sua senha...'
                                    type='text' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button className={`${styles['form-submit-button-config']} w-full`}>Entrar</Button>
            </form>
        </Form>
    )
}

export default SigninForm
