'use client'
import React, { useEffect, useState } from 'react'
import { ThemeModeToggle } from "./theme-mode-toggle"
import { ThemeColorToggle } from "./theme-color-toggle"
import Logo from "./logo"
import Nav from "./nav"
import MobileNav from "./mobile-nav"
import { usePathname } from "next/navigation"

type Props = object

export default function Header({}: Props) {
  const [header, setHeader] = useState(false)
  const pathname = usePathname();
  console.log("pathname :", pathname)
  useEffect(() => {
    const scrollYPos: EventListener = () => {
      if (window.scrollY > 50) {
        setHeader(true)
      } else {
        setHeader(false)
      }
		}
    
    window.addEventListener('scroll', scrollYPos)

    return () => window.removeEventListener('scroll', scrollYPos)
  })

  return (
		<header className={`${
      header 
        ? "py-4 bg-white shadow-lg dark:bg-accent" 
        : "py-6 dark:bg-transparent"
      } sticky top-0 z-30 transition-all ${pathname === "/" && "bg-header-background"}`}
    >
			<div className="container mx-auto">
				<div className="flex justify-between items-center">
					<Logo />
					<div className="flex items-center gap-x-6">
						<Nav 
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
						<div className="flex flex-row space-x-1">
							<ThemeColorToggle />
							<ThemeModeToggle />
						</div>
            <div className="xl:hidden">
              <MobileNav />
            </div>
					</div>
				</div>
			</div>
		</header>
	)
}