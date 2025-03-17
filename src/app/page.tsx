import About from "@/components/about";
import CTA from "@/components/cta";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Works from "@/components/works";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Works />
      <CTA />
    </main>
	)
}
