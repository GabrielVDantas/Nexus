import { Button } from "@/components/ui/button"
import Image from "next/image"
import React from 'react'
import styles from '../../../styles/cssmodules/Aside.module.css'
import { HomeIcon, MagnifyingGlassIcon, BellIcon, ChatBubbleBottomCenterTextIcon, Cog6ToothIcon } from '@heroicons/react/24/outline'

const icons = [
    { id: 1, svg: <HomeIcon className="size-6" />, span: "Início" },
    { id: 2, svg: <MagnifyingGlassIcon className="size-6"/>, span: "Buscar" },
    { id: 3, svg: <BellIcon className="size-6"/>, span: "Notificações" },
    { id: 4, svg: <ChatBubbleBottomCenterTextIcon className="size-6"/>, span: "Mensagens" },
    { id: 5, svg: <Cog6ToothIcon className="size-6"/>, span: "Configurações" },
]

const Aside = () => {
    return (
        <aside className={styles['aside-container-config']}>
            <div className={styles['aside-logo-config']}>
                <h1><Image src="/logo.png" alt="Logo do Nexus" width={100} height={12} /></h1>
            </div>
            {icons.map((icon) => (
                <div className={styles['aside-icon-container-config']} key={icon.id}>
                    <Button variant="ghost" size="icon" className={styles['aside-icon-config']}>
                        {icon.svg}
                    </Button>
                    <span className={styles['aside-icon-text-config']}>{icon.span}</span>
                </div>
            ))}
        </aside>
    )
}

export default Aside
