'use client'
import Post from '@/app/dashboard/_components/Post'
import Search from '@/app/dashboard/_components/Search'
import { useSession } from 'next-auth/react'
import React from 'react'

const posts = [
    {
        id: 1,
        name: 'Minecraft',
        partialDescription: 'Jogo quadrado',
        goal: 500.50,
        fullDescription: 'Um jogo quadrado desenvolvido em Java',
        coverArt: 'https://ayltoninacio.com.br/img/p/147w750.jpg',
        screenshots: ['https://ayltoninacio.com.br/img/p/147w750.jpg', 'https://ayltoninacio.com.br/img/p/147w750.jpg'],
        avatar: 'https://github.com/shadcn.png',
        username: 'Gabriel'
    },
    {
        id: 2,
        name: 'Minecraft',
        partialDescription: 'Jogo quadrado',
        goal: 500.50,
        fullDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' +
            'Harum quidem rem recusandae accusamus consequatur, doloremque, excepturi fuga qui consectetur numquam magnam aut quia'
            + 'voluptatibus provident error perferendis natus necessitatibus quasi? Culpa praesentium aliquam laboriosam excepturi '
            + 'laudantium nisi expedita enim ad corporis corrupti, molestiae rem. Consequatur laudantium assumenda eveniet. Illo quo '
            + 'facilis architecto eaque ipsa! Nostrum consectetur illo dolorum iure reiciendis qui voluptas, expedita quibusdam impedit'
            + 'in atque voluptatibus reprehenderit optio unde assumenda quo. Architecto eius voluptates placeat? Ab deleniti nemo deserunt,'
            + 'commodi autem natus omnis, a harum ex culpa sit adipisci delectus error corrupti animi unde sequi accusamus nostrum expedita.',
        coverArt: 'https://ayltoninacio.com.br/img/p/147w750.jpg',
        screenshots: ['https://ayltoninacio.com.br/img/p/147w750.jpg', 'https://ayltoninacio.com.br/img/p/147w750.jpg'],
        avatar: '',
        username: 'Gabriel'
    }
]

const Dashboard = () => {
    const { data: session, status } = useSession()

    
    if (status === 'loading') {
        return <p className='font-semibold text-7xl text-yellow-500'>Carregando...</p>
    }

    
    if (status === 'unauthenticated') {
        return <h2 className='font-semibold text-7xl text-yellow-500'>VOCÊ NÃO ESTÁ LOGADO!!!!!</h2>
    }

    
    return (
        <>
            <Search />
            <article className="mx-72 px-4 py-3">
                {posts.map((post) => (
                    <Post key={post.id} project={post} />
                ))}
            </article>
        </>
    )
}

export default Dashboard
