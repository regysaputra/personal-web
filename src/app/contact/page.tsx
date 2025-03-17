import Form from "@/components/form"
import { HomeIcon, MailIcon, PhoneCall } from "lucide-react"
import React from "react"

type Props = object

export default function Contact({}: Props) {
	return (
		<section>
			<div className="container mx-auto">
				{/* text & illustration */}
				<div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
					{/* text */}
					<div className="flex flex-col justify-center">
						<div className="flex items-center gap-x-4 text-primary text-lg mb-4">
							<span className="w-[30px] h-[2px] bg-primary"></span>
							Say Hello 👋
						</div>
						<h1 className="headline max-w-md mb-8">Let&apos;s Work Together</h1>
						<p className="subtitle max-w-[400px]">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
							ullam maiores inventore molestiae, eos maxime alias quibusdam
							veniam iusto! Quibusdam soluta aliquid minus! Officiis quidem eum
							delectus eaque dolorem quaerat?
						</p>
					</div>
					<div className="hidden xl:flex w-full bg-contact-illustration bg-contain bg-top bg-no-repeat"></div>
				</div>
				{/* info text & form */}
				<div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
					{/* info text */}
					<div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
						{/* mail */}
						<div className="flex items-center gap-x-8">
							<MailIcon
								size={18}
								className="text-primary"
							/>
							<div>regysaputra27@gmail.com</div>
						</div>
						{/* address */}
						<div className="flex items-center gap-x-8">
							<HomeIcon
								size={18}
								className="text-primary"
							/>
							<div>Jl. Srimahi II No. 3A</div>
						</div>
						{/* phone */}
						<div className="flex items-center gap-x-8">
							<PhoneCall
								size={18}
								className="text-primary"
							/>
							<div>(+62) 895 3261 30662</div>
						</div>
					</div>
          <Form />
				</div>
			</div>
		</section>
	)
}
