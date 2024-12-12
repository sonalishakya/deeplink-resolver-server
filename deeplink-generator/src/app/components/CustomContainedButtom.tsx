import { ButtonBase, ButtonBaseProps, Paper, Typography } from "@mui/material";
import React from "react";

export const CustomContainedButtom: React.FC<ButtonBaseProps> = (props) => {
	return (
		<ButtonBase {...props}>
			<Paper
				elevation={2}
				sx={{
					px: 2,
					py: 1,
					bgcolor: "primary.light",
					color: "white",
					transition: "all 0.2s ease-in-out",
					"&:hover": {
						bgcolor: "primary.dark",
						elevation: 4,
					},
				}}
			>
				<Typography variant="h4">{props.children}</Typography>
			</Paper>
		</ButtonBase>
	);
};
