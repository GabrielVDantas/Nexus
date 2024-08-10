import React from 'react'
import Search from "../Search";
import Post from "../Post";

const Projects = () => {
    return (
        <section className="flex-1 flex flex-col">
            <Search />
            <article className="flex flex-col justify-center mx-72 px-4 py-3">
                <Post />
                <Post />
            </article>
        </section>
    )
}

export default Projects
