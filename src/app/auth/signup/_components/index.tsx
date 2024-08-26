'use client'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import React from 'react'
import useFormSignup, { TypeSignupFormSchema } from './schema'
import { Input } from '@/components/ui/input'
import formStyles from '../../../../styles/cssmodules/Form.module.css'
import { Button } from '@/components/ui/button'
import { signupRequest } from '@/utils/userRequests/userRequests'
import { Checkbox } from '@/components/ui/checkbox'
import Link from 'next/link'

const SignupForm = () => {

    const form = useFormSignup()

    const submitForm = async (data: TypeSignupFormSchema) => {
        try {
            const response = await signupRequest(data)
        } catch (error) {
            throw error
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(submitForm)}>
                <FormField
                    control={form.control}
                    name='username'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='text-nexus-red'>Nome:</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    type='text'
                                    placeholder='Seu nome aqui...'
                                    className={formStyles['form-input-config']} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                        <FormItem className='mt-2'>
                            <FormLabel className='text-nexus-red'>E-mail:</FormLabel>
                            <FormControl>
                                <Input {...field} type='text' placeholder='Seu e-mail aqui...' className={formStyles['form-input-config']} />
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
                                <Input {...field} type='text' placeholder='Sua senha aqui...' className={formStyles['form-input-config']} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField 
                    control={form.control}
                    name='terms'
                    render={({ field }) => (
                        <FormItem className='mt-2'>
                            <Checkbox 
                                className='border-nexus-red border-2 rounded bg-nexus-darker'
                                checked={field.value}
                                onCheckedChange={field.onChange}
                            />
                            <FormLabel className='text-nexus-gray ml-1'>Por favor, leia e aceite nossos
                                <Link href="/auth/terms" className='text-nexus-red ml-2'>Termos e condições</Link>
                            </FormLabel>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button
                    type='submit'
                    className={`${formStyles['form-submit-button-config']} w-full mt-7`}>
                    Criar conta</Button>
            </form>
        </Form>
    )
}

export default SignupForm