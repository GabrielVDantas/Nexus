import { Button } from "@/components/ui/button"
import Image from "next/image"
import React from 'react'
import styles from '../../../styles/cssmodules/Aside.module.css'
import Link from "next/link"

interface AsideProps {
    icons: {
        id: number,
        svg: JSX.Element,
        span: string,
    }[],
    position: 'right' |'left',
}

const Aside = ({ icons, position }: AsideProps) => {
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
                    <Button variant="ghost" size="icon" className={styles['aside-icon-config']}>
                        <Link href="/">
                            {icon.svg}
                        </Link>
                    </Button>
                    <span className={styles['aside-icon-text-config']}>{icon.span}</span>
                </div>
            ))}
        </aside>
    )
}

export default Aside  
