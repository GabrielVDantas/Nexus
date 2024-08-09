import { Input } from '@/components/ui/input'
import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import styles from "../../../styles/cssmodules/Search.module.css"

const Search = () => {
    return (
        <div className={styles['search-container-config']}>
            <div className={styles['search-input-box-config']}>
                <MagnifyingGlassIcon className={styles['search-icon-config']}/>
                <Input type="text" placeholder="Digite alguma coisa..." className={styles['search-input-config']} />
            </div>
        </div>
    )
}

export default Search
