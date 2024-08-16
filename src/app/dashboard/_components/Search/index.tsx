import { Input } from '@/components/ui/input'
import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import searchStyles from '../../../../styles/cssmodules/Search.module.css'

const Search = () => {
    return (
        <div className={searchStyles['search-container-config']}>
            <div className={searchStyles['search-input-box-config']}>
                <MagnifyingGlassIcon className={searchStyles['search-icon-config']}/>
                <Input type="text" placeholder="Digite alguma coisa..." className={searchStyles['search-input-config']} />
            </div>
        </div>
    )
}

export default Search
