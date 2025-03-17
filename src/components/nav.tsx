'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from 'react'
import { motion } from 'framer-motion'

type Props = {
  containerStyles: string;
  linkStyles: string;
  underlineStyles: string;
}

const links = [
	{ path: "/", name: "home" },
	{ path: "/projects", name: "my projects" },
	{ path: "/contact", name: "contact" },
]

export default function Nav({ containerStyles, linkStyles, underlineStyles }: Props) {
  const path = usePathname()

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link,index) => {
        return (
					<Link
						key={index}
						href={link.path}
						className={`capitalize ${linkStyles}`}
					>
            {link.path === path && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: 'tween' }}
                layoutId="underline"
                className={`${underlineStyles}`}
              />
            )}
						{link.name}
					</Link>
				)
      })}
    </nav>
  )
}