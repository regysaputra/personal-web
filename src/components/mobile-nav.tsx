import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { AlignJustify } from "lucide-react"
import Logo from "./logo"
import Nav from "./nav"
import Socials from "./socials"

type Props = object

export default function MobileNav({}: Props) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
            <Nav containerStyles="flex flex-col items-center gap-y-6" linkStyles="text-2xl" underlineStyles="" />
          </div>
          <Socials containerStyles="flex gap-x-4" iconsStyles="text-2xl" />
        </div>
      </SheetContent>
    </Sheet>
  )
}