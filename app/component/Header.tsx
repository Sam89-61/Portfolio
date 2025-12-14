import React from 'react'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Link from 'next/link'
import GlitchTitle from './glitchTitle'
import { cn } from "@/lib/utils"

const Header = () => {
    const links = [
        { href: "#", label: "Docs" },
        { href: "#", label: "Projets" },
        { href: "#", label: "À propos" },
        { href: "#", label: "Contact" },
    ]

    return (
        <header className="py-4 sticky top-0 z-50 bg-background/80 backdrop-blur-sm ">
            <div className="flex justify-between items-center">
                <GlitchTitle  $title="Samuel Aubine Bourdon" />
                <div className="hidden xl:block">
                    <NavigationMenu>
                        <NavigationMenuList className="gap-4">
                            {links.map((link, index) => (
                                <NavigationMenuItem key={index} className=''>
                                    <NavigationMenuLink asChild className= {navigationMenuTriggerStyle()}>
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
                                        className="text-2xl hover:underline hover:opacity-50 underline-offset-4 text-center "
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