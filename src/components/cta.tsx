import React from 'react'
import { Button } from "./ui/button"
import Link from "next/link"

type Props = object

export default function CTA({}: Props) {
  return (
    <section className="py-24 bg-tertiery dark:bg-secondary/40">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-4xl max-w-xl text-center mb-8">Prepared to turn your ideas into reality? I&apos;m here  to help</h2>
          <Link href="/contact">
            <Button>Contact me</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}