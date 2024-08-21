import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

const AboutPage = () => {
    return (
        <section className='mx-72 py-4 min-h-full flex items-center justify-center'>
            <Card className='rounded bg-nexus-black border-none w-full '>
                {/* py-12 */}
                <CardHeader>
                    <CardTitle className="text-nexus-red font-semibold text-3xl">
                        Sobre o Nexus
                    </CardTitle>
                    <CardDescription className=" text-nexus-gray text-base">
                        <p>
                            Somos uma plataforma online de doações
                            que almeja facilitar o processo de financiamento de games por estúdios pequenos ou criadores independentes.
                            Buscamos ajudar devs a levar seus projetos adiante e aumentar a concorrência, qualidade e criatividade
                            da indústria dos jogos.
                        </p>
                        <p>
                            Nossa plataforma opera de maneira simples e eficiente.
                            Os desenvolvedores podem criar perfis detalhados de seus projetos, incluindo descrições, imagens e metas de financiamento.
                            Os doadores, por sua vez, podem explorar esses projetos, fazer doações e acompanhar o progresso dos jogos que apoiaram.
                        </p>
                        <p>
                            Se você é um desenvolvedor de jogos em busca de financiamento ou um entusiasta de jogos que
                            deseja apoiar novos talentos, nossa plataforma é o lugar certo para você.
                            Junte-se a nós e faça parte de uma comunidade vibrante e inovadora que está moldando o futuro dos jogos.
                        </p>
                    </CardDescription>
                </CardHeader>
            </Card>
        </section>
    )
}

export default AboutPage