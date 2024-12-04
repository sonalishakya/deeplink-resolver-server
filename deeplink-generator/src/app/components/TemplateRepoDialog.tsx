import {
	Box,
	Button,
	Dialog,
	DialogContent,
	DialogTitle,
	List,
	ListItem,
	ListItemText,
	Paper,
	TextField,
} from "@mui/material";
import React from "react";

const TemplateRepoDialog = () => {
	return (
		<Dialog open={false} maxWidth="xs" fullWidth>
			<DialogTitle>Current Templates</DialogTitle>
			<DialogContent>
				<TextField fullWidth title="Search Templates" />
				<Paper sx={{ background: "none", p: 1, height: "200px" }} elevation={2}>
					<List>
						<ListItem>
							<ListItemText>Hello</ListItemText>
							<Box sx={{display:"flex"}}>
                <Button variant="contained" sx={{mx:1, textTransform: "none"}}>View</Button>
							</Box>
						</ListItem>
					</List>
				</Paper>
			</DialogContent>
		</Dialog>
	);
};

export default TemplateRepoDialog;
