import React from 'react'

interface Props {
    children: React.ReactNode
}

const AuthLayout = ({ children }: Props) => {
    return (
        <main className='bg-nexus-darker h-screen w-full flex justify-center items-center'>
            {children}
        </main>
    )
}

export default AuthLayout