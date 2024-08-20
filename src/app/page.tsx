'use client'
import '../styles/globals.css'
import { Card, CardDescription, CardFooter, CardHeader } from '@/components/ui/card'
import cardStyles from '../styles/cssmodules/Card.module.css'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Home = () => {
  return (
    <main className="bg-nexus-darker h-screen w-full flex justify-center items-center">
      <section className={cardStyles['card-middle-card-config']}>
        <div className={cardStyles['card-left-content-config']}>
          <img
            className={cardStyles['card-auth-image-config']}
            src='/side-image.png'
            alt='Pessoa na frente do computador' />
        </div>
        <div className={cardStyles['card-right-content-config']}>
          <Card className={cardStyles['card-auth-form-card-config']}>
            <CardHeader className='text-center'>
              <h1 className='flex justify-center pt-12'>
                <Image src="/logo.png" alt="Logo do Nexus" width={250} height={12} />
              </h1>
              <CardDescription className='pt-24 text-center text-xl'>
                Publique projetos, receba feedback e financiamento. Entre agora e faça
                parte da nossa comunidade!
              </CardDescription>
            </CardHeader>
            <CardFooter className='flex flex-col text-center'>
              <Link href='/auth/signup'
                className='home-link-config'>
                Criar uma conta
              </Link>
              <Link href='/auth/signin' className='home-link-config'>
                Entrar
              </Link>
            </CardFooter>
          </Card>
        </div>
      </section>
    </main>
  )
}

export default Home