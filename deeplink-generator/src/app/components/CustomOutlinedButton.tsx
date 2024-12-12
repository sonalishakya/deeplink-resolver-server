import { ButtonBase, Paper, Typography } from "@mui/material";
import React from "react";
type CustomOutlinedButtonProps = {
	label: string;
	href: string;
};
export const CustomOutlinedButton = ({
	label,
	href,
}: CustomOutlinedButtonProps) => {
	return (
		<ButtonBase href={href}>
			<Paper
				elevation={3}
				sx={{
					p: 2,
					borderColor: "primary.light",
					borderWidth: 2,
					borderStyle: "solid",
					borderRadius: 2,
				}}
			>
				<Typography variant="h6">{label}</Typography>
			</Paper>
		</ButtonBase>
	);
};
