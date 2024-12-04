import { Typography, Box, Button } from "@mui/material";
import Link from "next/link";
// import Image from "next/image";

export default function Home() {
	return (
		<Box>
			<Typography variant="h1">ONDC Deep Link Generator</Typography>
      <Link href="/template/select-base">
			<Button variant="contained" sx={{ m: 1 }}>
				Create Template
			</Button>
      </Link>
      <Link href="/deep-link">
			<Button variant="contained" sx={{ m: 1 }}>
				Generate Deep Link
			</Button>
      </Link>
		</Box>
	);
}
