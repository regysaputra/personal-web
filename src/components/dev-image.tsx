import Image from "next/image"
import React from 'react'

type Props = {
  containerStyles: string;
  imgSrc: string;
}

export default function DevImage({containerStyles, imgSrc}: Props) {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} width={510} height={462} alt="dev-photo" />
    </div>
  )
}