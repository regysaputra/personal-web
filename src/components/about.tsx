import React, { ReactNode } from 'react'
import DevImage from "./dev-image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Briefcase, Calendar, GraduationCap, GraduationCapIcon, HomeIcon, MailIcon, PhoneCall, User2 } from "lucide-react";
import Image from "next/image";

type Props = object

interface Biodata {
	icon: ReactNode;
	text: string;
}

interface Education {
  university: string;
  degree: string;
  years: string;
} 

interface Experience {
  company: string;
  role: string;
  years: string;
}

interface Skill {
  name: string;
}

interface Tool {
  imgPath: string;
}

const biodata: Biodata[] = [
	{
		icon: <User2 size={20} />,
		text: "Regy Saputra",
	},
	{
		icon: <PhoneCall size={20} />,
		text: "(+62) 895-3261-30662",
	},
	{
		icon: <MailIcon size={20} />,
		text: "regysaputra27@gmail.com",
	},
	{
		icon: <Calendar size={20} />,
		text: "Born on 27 Feb, 1997",
	},
	{
		icon: <GraduationCap size={20} />,
		text: "Master on Computer Science",
	},
	{
		icon: <HomeIcon size={20} />,
		text: "Jl. Srimahi II No. 3A, Bandung, Indonesia",
	},
]

const educations: Education[] = [
	{
		university: "Indonesia Education University",
		degree: "Bachelor of Computer Science",
		years: "2017-2022",
	},
]

const experiences: Experience[] = [
	{
		company: "SCCIC ITB",
		role: "Backend Engineer Intern",
		years: "2020",
	},
	{
		company: "GITS",
		role: "Backend Engineer Intern",
		years: "2021",
	},
	{
		company: "Fikri Learning Center",
		role: "Fullstack Developer",
		years: "2022-2023",
	},
	{
		company: "Fiver",
		role: "Freelancer Web Developer",
		years: "2023-2025",
	},
]

const skills: Skill[] = [
	{
		name: "HTML, CSS",
	},
	{
		name: "Front-end Development",
	},
	{
		name: "Javascript, PHP, Golang, Python",
	},
	{
		name: "Back-end Development",
	},
] 

const tools: Tool[] = [
	{
		imgPath: "/about/vscode.svg",
	},
	{
		imgPath: "/about/figma.svg",
	},
	{
		imgPath: "/about/notion.svg",
	},
]

export default function About({}: Props) {
  return (
		<section className="xl:h-[860px] pb-12 xl:py-24 mb-10">
			<div className="container mx-auto">
				<h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
					About me
				</h2>
				<div className="flex flex-col xl:flex-row">
					<div className="hidden xl:flex flex-1 relative">
						<DevImage
							containerStyles="bg-about-shape bg-no-repeat"
							imgSrc="/about/developer.png"
						/>
					</div>
					<div className="flex-1">
						<Tabs defaultValue="personal">
							<TabsList className="grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
								<TabsTrigger
									className="w-[162px] xl:w-auto"
									value="personal"
								>
									Personal Info
								</TabsTrigger>
								<TabsTrigger
									className="w-[162px] xl:w-auto"
									value="degree"
								>
									Qualification
								</TabsTrigger>
								<TabsTrigger
									className="w-[162px] xl:w-auto"
									value="skills"
								>
									Skills
								</TabsTrigger>
							</TabsList>
							<div className="text-lg mt-12 xl:mt-8">
								<TabsContent value="personal">
									<div className="text-center xl:text-left">
										<h3 className="mb-4">
											Unmatched Service Quality for Over 2 Years
										</h3>
										<p className="subtitle max-w-xl mx-auto xl:mx-0 mb-4">
											I specialize in crafting untuitive website with
											cutting-edge technology, delivering dynamic and engaging
											user experiences.
										</p>
										<div className="grid xl:grid-cols-2 gap-4 mb-12">
											{biodata.map((item, index) => {
												return (
													<div
														key={index}
														className="flex items-center gap-x-4 mx-auto xl:mx-0"
													>
														<div className="text-primary">{item.icon}</div>
														<div>{item.text}</div>
													</div>
												)
											})}
										</div>
										<div className="flex flex-col gap-y-2">
											<div className="text-primary">Language Skill</div>
											<div className="border-b border-border"></div>
											<div>English, Indonesia</div>
										</div>
									</div>
								</TabsContent>
								<TabsContent value="degree">
									<div>
										<h3 className="h3 mb-8 text-center xl:text-left">
											My Awesome Journey
										</h3>
										{/* experience & education wrapper */}
										<div className="grid md:grid-cols-2 gap-y-8">
											{/* experience */}
											<div>
												<div className="flex gap-x-4 items-center text-[22px] text-primary mb-4">
													<Briefcase />
													<h4 className="capitalize font-medium">
														Experiences
													</h4>
												</div>
												{/* experience list */}
												<div className="flex flex-col gap-y-8">
													{experiences.map(
														(item, index) => {
															const { company, role, years } = item

															return (
																<div
																	className="flex gap-x-8 group"
																	key={index}
																>
																	<div className="h-[84px] w-[1px] bg-border relative ml-2">
																		<div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
																	</div>
																	<div>
																		<div className="font-semibold text-xl leading-none mb-2">
																			{company}
																		</div>
																		<div className="text-lg leading-none  text-muted-foreground mb-4">
																			{role}
																		</div>
																		<div className="text-base font-medium">
																			{years}
																		</div>
																	</div>
																</div>
															)
														}
													)}
												</div>
											</div>
											{/* education */}
											<div>
												<div className="flex gap-x-4 items-center text-[22px] text-primary mb-4">
													<GraduationCapIcon />
													<h4 className="capitalize font-medium">
														Education
													</h4>
												</div>
												{/* education list */}
												<div className="flex flex-col gap-y-8">
													{educations.map(
														(item, index) => {
															const { university, degree, years } = item

															return (
																<div
																	className="flex gap-x-8 group"
																	key={index}
																>
																	<div className="h-[84px] w-[1px] bg-border relative ml-2">
																		<div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
																	</div>
																	<div>
																		<div className="font-semibold text-xl leading-none mb-2">
																			{university}
																		</div>
																		<div className="text-lg leading-none  text-muted-foreground mb-4">
																			{degree}
																		</div>
																		<div className="text-base font-medium">
																			{years}
																		</div>
																	</div>
																</div>
															)
														}
													)}
												</div>
											</div>
										</div>
									</div>
								</TabsContent>
								<TabsContent value="skills">
									<div className="text-center xl:text-left">
										<h3 className="mb-8">What I Use Everyday</h3>
										<div className="mb-16">
											<h4 className="text-xl font-semibold mb-2">Skills</h4>
											<div className="border-b border-border mb-4"></div>
											{/* skill list */}
											<div>
												{skills.map((item, index) => {
													const { name } = item

													return (
														<div
															key={index}
															className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
														>
															<div className="font-medium">{name}</div>
														</div>
													)
												})}
											</div>
										</div>
										{/* tools */}
										<div>
											<h4 className="text-xl font-semibold mb-2 xl:text-left">
												Tools
											</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* tool list */}
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {
                          tools.map((item, index) => {
                            const {imgPath} = item

                            return (
                              <div key={index}>
                                <Image src={imgPath} width={48} height={48} alt="" priority />
                              </div>
                            )
                          })
                        }
                      </div>
										</div>
									</div>
								</TabsContent>
							</div>
						</Tabs>
					</div>
				</div>
			</div>
		</section>
	)
}