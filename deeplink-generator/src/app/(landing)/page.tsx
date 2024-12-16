import { Typography, Box, Grid2 as Grid, Fade } from "@mui/material";
import Link from "next/link";
import { CustomButton } from "../components";
// import Image from "next/image";

export default function Home() {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}
			component={"main"}
		>
			<Fade in timeout={1000}>
				<Typography
					variant="h1"
					sx={{
						color: "primary.main",
						marginBottom: -5,
						zIndex: 2,
					}}
				>
					Deep Link
				</Typography>
			</Fade>
			<Fade in timeout={1800}>
				<Typography
					variant="h2"
					sx={{
						position: "relative",
						top: "-25px",
					}}
				>
					Generator
				</Typography>
			</Fade>
			<Grid container spacing={2} justifyContent="center" alignItems="center">
				<Grid size={{xs: 12, md: 5}}>
					<Link href="/template/1">
						<CustomButton sx={{ padding: "40px 80px" }}>
							<Typography variant="h3">Create Usecase</Typography>
						</CustomButton>
					</Link>
				</Grid>
				<Grid size={{xs: 12, md: 5}}>
					<Link href="/deep-link">
						<CustomButton sx={{ padding: "40px 80px" }}>
							<Typography variant="h3">Create Deeplink</Typography>
						</CustomButton>
					</Link>
				</Grid>
			</Grid>
		</Box>
	);
}
