import React from 'react'
import Socials from "./socials"

type Props = object

export default function Footer({}: Props) {
  return (
    <footer className="bg-[color:hsl(240,19%,16%)] py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          {/* socials */}
          <Socials
            containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
            iconsStyles="text-secondary dark:text-white/70 text-[20px] transition-all"
          />
          {/* copyright */}
          <div className="text-muted-foreground">
            Copyright &copy; Regy Saputra. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}