import React, { ReactNode } from 'react'
import CountUp from 'react-countup'

type Props = {
  containerStyles: string;
  icon: ReactNode;
  endCountNum: number;
  endCountText?: string;
  badgeText: string;
}

export default function Badge({
  containerStyles,
  icon,
  endCountNum,
  endCountText,
  badgeText
}: Props) {
  return (
    <div className={`badge ${containerStyles}`}>
      <div className="text-3xl text-badge-countup">{icon}</div>
      <div className="flex items-center gap-x-2">
        <div className="text-4xl leading-none font-bold text-badge-countup">
          <CountUp end={endCountNum} delay={1} duration={4} />
          {endCountText}
        </div>
        <div className="max-w-[70px] leading-none text-[15px] font-medium text-black">{badgeText}</div>
      </div>
    </div>
  )
}