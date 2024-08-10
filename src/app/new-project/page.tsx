import Aside from '@/components/shared/Aside'
import { plataformRelatedIcons, userRelatedIcons } from '@/components/shared/Aside/icons'
import NewProjectFormCard from '@/components/shared/Form/NewProjectForm/card'

export default function NewProjectPage() {
    return (
        <>
            <Aside icons={plataformRelatedIcons} position='right' />
            <NewProjectFormCard />
            <Aside icons={userRelatedIcons} position='left' />
        </>
    )
}