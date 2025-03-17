'use client'
import Link from "next/link";
import React from 'react'
import { Button } from "@/components/ui/button";
import { Carousel, CarouselApi, CarouselContent, CarouselDots, CarouselItem } from "@/components/ui/carousel";
import ProjectCard from "./project-card";

type Props = object

interface Project {
  image: string;
  category: string;
  name: string;
  description: string;
  link: string;
  github: string;
}

const projects: Project[] = [
	{
		image: "/work/3.png",
		category: "react js",
		name: "Nexa Website",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus cum nesciunt.",
		link: "/",
		github: "/",
	},
	{
		image: "/work/4.png",
		category: "react js",
		name: "Solstice Website",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus cum nesciunt.",
		link: "/",
		github: "/",
	},
	{
		image: "/work/2.png",
		category: "next js",
		name: "Lumina Website",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus cum nesciunt.",
		link: "/",
		github: "/",
	},
	{
		image: "/work/1.png",
		category: "next js",
		name: "Evolve Website",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus cum nesciunt.",
		link: "/",
		github: "/",
	},
	{
		image: "/work/3.png",
		category: "next js",
		name: "Ignite Website",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus cum nesciunt.",
		link: "/",
		github: "/",
	},
	{
		image: "/work/4.png",
		category: "next js",
		name: "Envision Website",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus cum nesciunt.",
		link: "/",
		github: "/",
	},
	{
		image: "/work/1.png",
		category: "fullstack",
		name: "Serenity Website",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus cum nesciunt.",
		link: "/",
		github: "/",
	},
	{
		image: "/work/3.png",
		category: "fullstack",
		name: "Nova Website",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus cum nesciunt.",
		link: "/",
		github: "/",
	},
	{
		image: "/work/2.png",
		category: "fullstack",
		name: "Zenith Website",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus cum nesciunt.",
		link: "/",
		github: "/",
	},
]

export default function Works({}: Props) {
  const [api, setApi] = React.useState<CarouselApi>()
	const [, setCurrent] = React.useState(0)
	const [, setCount] = React.useState(0)
	React.useEffect(() => {
    if (!api) {
      return
		}
    
		setCount(api.scrollSnapList().length)
		setCurrent(api.selectedScrollSnap() + 1)
    
		api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
		})
	}, [api])

  return (
		<section className="relative mb-12 xl:mb-48">
			<div className="container mx-auto">
				{/* text */}
				<div className="max-w-[480px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[480px] flex flex-col justify-center items-center xl:items-start">
					<h2 className="section-title mb-4">Latest Projects</h2>
					<p className="subtitle mb-8">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime cum
						aspernatur error sapiente
					</p>
					<Link href="/projects">
						<Button>All projects</Button>
					</Link>
				</div>
				{/* slider */}
				<div className="xl:w-[1000px] xl:absolute right-0 top-0 pt-6">
					<Carousel
						setApi={setApi}
						opts={{
							align: "start",
						}}
						className="h-[480px]"
					>
						<CarouselContent className="mb-4">
							{projects.map((project, index) => (
								<CarouselItem
									key={index}
									className="lg:basis-1/2"
								>
									<ProjectCard project={project} />
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselDots />
					</Carousel>
				</div>
			</div>
		</section>
	)
}