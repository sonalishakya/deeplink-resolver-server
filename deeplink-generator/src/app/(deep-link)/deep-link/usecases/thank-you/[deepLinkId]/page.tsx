import {
	CustomContainedButtom,
	DeepLinkCopyBox,
	DownloadQr,
	SocialsList,
} from "@/app/components";
import { Paper, Typography, Grid2 as Grid, Box } from "@mui/material";
import Link from "next/link";
import React from "react";

const DeepLinkThankYouPage = async ({
	params,
}: {
	params: Promise<{ deepLinkId: string }>;
}) => {
	const deepLinkId = (await params).deepLinkId;
	return (
		<Paper
			sx={{
				p: 2,
				borderColor: "primary.light",
				borderWidth: 2,
				borderStyle: "solid",
				borderRadius: 2,
				my: 4,
				height: "100%",
			}}
		>
			<Typography variant="h4" color="primary" my={3}>
				Thank You for using ONDC, Here&apos;s your Deep Link!
			</Typography>
			<DeepLinkCopyBox deepLink={`beckn://github.ondc.ret10/${deepLinkId}`} />
			<Grid container spacing={2}>
				<Grid size={{ xs: 12 }}>
					<Box sx={{ display: "flex", justifyContent: "center", py:2 }}>	
						<Link href="/">
							<CustomContainedButtom>Back To Home </CustomContainedButtom>
						</Link>
					</Box>
				</Grid>
				<Grid size={{ xs: 12, md: 3 }}>
					<DownloadQr link={`beckn://github.ondc.ret10/${deepLinkId}`}/>
				</Grid>
				<Grid size={{ xs: 12, md: 8 }}>
					<SocialsList />
				</Grid>
			</Grid>
		</Paper>
	);
};

export default DeepLinkThankYouPage;
