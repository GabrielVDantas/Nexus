import { Button } from "@/components/ui/button"
import Image from "next/image"
import React from 'react'
import styles from '../../../styles/cssmodules/Aside.module.css'
import Link from "next/link"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/options"

interface AsideProps {
    icons: {
        id: number,
        svg: JSX.Element,
        span: string,
        to: string,
    }[],
    position: 'right' | 'left',
}

const Aside = async ({ icons, position }: AsideProps) => {

    const session = await getServerSession(authOptions)

    if (!session) {
        return (
            <h3 className="text-center text-cyan-600 font-black">VOCÊ NÃO ESTÁ LOGADOOOOO</h3>
        )
    }

    const asideClassBasedOnPosition =
        position === 'right' ? styles['aside-right-container-config']
            : position === 'left' ? styles['aside-left-container-config'] : ''

    return (
        <aside className={asideClassBasedOnPosition}>
            <div className={styles['aside-logo-config']}>
                <h1><Image src="/logo.png" alt="Logo do Nexus" width={100} height={12} /></h1>
            </div>
            {icons.map((icon) => (
                <div className={styles['aside-icon-container-config']} key={icon.id}>
                    <Link href={icon.to}>
                        <Button variant="ghost" size="icon" className={styles['aside-icon-config']}>
                            {icon.svg}
                        </Button>
                    </Link>
                    <span className={styles['aside-icon-text-config']}>{icon.span}</span>
                </div>
            ))}
        </aside>
    )
}

export default Aside  
