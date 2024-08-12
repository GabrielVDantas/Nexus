'use client'
import React from 'react'
import { updateEmailFormData, updatePasswordFormData, updateUsernameFormData } from '../schema'
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import styles from '../../../../styles/cssmodules/Profile.module.css'

interface NoFileFormProps {
    keyword: 'username' | 'email' | 'password',
    label: string,
    currentData: string,
    placeholder: string,
    buttonContent: string,
}

const NoFileForm = ({ keyword, label, currentData, placeholder, buttonContent }: NoFileFormProps) => {

    let form
    switch (keyword) {
        case 'username':
            form = updateUsernameFormData()
            break
        case 'email':
            form = updateEmailFormData()
            break
        case 'password':
            form = updatePasswordFormData()
            break
        default:
            form = null
    }

    if (form === null) return <h3 className='text-nexus-white'>Houve algum erro e o formulário não será mostrado</h3>

    return (
        <Form {...form}>
            <form className='flex flex-row min-w-full mt-1'>
                <FormField
                    control={form.control}
                    name={keyword}
                    render={({ field }) => (
                        <FormItem className='w-full mt-4'>
                            <FormLabel className={styles['profile-label-config']}>{label}</FormLabel>
                            <FormControl>
                                <Input {...field} value={currentData} placeholder={placeholder}
                                    className={styles['profile-input-config']} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className={`${styles['profile-submit-button-config']} mt-12 ml-6 w-32`}>
                    {buttonContent}
                </Button>
            </form>
        </Form>
    )
}

export default NoFileForm