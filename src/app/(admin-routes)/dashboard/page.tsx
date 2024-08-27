import Post from '@/app/(admin-routes)/dashboard/_components/Post'
import Search from '@/app/(admin-routes)/dashboard/_components/Search'
import { posts } from './posts'
import { auth } from '@/auth'
import NotAuthorizedPage from '../not-authorized/page'

const Dashboard = async () => {

    const session = await auth()

    if (session) {
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
    } else {
        return (
            <NotAuthorizedPage />
        )
    }
}

export default Dashboard
