import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

interface Props {
    screenshots: string[],
}

const ScreenshotsCarousel = ({ screenshots }: Props) => {
    return (
        <Carousel className="max-w-5xl pt-6">
            <CarouselContent>
                {screenshots.map((screenshot) => (
                    <CarouselItem>
                            <Card className="h-fit border-none rounded">
                                <CardContent className="flex items-center justify-center m-0 p-0">
                                        <figure className="w-full h-full object-cover">
                                            <img
                                                src={screenshot}
                                                alt='Screenshots do projeto'
                                                className="w-full h-full object-cover rounded" />
                                        </figure>
                                </CardContent>
                            </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}


export default ScreenshotsCarousel