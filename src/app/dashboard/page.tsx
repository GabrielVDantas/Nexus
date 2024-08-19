import Post from '@/app/dashboard/_components/Post'
import Search from '@/app/dashboard/_components/Search'
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
        fullDescription: 'Um jogo quadrado desenvolvido em Java',
        coverArt: 'https://ayltoninacio.com.br/img/p/147w750.jpg',
        screenshots: ['https://ayltoninacio.com.br/img/p/147w750.jpg', 'https://ayltoninacio.com.br/img/p/147w750.jpg'],
        avatar: '',
        username: 'Gabriel'
    }
]

const Dashboard = () => {
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