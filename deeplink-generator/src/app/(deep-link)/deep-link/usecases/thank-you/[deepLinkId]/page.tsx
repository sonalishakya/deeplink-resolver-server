import { DeepLinkCopyBox, SocialsList } from "@/app/components";
import { Paper, Typography } from "@mui/material";
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
			<SocialsList />
		</Paper>
	);
};

export default DeepLinkThankYouPage;
