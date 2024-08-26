import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

const SugestionsPage = () => {
    return (
        <section className='mx-72 py-4 min-h-full flex items-center justify-center'>
            <Card className='rounded bg-nexus-black border-none w-full '>
                <CardHeader>
                    <CardTitle className="text-nexus-red font-semibold text-3xl">
                        Erros e sugestões
                    </CardTitle>
                    <CardDescription className=" text-nexus-gray text-base">
                        <h6 className='text-nexus-white'>1. Relatar um erro</h6>
                        <p>
                            Se você encontrou um erro ou problema técnico, por favor,
                            nos informe para que possamos resolvê-lo o mais rápido possível. Inclua o máximo de detalhes possível, como:
                            <ul>
                                <li> - Descrição do erro</li>
                                <li> - Passos para reproduzir o problema</li>
                                <li> - Capturas de tela (se aplicável)</li>
                                <li> - Informações sobre o dispositivo e navegador que você está usando</li>
                            </ul>
                        </p>
                        <h6 className='text-nexus-white'>2. Enviar uma sugestão</h6>
                        <p>
                            Suas sugestões são valiosas para nós! Se você tem ideias sobre novos recursos,
                            melhorias na interface ou qualquer outra coisa que possa tornar nossa plataforma ainda melhor,
                            por favor, compartilhe conosco. Estamos sempre abertos a ouvir e implementar feedbacks construtivos.
                        </p>
                        <h6 className='text-nexus-white'>3. Como entrar em contato</h6>
                        <p>
                            Você pode nos enviar seus relatórios de erros e sugestões enviando um e-mail para:  
                            <Button variant="link" className='text-nexus-red p-0 m-0 pl-1'> exemplo@email.com</Button>.
                            Agradecemos por dedicar seu tempo para nos ajudar a melhorar. Seu feedback 
                            é essencial para que possamos continuar a oferecer uma plataforma de alta qualidade para todos os desenvolvedores e doadores.
                        </p>
                    </CardDescription>
                </CardHeader>
            </Card>
        </section>
    )
}

export default SugestionsPage