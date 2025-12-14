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
        { title: "Symfony", image: "assets/projet1.png", link: "#" },
        { title: "Portfolio", image: "assets/projet2.png", link: "#" },
        { title: "Lead&Nous", image: "assets/projet3.png", link: "#" },
        { title: "BikeStore", image: "assets/projet4.png", link: "#" },
        { title: "Theme Flutter", image: "assets/projet5.png", link: "#" },
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
            opts={{
                align: "center",
                loop: true,
            }}
            className="w-full m-auto  "

        >
            <CarouselContent className="">
                {projet.map((projet, index) => {
                    const isCenter = index === current
                    return (
                        <CarouselItem key={index} className=" lg:basis-1/3 h-full cursor-pointer" onClick={() => scrollTo(index)}>
                            <div className={`p-1 transition-all duration-300 ${isCenter ? "p-1" : "p-8"} `
                            }>
                                <Card>
                                    <CardContent className="flex flex-col items-center aspect-square ">
                                        <img
                                            src={projet.image}
                                            alt={projet.title}
                                            className="object-cover rounded-md"
                                        />
                                        <h4>{projet.title}</h4>
                                        <Button variant="link" className="mt-2 p-0 underline"  >
                                            <Link href={projet.link}>
                                                Voir le projet
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    )
                })}
            </CarouselContent >
            <CarouselPrevious className='hidden md:flex' />
            <CarouselNext className='hidden md:flex' />
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
