import React from 'react'
import '../../styles/globals.css'

interface FeedLayoutProps {
    children: React.ReactNode
}

export default function FeedLayout({ children }: FeedLayoutProps) {
    return (
        <main className='main-container-config'>
            {children}
        </main>
    )
}