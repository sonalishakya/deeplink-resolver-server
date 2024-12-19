import { Typography, Box, Fade } from "@mui/material";
import Link from "next/link";
import { CustomButton } from "../components";
import Image from "next/image";

export default function Home() {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				textAlign: "center",  // Center the text as well
				padding: "20px", // Add padding to the overall box for spacing
			}}
			component={"main"}
		>
			{/* Logo with fade-in effect */}
			<Fade in timeout={800}>
				<Box sx={{ width: 250, height: 125, position: "relative", marginBottom: "40px" }}>
					<Image fill={true} src="/ondc_logo.png" alt="logo" />
				</Box>
			</Fade>

			{/* "Deep Link" text with fade-in effect */}
			<Fade in timeout={1000}>
				<Typography
					variant="h1"
					sx={{
						fontWeight: 1000,
						color: "primary.main",
						zIndex: 2,
					}}
				>
					Deep Link
				</Typography>
			</Fade>

			{/* "Generator" text with fade-in effect */}
			<Fade in timeout={1800}>
				<Typography
					variant="h2"
					sx={{
						fontWeight: 1000,
						position: "relative",
						top: "-60px",
						marginBottom: "40px", 
					}}
				>
					Generator
				</Typography>
			</Fade>

			{/* Button */}
			<Link href="/deep-link">
				<CustomButton sx={{ padding: "40px 80px" }}>
					<Typography variant="h3">Create Deeplink</Typography>
				</CustomButton>
			</Link>
		</Box>
	);
}