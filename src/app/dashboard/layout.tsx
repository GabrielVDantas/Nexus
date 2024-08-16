import Aside from "./_components/Aside"
import { plataformRelatedIcons, userRelatedIcons } from "./_components/Aside/icons"
import '../../styles/globals.css'

interface Props {
    children: React.ReactNode
}

const DashboardLayout = ({ children }: Props) => {
    return (
        <main className='main-container-config'>
            <Aside icons={plataformRelatedIcons} position='left' />
            <section className="flex flex-col">
                {children}
            </section>
            <Aside icons={userRelatedIcons} position='right' />
        </main>
    )
}

export default DashboardLayout