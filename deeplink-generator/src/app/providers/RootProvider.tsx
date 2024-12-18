"use client";
import React from "react";
import { AppThemeProvider } from "./AppThemeProvider";

type RootProviderProps = {
	children: React.ReactNode;
};

export const RootProvider = ({ children }: RootProviderProps) => {
	return <AppThemeProvider>{children}</AppThemeProvider>;
};
