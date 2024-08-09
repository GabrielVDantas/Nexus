import React from 'react'
import Search from "../Search";
import Post from "../Post";

const Feed = () => {
    return (
        <section className="flex-1 flex flex-col">
            <Search />
            <article className="flex justify-center mx-48 px-4 py-3">
                <Post />
            </article>
        </section>
    )
}

export default Feed
