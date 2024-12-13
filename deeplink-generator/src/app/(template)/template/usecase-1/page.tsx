"use client";

import React, { useState } from "react";
import { Box, Typography, TextField, MenuItem, Button } from "@mui/material";

const CreateUseCasePage: React.FC = () => {
  const [action, setAction] = useState<string>("");
  const [domain, setDomain] = useState<string>("");

  const handleGetTemplate = () => {
    alert(`Action: ${action}, Domain: ${domain}`);
  };

  const actions = ["SEARCH", "ON_SEARCH", "SELECT", "ON_SELECT"];
  const domains = ["RET10", "TRV11"];

  return (
    <Box sx={{ padding: "20px", maxWidth: "100%", boxSizing: "border-box" }}>
      {/* Title Bar */}
      <Box
        sx={{
          backgroundColor: "#1ca2e0",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          marginBottom: "20px",
          marginLeft: "10px",
          marginRight: "10px",
          textAlign: "left",
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontSize: "1.8rem", fontStyle: "italic", fontWeight: "bold" }}
        >
          CREATE USECASE
        </Typography>
      </Box>

      {/* Outlined Box */}
      <Box
        sx={{
          border: "1px solid #1ca2e0",
          borderRadius: "10px",
          padding: "20px",
          margin: "0 10px",
        }}
      >
        {/* Input Fields */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          {/* Action Input */}
          <TextField
            select
            value={action}
            onChange={(e) => setAction(e.target.value)}
            variant="outlined"
            sx={{
              flex: 1,
              minWidth: "200px",
              "& .MuiInputBase-root": {
                height: "56px",
                fontSize: "1rem",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#1ca2e0", 
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#1ca2e0", 
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#1ca2e0", 
              },
              "&:hover": {
			  borderColor: "#0d7cc1"
            },
            }}
            SelectProps={{
              MenuProps: { PaperProps: { sx: { maxHeight: 200 } } },
              displayEmpty: true,
            }}
          >
        {!action && (
            <MenuItem disabled value="">
            ACTION
            </MenuItem>
        )}
        {actions.map((action) => (
            <MenuItem key={action} value={action}>
            {action}
            </MenuItem>
        ))}
        </TextField>

          {/* Domain Input */}
          <TextField
            select
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            variant="outlined"
            sx={{
              flex: 1,
              minWidth: "200px",
              "& .MuiInputBase-root": {
                height: "56px",
                fontSize: "1rem",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#1ca2e0",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#1ca2e0",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#1ca2e0", 
              },
              "&:hover": {
			  borderColor: "#0d7cc1"
            },
            }}  
            SelectProps={{
              MenuProps: { PaperProps: { sx: { maxHeight: 200 } } },
              displayEmpty: true,
            }}
          >
            {!domain && (
                <MenuItem disabled value="">
                DOMAIN
                </MenuItem>
            )}
                {domains.map((domain) => (
                <MenuItem key={domain} value={domain}>
                {domain}
            </MenuItem>
            ))}
          </TextField>
        </Box>

        {/* Button */}
        <Box>
          <Button
            variant="contained"
            onClick={handleGetTemplate}
            sx={{
              backgroundColor: "#1ca2e0",
              color: "white",
              fontWeight: "bold",
              fontStyle: "italic",
              padding: "10px 20px",
              fontSize: "1.2rem",
              borderRadius: "5px",
              "&:hover": {
                backgroundColor: "#178bb5",
              },
            }}
          >
            GET TEMPLATE
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateUseCasePage;