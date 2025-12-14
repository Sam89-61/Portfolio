"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel"
import { Button } from '@/components/ui/button'

function CarrouselProjet() {
    const projet = [
        { title: "Night City Cyberpunk", image: "assets/symfony.svg", link: "#" },
        { title: "Portfolio", image: "assets/nextjs.svg", link: "#" },
        { title: "Lead&Nous", image: "assets/wordpress.svg", link: "#" },
        { title: "BikeStore", image: "assets/php.svg", link: "#" },
        { title: "Stage au GREYC", image: "assets/projet/stage4.svg", link: "#" },
    ]
    const [api, setApi] = useState<CarouselApi | undefined>()
    const [current, setCurrent] = useState(0)

    React.useEffect(() => {
        if (!api) return

        setCurrent(api.selectedScrollSnap())

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])

    const scrollTo = (index: number) => {
        if (api) {
            api.scrollTo(index)
        }
    }

    return (
        <Carousel
            setApi={setApi}
            opts={{ align: "center", loop: true }}
            className="w-full m-auto"
        >
            <CarouselContent>
                {projet.map((projet, index) => {
                    const isCenter = index === current
                    return (
                        <CarouselItem
                            key={index}
                            className="lg:basis-1/3 cursor-pointer"
                            onClick={() => scrollTo(index)}
                        >
                            <div
                                className={`transition-all duration-300 ${isCenter ? "p-1" : "p-8"}`}
                            >
                                <Card>
                                    <CardContent className="flex flex-col p-0 h-[420px]">
                                        {/* Image : 80% */}
                                        <div className="flex-[8] w-full overflow-hidden">
                                            <img
                                                src={projet.image}
                                                alt={projet.title}
                                                className=" rounded-t-md object-fill h-full w-full "
                                            />
                                        </div>

                                        {/* Contenu : 20% */}
                                        <div className="flex-[2] flex flex-col justify-center items-center gap-2 px-4">
                                            <h4 className="font-semibold text-center">
                                                {projet.title}
                                            </h4>
                                            <Button variant="link" className="p-0 underline">
                                                <Link href={projet.link}>Voir le projet</Link>
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    )
                })}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />

            <div className="flex gap-2 justify-center mt-4">
                {Array.from({ length: 5 }).map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${index === current ? "bg-primary" : "bg-muted"}`}
                        onClick={() => scrollTo(index)}
                    />
                ))}
            </div>
        </Carousel>
    )
}

export default CarrouselProjet