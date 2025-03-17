"use client"
import setGlobalColorTheme from "@/lib/theme-colors"
import { useTheme } from "next-themes"
import React, { createContext, useContext, useEffect, useState } from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>
const ThemeContext = createContext<ThemeColorStateParams>(
	{} as ThemeColorStateParams
)

export default function ThemeDataProvider({ children }: ThemeProviderProps) {
	const getSavedThemeColor = () => {
		try {
			return (localStorage.getItem("themeColor") as ThemeColors) || "Zinc"
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		} catch (error) {
			return "Zinc" as ThemeColors
		}
	}

	const [themeColor, setThemeColor] = useState<ThemeColors>(
		getSavedThemeColor() as ThemeColors
	)
	const [isMounted, setIsMounted] = useState(false)
	const { theme } = useTheme()

	useEffect(() => {
		localStorage.setItem("themeColor", themeColor)
		setGlobalColorTheme(theme as "light" | "dark", themeColor)

		if (!isMounted) {
			setIsMounted(true)
		}
	}, [themeColor, theme])

	if (!isMounted) {
		return null
	}

	return (
		<ThemeContext.Provider value={{ themeColor, setThemeColor }}>
			{children}
		</ThemeContext.Provider>
	)
}

export function useThemeContext() {
	return useContext(ThemeContext)
}
