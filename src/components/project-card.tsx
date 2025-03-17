import React from 'react'
import { Card, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image";
import Link from "next/link";
import { Link2Icon } from "lucide-react";
import { IoLogoGithub } from "react-icons/io"

interface Project {
  category: string;
  description: string;
  name: string;
  image: string;
  link: string;
  github: string;
}

type Props = {
  project: Project
}

export default function ProjectCard({project}: Props) {
  return (
		<Card className="group overflow-hidden relative">
			<CardHeader className="p-0">
				<div className="relative w-full h-[300px] flex items-center justify-center bg-tertiery dark:bg-secondary/40 bg-work-project bg-[110%] bg-no-repeat overflow-hidden">
					<Image
						src={project.image}
						width={247}
						height={250}
						alt=""
						priority
						className="absolute bottom-0 shadow-2xl"
					/>
					{/* button link */}
					<div className="flex flex-row gap-x-4">
						<Link
							href={project.link}
							className="bg-foreground w-[54px] h-[54px] rounded-full flex  justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
						>
							<Link2Icon className="text-white" />
						</Link>
						<Link
							href={project.github}
							className="bg-foreground size-[54px] rounded-full flex  justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
						>
							<IoLogoGithub className="text-white size-6" />
						</Link>
					</div>
				</div>
			</CardHeader>
			<div className="h-full px-8 py-6">
				<Badge className="uppercase rounded-full text-sm font-medium mb-2 absolute top-4 left-5">
					{project.category}
				</Badge>
				<h4 className="mb-1">{project.name}</h4>
				<p className="text-muted-foreground text-lg">{project.description}</p>
			</div>
		</Card>
	)
}