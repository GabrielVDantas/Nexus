import Post from '@/app/dashboard/_components/Post'
import Search from '@/app/dashboard/_components/Search'
import React from 'react'

const Dashboard = () => {
    return (
        <>
            <Search />
            <article className="mx-72 px-4 py-3">
                <Post />
                <Post />
            </article>
        </>
    )
}

export default Dashboard