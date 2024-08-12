'use client'
import React from 'react'
import { updateEmailFormData } from '../schema'
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import CustomDialog from '../../Dialog'
import styles from '../../../../styles/cssmodules/Profile.module.css'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const FileForm = () => {

    const form = updateEmailFormData()

    return (
        <CustomDialog
            showedContent={
                <Button className='size-44 rounded-full'>
                    <Avatar className='size-44'>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </Button>
            }
            middleContent={
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
            }
            footerContent={
                <Button type="submit" className={`${styles['profile-submit-button-config']} mt-3`}>Atualizar foto</Button>
            }
        />
    )
}

export default FileForm
