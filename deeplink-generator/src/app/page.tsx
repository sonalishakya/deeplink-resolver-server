import { Typography, Box, Button } from "@mui/material";
import Link from "next/link";
// import Image from "next/image";


export default function Home() {
	return (
		<Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        // padding: "20px",
        textAlign: "center",
      }}
    >
      {/* Logo */}
      <Box
        sx={{
          marginBottom: "20px",
        }}
      >
        <img src='./logo.jpg' alt="ONDC" style={{ width: "200px" }} />
      </Box>

      {/* Title */}
      <Box sx={{ marginBottom: "50px" }}>
        <Typography
          variant="h1"
          sx={{
			fontWeight: 900, 
            fontStyle: "italic",
            color: "#1ca2e0",
            fontSize: "7.3rem",
            textTransform: "uppercase",
			marginBottom: "-35px",
			position: "relative",
			zIndex: 2,
			textShadow: "1px 1px 0 #1ca2e0, -1px -1px 0 #0d7cc1",
          }}
        >
          DEEP LINK
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontWeight: "bold",
			fontStyle: "italic",
            fontSize: "7.3rem",
            textTransform: "uppercase",
            WebkitTextStroke: "1px #0d7cc1", // Outline color
            color: "white", // Fill color
            display: "inline-block",
			position: "relative",
      		top: "-25px",
			textShadow: "1px 1px 0 #1ca2e0, -1px -1px 0 #0d7cc1",
          }}
        >
          GENERATOR
        </Typography>
      </Box>

      {/* Main Buttons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <Button
          variant="contained"
          href="/deep-link/searchByItem"
          sx={{
            backgroundColor: "#1ca2e0",
            color: "white",
            fontWeight: "bold",
            fontStyle: "italic",
            fontSize: "2rem", // Increased size
            padding: "40px 80px", // Increased padding
            textTransform: "uppercase",
			      borderRadius: "50px",
			      border: "2px solid #0d7cc1",
            "&:hover": {
              backgroundColor: "#178bb5",
			        borderColor: "#0d7cc1"
            },
          }}
        >
          CREATE DEEPLINK
        </Button>

        {/* <Button
          variant="contained"
		  href="/template/usecase-1"
          sx={{
            backgroundColor: "#1ca2e0",
            color: "white",
            fontWeight: "bold",
            fontStyle: "italic",
            fontSize: "2rem", // Increased size
            padding: "60px 80px", // Increased padding
            textTransform: "uppercase",
			borderRadius: "50px",
			border: "2px solid #0d7cc1",
            "&:hover": {
              backgroundColor: "#178bb5",
			  borderColor: "#0d7cc1"
            },
          }}
        >
          CREATE USECASE
        </Button> */}
      </Box>

      {/* Small Button - How to Use */}
      {/* <Button
        variant="text"
        sx={{
          color: "#1ca2e0",
          fontWeight: "bold",
          fontStyle: "italic",
          fontSize: "1rem",
          textTransform: "none",
          display: "flex",
          alignItems: "center",
          gap: "8px",
		  top: "10px"
        }}
      >
        <span>How to use</span>
      </Button> */}
    </Box>
	);
}
