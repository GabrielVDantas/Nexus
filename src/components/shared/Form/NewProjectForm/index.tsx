'use client'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { formSchema } from './schema'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import styles from '../../../../styles/cssmodules/Form.module.css'

const NewProjectForm = () => {

    const form = useForm({
        resolver: zodResolver(formSchema)
    })

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit((data) => console.log(data))}>
                <FormField
                    control={form.control}
                    name='name'
                    render={({ field }) => (
                        <FormItem className='mt-4'>
                            <FormLabel className={styles['form-label-config']}>Nome:</FormLabel>
                            <FormControl>
                                <Input 
                                    placeholder='Nome do projeto...' 
                                    type='text' {...field} className={styles['form-input-config']}/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='partialDescription'
                    render={({ field }) => (
                        <FormItem className='mt-4'>
                            <FormLabel className={styles['form-label-config']}>Pontos principais:</FormLabel>
                            <FormControl>
                                <Textarea 
                                    placeholder='Descreva resumidamente suas ideias...' {...field} 
                                    className={styles['form-input-config']}/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='goal'
                    render={({ field }) => (
                        <FormItem className='mt-4'>
                            <FormLabel className={styles['form-label-config']}>Meta financeira:</FormLabel>
                            <FormControl>
                                <Input 
                                    placeholder='Sua meta financeira aqui...' {...field} 
                                    className={styles['form-input-config']}/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='fullDescription'
                    render={({ field }) => (
                        <FormItem className='mt-4'>
                            <FormLabel className={styles['form-label-config']}>Descrição completa:</FormLabel>
                            <FormControl>
                                <Textarea 
                                    placeholder='Descreva todas as suas ideias, seja o mais detalhista possível...' 
                                    {...field} className={styles['form-textarea-config']}/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='coverArt'
                    render={({ field }) => (
                        <FormItem className='mt-4'>
                            <FormLabel className={styles['form-label-config']}>Imagem de capa:</FormLabel>
                            <FormControl>
                                <Input
                                    type='file'
                                    {...field} className={styles['form-input-file-config']}/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                 <FormField
                    control={form.control}
                    name='screenshots'
                    render={({ field }) => (
                        <FormItem className='mt-4'>
                            <FormLabel className={styles['form-label-config']}>Screenshots do jogo: (se possível)</FormLabel>
                            <FormControl>
                                <Input
                                    type='file'
                                    multiple={true}
                                    {...field} className={styles['form-input-file-config']}/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className={styles['form-submit-button-config']}>
                    Criar projeto
                </Button>
            </form>
        </Form>
    )
}

export default NewProjectForm
