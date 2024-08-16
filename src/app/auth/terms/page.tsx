import React from 'react'
import { items } from './items'
import Link from 'next/link'

const Terms = () => {
    return (
        <section className={`w-3/5 py-6 max-h-screen overflow-y-auto bg-nexus-black rounded flex flex-col`}>
            <h2 className='mx-6 text-nexus-red font-semibold text-3xl'>Termos e condições de uso</h2>
            {items.map(item => (
                <div className='mt-6' key={item.id}>
                    <h6 className='mx-6 text-nexus-white'>{item.title}</h6>
                    <p className='mx-6 text-nexus-gray'>{item.description}</p>
                </div>
            ))}
            <Link
                href='/auth/signup'
                className='mx-6 border-2 border-nexus-red bg-transparent rounded text-nexus-red
    hover:bg-nexus-red hover:text-nexus-black mt-3 mb-6 flex justify-center items-center w-28 py-1'>
                Voltar
            </Link>
        </section>
    )
}

export default Terms
