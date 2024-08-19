import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import postStyles from '../../../../styles/cssmodules/Post.module.css'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import MoreInformation from './_components/Modal'

interface Props {
    project: {
        name: string,
        partialDescription: string,
        goal: number,
        fullDescription: string,
        coverArt: string,
        screenshots: string[],
        avatar: string,
        username: string
    }
}

const Post = ({ project }: Props) => {
    return (
        <Card className={postStyles['post-container-config']}>
            <CardHeader>
                <figure><img src={project.coverArt} alt='Imagem de capa do projeto' className='rounded'/></figure>
            </CardHeader>
            <CardContent>
                <CardTitle>{project.name}</CardTitle>
                <CardDescription className='flex flex-col'>
                    <span>{project.partialDescription}</span>
                    <span>Meta financeira: {project.goal}</span>
                   <MoreInformation project={project} />
                </CardDescription>
            </CardContent>
            <CardFooter>
                <Avatar>
                    <AvatarImage src={project.avatar} alt="Avatar do usuário" />
                    <AvatarFallback>{project.username}</AvatarFallback>
                </Avatar>
            </CardFooter>
        </Card>
    )
}

export default Post