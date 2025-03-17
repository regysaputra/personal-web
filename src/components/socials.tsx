import Link from "next/link"
import React from 'react'
import { RiFacebookFill, RiGithubFill, RiInstagramFill, RiLinkedinFill, RiYoutubeFill } from "react-icons/ri"

type Props = {
  containerStyles: string;
  iconsStyles: string;
}

const icons = [
  {
    path: "/",
    name: <RiYoutubeFill />
  },
  {
    path: "/",
    name: <RiLinkedinFill />
  },
  {
    path: "/",
    name: <RiGithubFill />
  },
  {
    path: "/",
    name: <RiFacebookFill />
  },
  {
    path: "/",
    name: <RiInstagramFill />
  }
]

export default function Socials({containerStyles, iconsStyles}: Props) {
  return (
    <div className={`${containerStyles}`}>
      {
        icons.map((icon, index) => {
          return (
            <Link href={icon.path} key={index}>
              <div className={`${iconsStyles}`}>{icon.name}</div>
            </Link>
          )
        })
      }
    </div>
  )
}