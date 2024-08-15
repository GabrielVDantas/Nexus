interface SigninLayoutProps {
    children: React.ReactNode
}

export default function SigninLayout({ children }: SigninLayoutProps) {
    return (
        <main className="main-container-config">
            {children}
        </main>
    )
}