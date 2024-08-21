import Image from "next/image"
import React from 'react'
import asideStyles from '../../../../../styles/cssmodules/Aside.module.css'
import Link from "next/link"

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

    const asideClassBasedOnPosition =
        position === 'right' ? asideStyles['aside-right-container-config']
            : position === 'left' ? asideStyles['aside-left-container-config'] : ''

    return (
        <aside className={asideClassBasedOnPosition}>
            {position === 'left' && (
                <div className={asideStyles['aside-logo-config']}>
                    <h1><Image src="/logo.png" alt="Logo do Nexus" width={100} height={12} /></h1>
                </div>
            )}
            {icons.map((icon) => (
                <div className={asideStyles['aside-icon-container-config']} key={icon.id}>
                    <Link href={icon.to} className={asideStyles['aside-icon-link-config']}>
                        {icon.svg}
                        <span className={asideStyles['aside-icon-text-config']}>{icon.span}</span>
                    </Link>
                </div>
            ))}
        </aside>
    )
}

export default Aside  

