import { ArrowLeftEndOnRectangleIcon, BookmarkIcon, EnvelopeIcon, HomeIcon, 
    IdentificationIcon, MagnifyingGlassIcon, LockClosedIcon, Squares2X2Icon, SquaresPlusIcon, 
    TrashIcon, TrophyIcon, WrenchScrewdriverIcon, BellIcon, InformationCircleIcon } from '@heroicons/react/24/outline'

export const plataformRelatedIcons = [
    { id: 1, svg: <SquaresPlusIcon className="size-6" />, span: "Novo projeto", to: '/dashboard/new-project' },
    { id: 2, svg: <HomeIcon className="size-6" />, span: "Início", to: '/dashboard' },
    { id: 3, svg: <MagnifyingGlassIcon className="size-6" />, span: "Pesquisar projeto", to: '/dashboard' },
    { id: 4, svg: <TrophyIcon className="size-6" />, span: "Melhores da plataforma", to: '/' },
    { id: 5, svg: <BookmarkIcon className="size-6" />, span: "Destaques da semana", to: '/' },
    { id: 6, svg: <InformationCircleIcon className="size-6" />, span: "Sobre nós", to: '/dashboard/about' },
    { id: 7, svg: <WrenchScrewdriverIcon className="size-6" />, span: "Erros e sugestões", to: '/dashboard/sugestions' },
]

export const userRelatedIcons = [
    { id: 8, svg: <Squares2X2Icon className="size-6" />, span: "Meus projetos", to: '/dashboard/my-projects' },
    { id: 9, svg: <IdentificationIcon className="size-6" />, span: "Minhas informações", to: '/dashboard/my-profile' },
    { id: 10, svg: <BellIcon className="size-6" />, span: "Notificações", to: '/' },
    { id: 11, svg: <ArrowLeftEndOnRectangleIcon className="size-6" />, span: "Sair", to: null },
    { id: 12, svg: <TrashIcon className="size-6" />, span: "Deletar conta", to: '/' },
]