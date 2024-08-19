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
        <Carousel className="w-full max-w-5xl">
            <CarouselContent>
                {screenshots.map((screenshot) => (
                    <CarouselItem>
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <span className="text-4xl font-semibold">
                                        <figure><img src={screenshot} alt='Screenshots do projeto'/></figure>
                                    </span>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}


export default ScreenshotsCarousel