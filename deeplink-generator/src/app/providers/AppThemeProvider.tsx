"use client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import React, { createContext, useMemo, useState } from "react";
import { darkTheme, lightTheme } from "../assets/themes";

type AppThemeContextType = {
	toggleTheme: () => void;
	mode: "light" | "dark";
};
export const AppThemeContext = createContext<AppThemeContextType>(
	{} as AppThemeContextType
);

export const AppThemeProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [mode, setMode] = useState<"light" | "dark">("light");

	const toggleTheme = () => {
		setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
	};
	const themeContextValue = useMemo(
		() => ({
			toggleTheme,
			mode,
		}),
		[mode]
	);
	return (
		<AppThemeContext.Provider value={themeContextValue}>
			<ThemeProvider theme={mode === "dark" ? darkTheme : lightTheme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</AppThemeContext.Provider>
	);
};
