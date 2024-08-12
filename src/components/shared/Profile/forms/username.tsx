'use client'
import React from 'react'
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import styles from '../../../../styles/cssmodules/Profile.module.css'
import { updateUsernameFormData } from '../schema'

interface UsernameProps {
    username: string
}

const Username = ({username}: UsernameProps) => {

    const form = updateUsernameFormData()

    return (
        <Form {...form}>
            <form className='flex flex-row min-w-full'>
                <FormField
                    control={form.control}
                    name='username'
                    render={({ field }) => (
                        <FormItem className='w-full mt-4'>
                            <FormLabel className='text-nexus-red'>Nome:</FormLabel>
                            <FormControl>
                                <Input {...field} value={username} placeholder='Seu nome aqui...'
                                    className={styles['form-input-config']} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className={styles['form-submit-button-config']}>
                    Atualizar nome
                </Button>
            </form>
        </Form>
    )
}

export default Username