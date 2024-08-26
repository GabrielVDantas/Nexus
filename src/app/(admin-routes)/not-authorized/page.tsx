import Link from 'next/link'
import React from 'react'

const NotAuthorizedPage = () => {
  return (
    <div className='h-full w-full flex flex-col items-center justify-center'>
      <h6 className='font-extrabold text-7xl text-nexus-red'>ERRO 403...</h6>
      <p className='text-nexus-gray'>
        Você não tem permissão para acessar essa página. Crie uma conta ou efetue seu login!
      </p>
      <Link href='/' className='text-nexus-red'>Ir à página inicial</Link>
    </div>
  )
}

export default NotAuthorizedPage