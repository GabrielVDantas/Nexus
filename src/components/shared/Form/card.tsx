import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import styles from '../../../styles/cssmodules/Form.module.css'

interface FormCardProps {
    title: string,
    description: string,
    form: React.ReactNode
}

const FormCard = ({ title, description, form }: FormCardProps) => {
    return (
        <section className='flex-1 flex flex-col my-4 mx-72 px-4 py-3'>
            <Card className={styles['form-container-config']}>
                <CardHeader>
                    <CardTitle className={styles['form-title-config']}>{title}</CardTitle>
                    <CardDescription className={styles['form-description-config']}>{description}</CardDescription>
                    <CardContent>
                        {form}
                    </CardContent>
                </CardHeader>
            </Card>
        </section>
    )
}

export default FormCard