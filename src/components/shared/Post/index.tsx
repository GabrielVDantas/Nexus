import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import styles from '../../../styles/cssmodules/Post.module.css'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const Post = () => {
    return (
        <Card className={styles['post-container-config']}>
            <CardHeader>
                <figure><img src="https://ayltoninacio.com.br/img/p/147w750.jpg" alt='Conteúdo' /></figure>
            </CardHeader>
            <CardContent>
                <CardTitle>Titulo do card</CardTitle>
                <CardDescription>
                    <Button variant="link" className='text-nexus-red -mx-4'>Ver mais</Button>
                </CardDescription>
            </CardContent>
            <CardFooter>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </CardFooter>
        </Card>
    )
}

export default Post