import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import styles from '../../../styles/cssmodules/Post.module.css'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const Post = () => {
    return (
        <Card className={styles['post-container-config']}>
            <CardHeader>
                <figure><Image src="" alt='Conteúdo' /></figure>
            </CardHeader>
            <CardContent>
                <CardTitle>Titulo do card</CardTitle>
                <CardDescription>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, iste?</p>
                    <Button variant="link" className='text-nexus-red -mx-4'>Ver mais</Button>
                </CardDescription>
            </CardContent>
            <CardFooter>
                Footer do card
            </CardFooter>
        </Card>


    )
}

export default Post