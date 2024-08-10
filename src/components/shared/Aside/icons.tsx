import { ArrowLeftEndOnRectangleIcon, BookmarkIcon, EnvelopeIcon, HomeIcon, 
    IdentificationIcon, MagnifyingGlassIcon, LockClosedIcon, Squares2X2Icon, SquaresPlusIcon, 
    TrashIcon, TrophyIcon, WrenchScrewdriverIcon, BellIcon, InformationCircleIcon } from '@heroicons/react/24/outline'

export const plataformRelatedIcons = [
    { id: 1, svg: <SquaresPlusIcon className="size-6" />, span: "Novo projeto" },
    { id: 2, svg: <HomeIcon className="size-6" />, span: "Início" },
    { id: 3, svg: <MagnifyingGlassIcon className="size-6" />, span: "Pesquisar projeto" },
    { id: 4, svg: <TrophyIcon className="size-6" />, span: "Melhores da plataforma" },
    { id: 5, svg: <BookmarkIcon className="size-6" />, span: "Destaques da semana" },
    { id: 6, svg: <WrenchScrewdriverIcon className="size-6" />, span: "Erros e sugestões" },
]

export const userRelatedIcons = [
    { id: 6, svg: <Squares2X2Icon className="size-6" />, span: "Meus projetos" },
    { id: 7, svg: <IdentificationIcon className="size-6" />, span: "Minhas informações" },
    { id: 8, svg: <BellIcon className="size-6" />, span: "Notificações" },
    { id: 9, svg: <InformationCircleIcon className="size-6" />, span: "Sobre nós" },
    { id: 11, svg: <ArrowLeftEndOnRectangleIcon className="size-6" />, span: "Sair" },
    { id: 10, svg: <TrashIcon className="size-6" />, span: "Deletar conta" },
]