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
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{project.name}</AlertDialogTitle>
                    <AlertDialogDescription>
                        {project.fullDescription}
                        <ScreenshotsCarousel screenshots={project.screenshots}/>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Sair</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default MoreInformation