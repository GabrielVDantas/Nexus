import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import ScreenshotsCarousel from "../Carousel"

interface Props {
    project: {
        name: string,
        partialDescription: string,
        goal: number,
        fullDescription: string,
        coverArt: string,
        screenshots: string[],
        avatar: string,
        username: string
    }
}

const MoreInformation = ({ project }: Props) => {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="link" className='text-nexus-red max-w-14'>Ver mais</Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-nexus-black border-none rounded min-w-[50%] max-w-[75%] max-h-screen
            overflow-x-hidden overflow-y-auto">
                <AlertDialogHeader>
                    <AlertDialogTitle className="text-nexus-red font-semibold text-3xl">{project.name}</AlertDialogTitle>
                    <AlertDialogDescription className="text-nexus-gray text-base flex flex-col items-center">
                        <span>{project.fullDescription}</span>
                        <ScreenshotsCarousel screenshots={project.screenshots}/>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className="bg-nexus-red border-2 border-nexus-red bg-transparent rounded text-nexus-red
    hover:bg-nexus-red hover:text-nexus-black w-24 mt-3">Voltar</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default MoreInformation