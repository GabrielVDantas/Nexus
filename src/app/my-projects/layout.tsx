import '../../styles/globals.css'

interface MyProjectsLayoutProps {
    children: React.ReactNode
}

export default function MyProjectsLayout({ children }: MyProjectsLayoutProps) {
    return (
        <main className="main-container-config">
            {children}
        </main>
    )
}