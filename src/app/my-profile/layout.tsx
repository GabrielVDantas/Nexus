
import '../../styles/globals.css'

interface MyProfileLayoutProps {
    children: React.ReactNode
}


export default function MyProfileLayout({ children }: MyProfileLayoutProps) {
    return (
        <main className="main-container-config">
            {children}
        </main>
    )
}