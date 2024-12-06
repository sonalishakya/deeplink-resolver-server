import type { Metadata } from "next";
import localFont from "next/font/local";
import { BackgroundContainer } from "./components";
import TemplateRepoDialog from "./components/TemplateRepoDialog";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "ONDC Deep Link Generator",
	description: "Generate Templates and Deep Links",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable}`} style={{ margin: 0}}>
				<BackgroundContainer>{children}</BackgroundContainer>
        <TemplateRepoDialog />
			</body>
		</html>
	);
}
