import { Blocks, GanttChartSquare, Gem } from "lucide-react";
import React, { ReactNode } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components//ui/card";

interface Service {
  icon: ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
	{
		icon: (
			<GanttChartSquare
				size={72}
				strokeWidth={0.8}
			/>
		),
		title: "Web Design",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae odio facere porro sequi hic excepturi fugiat dignissimos consectetur, sunt placeat eveniet vitae inventore! Autem vel, dolorem mollitia ut doloribus incidunt?",
	},
	{
		icon: (
			<Blocks
				size={72}
				strokeWidth={0.8}
			/>
		),
		title: "Web Development",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae odio facere porro sequi hic excepturi fugiat dignissimos consectetur, sunt placeat eveniet vitae inventore! Autem vel, dolorem mollitia ut doloribus incidunt?",
	},
	{
		icon: (
			<Gem
				size={72}
				strokeWidth={0.8}
			/>
		),
		title: "App Development",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae odio facere porro sequi hic excepturi fugiat dignissimos consectetur, sunt placeat eveniet vitae inventore! Autem vel, dolorem mollitia ut doloribus incidunt?",
	},
] 

type Props = object

export default function Services({}: Props) {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          My Services
        </h2>
        {/* grid items */}
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {
            services.map((item, index) => {
              return (
                <Card key={index} className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative">
                  <CardHeader className="text-primary absolute -top-[40px]">
                    <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                      {item.icon}
                    </div>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardTitle className="text-xl mb-4 mt-4">{item.title}</CardTitle>
                    <CardDescription className="text-lg">{item.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}