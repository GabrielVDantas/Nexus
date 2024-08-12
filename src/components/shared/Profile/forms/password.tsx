'use client'
import React from 'react'
import { updateEmailFormData } from '../schema'
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import styles from '../../../../styles/cssmodules/Profile.module.css'

interface PasswordProps {
    password: string
}

const Password = ({ password }: PasswordProps) => {

    const form = updateEmailFormData()

    return (
        <Form {...form}>
            <form className='flex flex-row min-w-full mt-1'>
                <FormField
                    control={form.control}
                    name='password'
                    render={({ field }) => (
                        <FormItem className='w-full mt-4'>
                            <FormLabel className='text-nexus-red'>Senha:</FormLabel>
                            <FormControl>
                                <Input {...field} value={password} placeholder='Sua senha aqui...'
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
        </Form>
    )
}

export default Password