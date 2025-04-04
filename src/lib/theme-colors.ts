import { ThemeColors } from "@/types/theme-types"

const themes = {
	Orange: {
		light: {
			background: "oklch(from hsl(0 0% 100%) l c h)",
			foreground: "oklch(from hsl(20 14.3% 4.1%) l c h)",
			card: "oklch(from hsl(0 0% 100%) l c h)",
			cardForeground: "oklch(from hsl(20 14.3% 4.1%) l c h)",
			popover: "oklch(from hsl(0 0% 100%) l c h)",
			popoverForeground: "oklch(from hsl(20 14.3% 4.1%) l c h)",
			primary: "oklch(from hsl(24.6 95% 53.1%) l c h)",
			primaryForeground: "oklch(from hsl(60 9.1% 97.8%) l c h)",
			secondary: "oklch(from hsl(60 4.8% 95.9%) l c h)",
			secondaryForeground: "oklch(from hsl(24 9.8% 10%) l c h)",
			tertiery: "oklch(from hsl(27 82% 98%) l c h)",
			muted: "oklch(from hsl(60 4.8% 95.9%) l c h)",
			mutedForeground: "oklch(from hsl(25 5.3% 44.7%) l c h)",
			accent: "oklch(from hsl(60 4.8% 95.9%) l c h)",
			accentForeground: "oklch(from hsl(24 9.8% 10%) l c h)",
			destructive: "oklch(from hsl(0 84.2% 60.2%) l c h)",
			destructiveForeground: "oklch(from hsl(60 9.1% 97.8%) l c h)",
			border: "oklch(from hsl(20 5.9% 90%) l c h)",
			input: "oklch(from hsl(20 5.9% 90%) l c h)",
			ring: "oklch(from hsl(24.6 95% 53.1%) l c h)",
			headerBackground: "oklch(from hsl(22 82% 98%) l c h)",
			radius: "0.5rem",
			heroBackground: "url('/hero/hero-bg-orange.png')",
			heroShapeBackground: "url('/hero/shape-1.svg')",
			heroShape2: "url('/hero/shape-2-light.svg')",
			aboutShape: "url('/about/shape-light.svg')",
			badgeCountup: "oklch(from hsl(24.6 95% 53.1%) l c h)",
			dots: "url('/dots-light.svg')",
			tabsTriggerForeground: "oklch(from hsl(0 0% 100%) l c h)",
			workProjectBackground: "url('/work/project-bg-light.png')",
			contactIllustrationBackground: "url('/contact/illustration-light.svg')",
		},
		dark: {
			background: "oklch(from hsl(20 14.3% 4.1%) l c h)",
			foreground: "oklch(from hsl(60 9.1% 97.8%) l c h)",
			card: "oklch(from hsl(20 14.3% 4.1%) l c h)",
			cardForeground: "oklch(from hsl(60 9.1% 97.8%) l c h)",
			popover: "oklch(from hsl(20 14.3% 4.1%) l c h)",
			popoverForeground: "oklch(from hsl(60 9.1% 97.8%) l c h)",
			primary: "oklch(from hsl(20.5 90.2% 48.2%) l c h)",
			primaryForeground: "oklch(from hsl(60 9.1% 97.8%) l c h)",
			secondary: "oklch(from hsl(12 6.5% 15.1%) l c h)",
			secondaryForeground: "oklch(from hsl(60 9.1% 97.8%) l c h)",
			tertiery: "oklch(from hsl(237 22% 20%) l c h)",
			muted: "oklch(from hsl(12 6.5% 15.1%) l c h)",
			mutedForeground: "oklch(from hsl(24 5.4% 63.9%) l c h)",
			accent: "oklch(from hsl(12 6.5% 15.1%) l c h)",
			accentForeground: "oklch(from hsl(60 9.1% 97.8%) l c h)",
			destructive: "oklch(from hsl(0 72.2% 50.6%) l c h)",
			destructiveForeground: "oklch(from hsl(60 9.1% 97.8%) l c h)",
			border: "oklch(from hsl(12 6.5% 15.1%) l c h)",
			input: "oklch(from hsl(12 6.5% 15.1%) l c h)",
			ring: "oklch(from hsl(20.5 90.2% 48.2%) l c h)",
			heroShapeBackground: "url('/hero/shape-1.svg')",
			heroShape2: "url('/hero/shape-2-dark.svg')",
			aboutShape: "url('/about/shape-dark.svg')",
			badgeCountup: "oklch(from hsl(20.5 90.2% 48.2%) l c h)",
			dots: "url('/dots-dark.svg')",
			tabsTriggerForeground: "oklch(from hsl(0 0% 100%) l c h)",
			workProjectBackground: "url('/work/project-bg-dark.png')",
			contactIllustrationBackground: "url('/contact/illustration-dark.svg')",
		},
	},
	Blue: {
		light: {
			background: "oklch(from hsl(0 0% 100%) l c h)",
			foreground: "oklch(from hsl(222.2 84% 4.9%) l c h)",
			card: "oklch(from hsl(0 0% 100%) l c h)",
			cardForeground: "oklch(from hsl(222.2 84% 4.9%) l c h)",
			popover: "oklch(from hsl(0 0% 100%) l c h)",
			popoverForeground: "oklch(from hsl(222.2 84% 4.9%) l c h)",
			primary: "oklch(from hsl(221.2 83.2% 53.3%) l c h)",
			primaryForeground: "oklch(from hsl(210 40% 98%) l c h)",
			secondary: "oklch(from hsl(210 40% 96.1%) l c h)",
			secondaryForeground: "oklch(from hsl(222.2 47.4% 11.2%) l c h)",
			tertiery: "oklch(from hsl(27 82% 98%) l c h)",
			muted: "oklch(from hsl(210 40% 96.1%) l c h)",
			mutedForeground: "oklch(from hsl(215.4 16.3% 46.9%) l c h)",
			accent: "oklch(from hsl(210 40% 96.1%) l c h)",
			accentForeground: "oklch(from hsl(222.2 47.4% 11.2%) l c h)",
			destructive: "oklch(from hsl(0 84.2% 60.2%) l c h)",
			destructiveForeground: "oklch(from hsl(210 40% 98%) l c h)",
			border: "oklch(from hsl(214.3 31.8% 91.4%) l c h)",
			input: "oklch(from hsl(214.3 31.8% 91.4%) l c h)",
			ring: "oklch(from hsl(221.2 83.2% 53.3%) l c h)",
			headerBackground: "oklch(from hsl(218 80% 98%) l c h)",
			radius: "0.5rem",
			heroBackground: "url('/hero/hero-bg-blue.png')",
			heroShapeBackground: "url('/hero/shape-1.svg')",
			heroShape2: "url('/hero/shape-2-light.svg')",
			aboutShape: "url('/about/shape-light.svg')",
			badgeCountup: "oklch(from hsl(221.2 83.2% 53.3%) l c h)",
			dots: "url('/dots-light.svg')",
			tabsTriggerForeground: "oklch(from hsl(0 0% 100%) l c h)",
			workProjectBackground: "url('/work/project-bg-light.png')",
			contactIllustrationBackground: "url('/contact/illustration-light.svg')",
		},
		dark: {
			background: "oklch(from hsl(222.2 84% 4.9%) l c h)",
			foreground: "oklch(from hsl(210 40% 98%) l c h)",
			card: "oklch(from hsl(222.2 84% 4.9%) l c h)",
			cardForeground: "oklch(from hsl(210 40% 98%) l c h)",
			popover: "oklch(from hsl(222.2 84% 4.9%) l c h)",
			popoverForeground: "oklch(from hsl(210 40% 98%) l c h)",
			primary: "oklch(from hsl(217.2 91.2% 59.8%) l c h)",
			primaryForeground: "oklch(from hsl(222.2 47.4% 11.2%) l c h)",
			secondary: "oklch(from hsl(217.2 32.6% 17.5%) l c h)",
			secondaryForeground: "oklch(from hsl(210 40% 98%) l c h)",
			tertiery: "oklch(from hsl(237 22% 20%) l c h)",
			muted: "oklch(from hsl(217.2 32.6% 17.5%) l c h)",
			mutedForeground: "oklch(from hsl(215 20.2% 65.1%) l c h)",
			accent: "oklch(from hsl(217.2 32.6% 17.5%) l c h)",
			accentForeground: "oklch(from hsl(210 40% 98%) l c h)",
			destructive: "oklch(from hsl(0 62.8% 30.6%) l c h)",
			destructiveForeground: "oklch(from hsl(210 40% 98%) l c h)",
			border: "oklch(from hsl(217.2 32.6% 17.5%) l c h)",
			input: "oklch(from hsl(217.2 32.6% 17.5%) l c h)",
			ring: "oklch(from hsl(224.3 76.3% 48%) l c h)",
			heroShapeBackground: "url('/hero/shape-1.svg')",
			heroShape2: "url('/hero/shape-2-dark.svg')",
			aboutShape: "url('/about/shape-dark.svg')",
			badgeCountup: "oklch(from hsl(217.2 91.2% 59.8%) l c h)",
			dots: "url('/dots-dark.svg')",
			tabsTriggerForeground: "oklch(from hsl(0 0% 100%) l c h)",
			workProjectBackground: "url('/work/project-bg-dark.png')",
			contactIllustrationBackground: "url('/contact/illustration-dark.svg')",
		},
	},
	Green: {
		light: {
			background: "oklch(from hsl(0 0% 100%) l c h)",
			foreground: "oklch(from hsl(240 10% 3.9%) l c h)",
			card: "oklch(from hsl(0 0% 100%) l c h)",
			cardForeground: "oklch(from hsl(240 10% 3.9%) l c h)",
			popover: "oklch(from hsl(0 0% 100%) l c h)",
			popoverForeground: "oklch(from hsl(240 10% 3.9%) l c h)",
			primary: "oklch(from hsl(142.1 76.2% 36.3%) l c h)",
			primaryForeground: "oklch(from hsl(355.7 100% 97.3%) l c h)",
			secondary: "oklch(from hsl(240 4.8% 95.9%) l c h)",
			secondaryForeground: "oklch(from hsl(240 5.9% 10%) l c h)",
			tertiery: "oklch(from hsl(27 82% 98%) l c h)",
			muted: "oklch(from hsl(240 4.8% 95.9%) l c h)",
			mutedForeground: "oklch(from hsl(240 3.8% 46.1%) l c h)",
			accent: "oklch(from hsl(240 4.8% 95.9%) l c h)",
			accentForeground: "oklch(from hsl(240 5.9% 10%) l c h)",
			destructive: "oklch(from hsl(0 84.2% 60.2%) l c h)",
			destructiveForeground: "oklch(from hsl(0 0% 98%) l c h)",
			border: "oklch(from hsl(240 5.9% 90%) l c h)",
			input: "oklch(from hsl(240 5.9% 90%) l c h)",
			ring: "oklch(from hsl(142.1 76.2% 36.3%) l c h)",
			headerBackground: "oklch(from hsl(114 80% 98%) l c h)",
			radius: "0.5rem",
			heroBackground: "url('/hero/hero-bg-green.png')",
			heroShapeBackground: "url('/hero/shape-1.svg')",
			heroShape2: "url('/hero/shape-2-light.svg')",
			aboutShape: "url('/about/shape-light.svg')",
			badgeCountup: "oklch(from hsl(142.1 76.2% 36.3%) l c h)",
			dots: "url('/dots-light.svg')",
			tabsTriggerForeground: "oklch(from hsl(0 0% 100%) l c h)",
			workProjectBackground: "url('/work/project-bg-light.png')",
			contactIllustrationBackground: "url('/contact/illustration-light.svg')",
		},
		dark: {
			background: "oklch(from hsl(20 14.3% 4.1%) l c h)",
			foreground: "oklch(from hsl(0 0% 95%) l c h)",
			card: "oklch(from hsl(24 9.8% 10%) l c h)",
			cardForeground: "oklch(from hsl(0 0% 95%) l c h)",
			popover: "oklch(from hsl(0 0% 9%) l c h)",
			popoverForeground: "oklch(from hsl(0 0% 95%) l c h)",
			primary: "oklch(from hsl(142.1 70.6% 45.3%) l c h)",
			primaryForeground: "oklch(from hsl(144.9 80.4% 10%) l c h)",
			secondary: "oklch(from hsl(240 3.7% 15.9%) l c h)",
			secondaryForeground: "oklch(from hsl(0 0% 98%) l c h)",
			tertiery: "oklch(from hsl(237 22% 20%) l c h)",
			muted: "oklch(from hsl(0 0% 15%) l c h)",
			mutedForeground: "oklch(from hsl(240 5% 64.9%) l c h)",
			accent: "oklch(from hsl(12 6.5% 15.1%) l c h)",
			accentForeground: "oklch(from hsl(0 0% 98%) l c h)",
			destructive: "oklch(from hsl(0 62.8% 30.6%) l c h)",
			destructiveForeground: "oklch(from hsl(0 85.7% 97.3%) l c h)",
			border: "oklch(from hsl(240 3.7% 15.9%) l c h)",
			input: "oklch(from hsl(240 3.7% 15.9%) l c h)",
			ring: "oklch(from hsl(142.4 71.8% 29.2%) l c h)",
			heroShapeBackground: "url('/hero/shape-1.svg')",
			heroShape2: "url('/hero/shape-2-dark.svg')",
			aboutShape: "url('/about/shape-dark.svg')",
			badgeCountup: "oklch(from hsl(142.1 70.6% 45.3%) l c h)",
			dots: "url('/dots-dark.svg')",
			tabsTriggerForeground: "oklch(from hsl(0 0% 100%) l c h)",
			workProjectBackground: "url('/work/project-bg-dark.png')",
			contactIllustrationBackground: "url('/contact/illustration-dark.svg')",
		},
	},
	Rose: {
		light: {
			background: "oklch(from hsl(0 0% 100%) l c h)",
			foreground: "oklch(from hsl(240 10% 3.9%) l c h)",
			card: "oklch(from hsl(0 0% 100%) l c h)",
			cardForeground: "oklch(from hsl(240 10% 3.9%) l c h)",
			popover: "oklch(from hsl(0 0% 100%) l c h)",
			popoverForeground: "oklch(from hsl(240 10% 3.9%) l c h)",
			primary: "oklch(from hsl(346.8 77.2% 49.8%) l c h)",
			primaryForeground: "oklch(from hsl(355.7 100% 97.3%) l c h)",
			secondary: "oklch(from hsl(240 4.8% 95.9%) l c h)",
			secondaryForeground: "oklch(from hsl(240 5.9% 10%) l c h)",
			tertiery: "oklch(from hsl(27 82% 98%) l c h)",
			muted: "oklch(from hsl(240 4.8% 95.9%) l c h)",
			mutedForeground: "oklch(from hsl(240 3.8% 46.1%) l c h)",
			accent: "oklch(from hsl(240 4.8% 95.9%) l c h)",
			accentForeground: "oklch(from hsl(240 5.9% 10%) l c h)",
			destructive: "oklch(from hsl(0 84.2% 60.2%) l c h)",
			destructiveForeground: "oklch(from hsl(0 0% 98%) l c h)",
			border: "oklch(from hsl(240 5.9% 90%) l c h)",
			input: "oklch(from hsl(240 5.9% 90%) l c h)",
			ring: "oklch(from hsl(346.8 77.2% 49.8%) l c h)",
			headerBackground: "oklch(from hsl(350 80% 98%) l c h)",
			radius: "0.5rem",
			heroBackground: "url('/hero/hero-bg-rose.png')",
			heroShapeBackground: "url('/hero/shape-1.svg')",
			heroShape2: "url('/hero/shape-2-light.svg')",
			aboutShape: "url('/about/shape-light.svg')",
			badgeCountup: "oklch(from hsl(346.8 77.2% 49.8%) l c h)",
			dots: "url('/dots-light.svg')",
			tabsTriggerForeground: "oklch(from hsl(0 0% 100%) l c h)",
			workProjectBackground: "url('/work/project-bg-light.png')",
			contactIllustrationBackground: "url('/contact/illustration-light.svg')",
		},
		dark: {
			background: "oklch(from hsl(20 14.3% 4.1%) l c h)",
			foreground: "oklch(from hsl(0 0% 95%) l c h)",
			card: "oklch(from hsl(24 9.8% 10%) l c h)",
			cardForeground: "oklch(from hsl(0 0% 95%) l c h)",
			popover: "oklch(from hsl(0 0% 9%) l c h)",
			popoverForeground: "oklch(from hsl(0 0% 95%) l c h)",
			primary: "oklch(from hsl(346.8 77.2% 49.8%) l c h)",
			primaryForeground: "oklch(from hsl(355.7 100% 97.3%) l c h)",
			secondary: "oklch(from hsl(240 3.7% 15.9%) l c h)",
			secondaryForeground: "oklch(from hsl(0 0% 98%) l c h)",
			tertiery: "oklch(from hsl(237 22% 20%) l c h)",
			muted: "oklch(from hsl(0 0% 15%) l c h)",
			mutedForeground: "oklch(from hsl(240 5% 64.9%) l c h)",
			accent: "oklch(from hsl(12 6.5% 15.1%) l c h)",
			accentForeground: "oklch(from hsl(0 0% 98%) l c h)",
			destructive: "oklch(from hsl(0 62.8% 30.6%) l c h)",
			destructiveForeground: "oklch(from hsl(0 85.7% 97.3%) l c h)",
			border: "oklch(from hsl(240 3.7% 15.9%) l c h)",
			input: "oklch(from hsl(240 3.7% 15.9%) l c h)",
			ring: "oklch(from hsl(346.8 77.2% 49.8%) l c h)",
			heroShapeBackground: "url('/hero/shape-1.svg')",
			heroShape2: "url('/hero/shape-2-dark.svg')",
			aboutShape: "url('/about/shape-dark.svg')",
			badgeCountup: "oklch(from hsl(346.8 77.2% 49.8%) l c h)",
			dots: "url('/dots-dark.svg')",
			tabsTriggerForeground: "oklch(from hsl(0 0% 100%) l c h)",
			workProjectBackground: "url('/work/project-bg-dark.png')",
			contactIllustrationBackground: "url('/contact/illustration-dark.svg')",
		},
	},
	Zinc: {
		light: {
			background: "oklch(from hsl(0 0% 100%) l c h)",
			foreground: "oklch(from hsl(240 10% 3.9%) l c h)",
			card: "oklch(from hsl(0 0% 100%) l c h)",
			cardForeground: "oklch(from hsl(240 10% 3.9%) l c h)",
			popover: "oklch(from hsl(0 0% 100%) l c h)",
			popoverForeground: "oklch(from hsl(240 10% 3.9%) l c h)",
			primary: "oklch(from hsl(240 5.9% 10%) l c h)",
			primaryForeground: "oklch(from hsl(0 0% 98%) l c h)",
			secondary: "oklch(from hsl(240 4.8% 95.9%) l c h)",
			secondaryForeground: "oklch(from hsl(240 5.9% 10%) l c h)",
			tertiery: "oklch(from hsl(27 82% 98%) l c h)",
			muted: "oklch(from hsl(240 4.8% 95.9%) l c h)",
			mutedForeground: "oklch(from hsl(240 3.8% 46.1%) l c h)",
			accent: "oklch(from hsl(240 4.8% 95.9%) l c h)",
			accentForeground: "oklch(from hsl(240 5.9% 10%) l c h)",
			destructive: "oklch(from hsl(0 84.2% 60.2%) l c h)",
			destructiveForeground: "oklch(from hsl(0 0% 98%) l c h)",
			border: "oklch(from hsl(240 5.9% 90%) l c h)",
			input: "oklch(from hsl(240 5.9% 90%) l c h)",
			ring: "oklch(from hsl(240 5.9% 10%) l c h)",
			headerBackground: "oklch(from hsl(0 0% 94%) l c h)",
			radius: "0.5rem",
			heroBackground: "url('/hero/hero-bg-zinc.png')",
			heroShapeBackground: "url('/hero/shape-1.svg')",
			heroShape2: "url('/hero/shape-2-light.svg')",
			aboutShape: "url('/about/shape-light.svg')",
			badgeCountup: "oklch(from hsl(240 5.9% 10%) l c h)",
			dots: "url('/dots-light.svg')",
			tabsTriggerForeground: "oklch(from hsl(0 0% 100%) l c h)",
			workProjectBackground: "url('/work/project-bg-light.png')",
			contactIllustrationBackground: "url('/contact/illustration-light.svg')",
		},
		dark: {
			background: "oklch(from hsl(240 10% 3.9%) l c h)",
			foreground: "oklch(from hsl(0 0% 98%) l c h)",
			card: "oklch(from hsl(240 10% 3.9%) l c h)",
			cardForeground: "oklch(from hsl(0 0% 98%) l c h)",
			popover: "oklch(from hsl(240 10% 3.9%) l c h)",
			popoverForeground: "oklch(from hsl(0 0% 98%) l c h)",
			primary: "oklch(from hsl(0 0% 98%) l c h)",
			primaryForeground: "oklch(from hsl(240 5.9% 10%) l c h)",
			secondary: "oklch(from hsl(240 3.7% 15.9%) l c h)",
			secondaryForeground: "oklch(from hsl(0 0% 98%) l c h)",
			tertiery: "oklch(from hsl(237 22% 20%) l c h)",
			muted: "oklch(from hsl(240 3.7% 15.9%) l c h)",
			mutedForeground: "oklch(from hsl(240 5% 64.9%) l c h)",
			accent: "oklch(from hsl(240 3.7% 15.9%) l c h)",
			accentForeground: "oklch(from hsl(0 0% 98%) l c h)",
			destructive: "oklch(from hsl(0 62.8% 30.6%) l c h)",
			destructiveForeground: "oklch(from hsl(0 0% 98%) l c h)",
			border: "oklch(from hsl(240 3.7% 15.9%) l c h)",
			input: "oklch(from hsl(240 3.7% 15.9%) l c h)",
			ring: "oklch(from hsl(240 4.9% 83.9%) l c h)",
			heroShapeBackground: "url('/hero/shape-1.svg')",
			heroShape2: "url('/hero/shape-2-dark.svg')",
			aboutShape: "url('/about/shape-dark.svg')",
			badgeCountup: "oklch(from hsl(240 5.9% 10%) l c h)",
			dots: "url('/dots-dark.svg')",
			tabsTriggerForeground: "oklch(from hsl(240 5.9% 10%) l c h)",
			workProjectBackground: "url('/work/project-bg-dark.png')",
			contactIllustrationBackground: "url('/contact/illustration-dark.svg')",
		},
	},
}

export default function setGlobalColorTheme(
	themeMode: "light" | "dark",
	color: ThemeColors
) {
	const theme = themes[color][themeMode] as {
		[key: string]: string
	}

	for (const key in theme) {
		document.documentElement.style.setProperty(`--${key}`, theme[key])
	}
}