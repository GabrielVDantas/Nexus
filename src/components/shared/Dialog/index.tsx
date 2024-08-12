import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog'
import React from 'react'
import styles from '../../../styles/cssmodules/Dialog.module.css'


interface CustomDialogProps {
    showedContent: React.ReactNode,
    middleContent: React.ReactNode,
    footerContent: React.ReactNode,
}

const CustomDialog = ({ showedContent, middleContent, footerContent }: CustomDialogProps) => {
    return (
        <Dialog>
            <DialogTrigger asChild className={styles['dialog-container-config']}>
                {showedContent}
            </DialogTrigger>
            <DialogContent className={styles['dialog-card-config']}>
                <DialogHeader>
                    <DialogTitle className={styles['dialog-title-config']}>Avatar: </DialogTitle>
                    <DialogDescription className={styles['dialog-description-config']}>
                        Escolha um novo avatar e salve para alterá-lo
                    </DialogDescription>
                </DialogHeader>
                {middleContent}
                <DialogFooter>
                    {footerContent}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default CustomDialog