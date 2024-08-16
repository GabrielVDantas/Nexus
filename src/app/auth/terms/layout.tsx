import React from 'react'

interface Props {
    children: React.ReactNode
}

const TermsLayout = ({ children }: Props) => {
    return (
        <main className='bg-nexus-darker w-full flex justify-center items-center'>
            {children}
        </main>
    )
}

export default TermsLayout