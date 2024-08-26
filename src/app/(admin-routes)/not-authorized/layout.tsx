import '../../../styles/globals.css'

interface Props {
    children: React.ReactNode
}

const NotAuthorizedLayout = ({ children }: Props) => {
    return (
        <main className='main-container-config'>
            {children}
        </main>
    )
}

export default NotAuthorizedLayout