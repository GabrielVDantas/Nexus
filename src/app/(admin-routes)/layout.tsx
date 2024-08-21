import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/options'
import { redirect } from 'next/navigation'

interface Props {
    children: React.ReactNode
}

const PrivateLayout = async ({ children }: Props) => {
    const session = await getServerSession(authOptions)

    if (!session) redirect('/')

    return <>{children}</>
}

export default PrivateLayout