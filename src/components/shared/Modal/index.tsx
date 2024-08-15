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
import styles from '../../../styles/cssmodules/Modal.module.css'


interface ModalProps {
    showedContent: React.ReactNode,
    middleContent: React.ReactNode,
    footerContent: React.ReactNode,
}

const Modal = ({ showedContent, middleContent, footerContent }: ModalProps) => {
    return (
        <Dialog>
            <DialogTrigger asChild className={styles['modal-container-config']}>
                {showedContent}
            </DialogTrigger>
            <DialogContent className={styles['modal-card-config']}>
                <DialogHeader>
                    <DialogTitle className={styles['modal-title-config']}>Avatar: </DialogTitle>
                    <DialogDescription className={styles['modal-description-config']}>
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

export default Modal