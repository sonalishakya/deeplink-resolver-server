import { Paper, SxProps, Typography } from "@mui/material";
import React from "react";
type FieldNameProps = {
	fieldName: string;
	paperSx?: SxProps;
	paperProps?: React.ComponentProps<typeof Typography>;
	typographySx?: SxProps;
	typographyProps?: React.ComponentProps<typeof Typography>;
};

export const FieldName = ({
	fieldName,
	paperSx,
	typographySx,
}: FieldNameProps) => {
	return (
		<Paper
			sx={{
				p: 2,
				borderColor: "primary.light",
				borderWidth: 2,
				borderStyle: "solid",
				borderRadius: 2,
				...paperSx,
			}}
		>
			<Typography color="primary.light" sx={{ ...typographySx }}>
				{fieldName}
			</Typography>
		</Paper>
	);
};
