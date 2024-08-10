import Aside from '@/components/shared/Aside'
import Projects from '@/components/shared/Projects'
import '../../styles/globals.css'
import { plataformRelatedIcons, userRelatedIcons } from '@/components/shared/Aside/icons'

export default function FeedPage() {
    return (
        <>
            <Aside icons={plataformRelatedIcons} position='right'/>
            <Projects />
            <Aside icons={userRelatedIcons} position='left'/>
        </>

    )
}