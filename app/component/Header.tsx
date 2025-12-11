import React from 'react'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Link from 'next/link'
import { cn } from "@/lib/utils"

const Header = () => {
    const links = [
        { href: "#", label: "Docs" },
        { href: "#", label: "Projets" },
        { href: "#", label: "À propos" },
        { href: "#", label: "Contact" },
    ]

    return (
        <header className="py-4">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-primary-foreground">
                    Samuel Aubine Bourdon
                </h1>
                <div className="hidden xl:block">
                    <NavigationMenu>
                        <NavigationMenuList>
                            {links.map((link, index) => (
                                <NavigationMenuItem key={index} className='m-0.5'>
                                    <NavigationMenuLink asChild className='text-3xl '>
                                        <Link href={link.href} className=''> 
                                            {link.label}
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <div className="xl:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button size="icon">
                                <Menu size={40}  />
                            </Button>
                        </SheetTrigger>
                        <SheetContent className="border-none">   
                            <SheetTitle className="sr-only">Menu de navigation</SheetTitle>
                            <nav className="flex flex-col gap-4 mt-8">
                                {links.map((link, index) => (
                                    <Link
                                        key={index}
                                        href={link.href}
                                        className="text-2xl hover:underline underline-offset-4 text-center "
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}

export default Header