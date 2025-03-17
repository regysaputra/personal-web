'use client'
import Link from "next/link"
import React from 'react'
import { RiArrowDownLine, RiBriefcase4Fill, RiTeamFill, RiTodoFill } from "react-icons/ri"
import { Button } from "@/components/ui/button"
import { Download, Send } from "lucide-react"
import Socials from "./socials"
import DevImage from "./dev-image"
import Badge from "./badge"

type Props = object

export default function Hero({}: Props) {
  return (
		<section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
			<div className="container mx-auto">
				<div className="flex justify-between gap-x-8">
					<div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
						<div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
							Fullstack Developer
						</div>
						<h1 className="headline">Hello, my name is Regy Saputra</h1>
						<p className="subheadline">
							Brief description with insights into myself, my vocational
							journey, and what I engage in professionally.
						</p>
						<div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
							<Link href="/contact">
								<Button className="gap-x-2">
									Contact me <Send size={18} />
								</Button>
							</Link>
							<Button
								variant="secondary"
								className="gap-x-2 hover:cursor-pointer"
								onClick={() =>
									(window.location.href =
										"https://drive.google.com/uc?export=download&id=1r5KAGXEqVXjyKYbut1X7AL642is-JjWt")
								}
							>
								Download CV
								<Download size={18} />
							</Button>
						</div>
						<Socials
							containerStyles="flex gap-x-6 mx-auto xl:mx-0"
							iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
						/>
					</div>
					<div className="hidden xl:flex relative">
						<Badge
							containerStyles="absolute top-[24%] -left-[5rem]"
							icon={<RiBriefcase4Fill />}
							endCountNum={3}
							badgeText="Years Of Experience"
						/>
						<Badge
							containerStyles="absolute top-[80%] -left-[1rem]"
							icon={<RiTodoFill />}
							endCountNum={6}
							endCountText="k"
							badgeText="Finished Projects"
						/>
						<Badge
							containerStyles="absolute top-[55%] -right-8"
							icon={<RiTeamFill />}
							endCountNum={9}
							endCountText="k"
							badgeText="Happy Clients"
						/>
						<div className="bg-hero-shape2 w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
						<DevImage
							containerStyles="bg-hero-shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
							imgSrc="/hero/developer.png"
						/>
					</div>
				</div>
				<div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
					<RiArrowDownLine className="text-3xl text-primary" />
				</div>
			</div>
		</section>
	)
}