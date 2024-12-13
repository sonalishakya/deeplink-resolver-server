"use client";

import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Button,
  Typography,
  TextField,
  SelectChangeEvent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

const CreateUseCasePage: React.FC = () => {
  const domains = [
    "(RET10) Grocery",
    "(RET11) Food & Beverages",
    "(RET12) Fashion",
    "(RET13) Beauty & Personal Care",
  ];

  const allFields = ["Product Name", "Provider Details", "Delivery Type"];

  const [selectedDomain, setSelectedDomain] = useState<string>("");
  const [isDropdownFrozen, setIsDropdownFrozen] = useState<boolean>(false);
  const [selectedFields, setSelectedFields] = useState<string[]>([]);
  const [remainingFields, setRemainingFields] = useState<string[]>(allFields);
  const [deliveryType, setDeliveryType] = useState<string>("");
  const [fieldValues, setFieldValues] = useState<{ [key: string]: string }>({});
  const [validationErrors, setValidationErrors] = useState<{ [key: string]: boolean }>({});
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedDomain(event.target.value);
    setIsDropdownFrozen(true);
  };

  const handleFieldSelection = (field: string) => {
    if (!selectedFields.includes(field)) {
      setSelectedFields((prev) => [...prev, field]);
      setRemainingFields((prev) => prev.filter((f) => f !== field));
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFieldValues((prev) => ({ ...prev, [field]: value }));
    setValidationErrors((prev) => ({ ...prev, [field]: false })); // Clear error on input change
  };

  const handleDeliveryTypeChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;
    setDeliveryType(value);
    handleInputChange("Delivery Type", value);
  };

  const handleReviewTemplate = () => {
    const errors: { [key: string]: boolean } = {};

    selectedFields.forEach((field) => {
      if (field === "Provider Details") {
        if (!fieldValues["BPP ID"]?.trim()) errors["BPP ID"] = true;
        if (!fieldValues["Provider ID"]?.trim()) errors["Provider ID"] = true;
      } else if (field === "Delivery Type") {
        if (!deliveryType) errors["Delivery Type"] = true;
      } else if (!fieldValues[field]?.trim()) {
        errors[field] = true;
      }
    });

    setValidationErrors(errors);

    if (Object.keys(errors).length === 0) {
      setOpenDialog(true); // Open the dialog when validation passes
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleEditChange = (field: string, value: string) => {
    setFieldValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    // Save the updated values and close the dialog
    alert("Updated Values: " + JSON.stringify(fieldValues));
    setOpenDialog(false);
  };

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
          CREATE DEEPLINK
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
        {/* Dropdown */}
        <Box sx={{ marginBottom: "20px" }}>
          <Typography
            variant="h6"
            sx={{ marginBottom: 2, textAlign: "left", color: "#178bb5" }}
          >
            Select a Product Type
          </Typography>
          <FormControl fullWidth required>
            <InputLabel
              id="domain-select-label"
              sx={{ color: selectedDomain ? "#000" : "#9e9e9e" }}
            >
              Product Type
            </InputLabel>
            <Select
              labelId="domain-select-label"
              value={selectedDomain}
              onChange={handleChange}
              displayEmpty
              disabled={isDropdownFrozen}
              sx={{
                borderRadius: "8px",
                border: "1px solid #1ca2e0",
                "& .MuiSelect-select": {
                  color: selectedDomain ? "#000" : "#9e9e9e",
                },
              }}
            >
              {domains.map((domain, index) => (
                <MenuItem key={index} value={domain}>
                  {domain}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        {/* Additional Fields */}
        {selectedDomain && remainingFields.length > 0 && (
          <Box sx={{ marginBottom: "20px" }}>
            <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>
              Select Additional Fields:
            </Typography>
            {remainingFields.map((field, index) => (
              <Button
                key={index}
                variant="outlined"
                onClick={() => handleFieldSelection(field)}
                sx={{
                  margin: "5px",
                  borderColor: "#1ca2e0",
                  color: "#1ca2e0",
                  fontWeight: "bold",
                  textTransform: "none",
                  "&:hover": {
                    borderColor: "#178bb5",
                    backgroundColor: "#f0f8ff",
                  },
                }}
              >
                + {field}
              </Button>
            ))}
          </Box>
        )}

        {/* Selected Fields with Input Boxes */}
        {selectedFields.length > 0 && (
          <Box sx={{ marginBottom: "20px" }}>
            {selectedFields.map((field, index) => (
              <Box
                key={index}
                sx={{
                  marginBottom: "10px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {field === "Delivery Type" ? (
                  <FormControl fullWidth>
                    <InputLabel id="delivery-type-label">Select Delivery</InputLabel>
                    <Select
                      labelId="delivery-type-label"
                      value={deliveryType}
                      onChange={handleDeliveryTypeChange}
                      displayEmpty
                      sx={{
                        borderRadius: "8px",
                        border: validationErrors["Delivery Type"] ? "2px solid red" : "",
                      }}
                    >
                      <MenuItem value="Self Pickup">Self Pickup</MenuItem>
                      <MenuItem value="Seller Delivery">Seller Delivery</MenuItem>
                      <MenuItem value="Buyer Delivery">Buyer Delivery</MenuItem>
                    </Select>
                  </FormControl>
                ) : field === "Provider Details" ? (
                  <>
                    <TextField
                      fullWidth
                      variant="outlined"
                      placeholder="BPP ID"
                      value={fieldValues["BPP ID"] || ""}
                      onChange={(e) => handleInputChange("BPP ID", e.target.value)}
                      error={validationErrors["BPP ID"]}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "8px",
                        },
                      }}
                    />
                    <TextField
                      fullWidth
                      variant="outlined"
                      placeholder="Provider ID"
                      value={fieldValues["Provider ID"] || ""}
                      onChange={(e) => handleInputChange("Provider ID", e.target.value)}
                      error={validationErrors["Provider ID"]}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "8px",
                        },
                      }}
                    />
                  </>
                ) : (
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder={field}
                    value={fieldValues[field] || ""}
                    onChange={(e) => handleInputChange(field, e.target.value)}
                    error={validationErrors[field]}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                      },
                    }}
                  />
                )}
              </Box>
            ))}
          </Box>
        )}

         <Box>
           <Button
            variant="contained"
            onClick={handleReviewTemplate}
            disabled={!isDropdownFrozen}
            sx={{
              backgroundColor: isDropdownFrozen ? "#1ca2e0" : "#9e9e9e",
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
            REVIEW TEMPLATE
          </Button>
        </Box>
      </Box>

      {/* Review Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth>
        <DialogTitle>Review Template</DialogTitle>
        <DialogContent>
          {selectedFields.map((field, index) => (
            <Box key={index} sx={{ marginBottom: 2 }}>
              {field === "Provider Details" ? (
                <>
                  <Typography>BPP ID:</Typography>
                  <TextField
                    fullWidth
                    value={fieldValues["BPP ID"]}
                    onChange={(e) => handleEditChange("BPP ID", e.target.value)}
                  />
                  <Typography>Provider ID:</Typography>
                  <TextField
                    fullWidth
                    value={fieldValues["Provider ID"]}
                    onChange={(e) => handleEditChange("Provider ID", e.target.value)}
                  />
                </>
              ) : (
                <>
                  <Typography>{field}:</Typography>
                  <TextField
                    fullWidth
                    value={fieldValues[field]}
                    onChange={(e) => handleEditChange(field, e.target.value)}
                  />
                </>
              )}
            </Box>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}
          sx={{
            backgroundColor: "white",
            color: "#1ca2e0",
            fontWeight: "bold",
            fontStyle: "italic",
            padding: "5px 20px",
            fontSize: "1.2rem",
            borderRadius: "5px",
            "&:hover": {
              backgroundColor: "#1ca2e0",
              color: "white"
            },
          }}
          >Cancel</Button>
          <Button onClick={handleSave} color="primary" variant="contained"
          sx={{
            backgroundColor: "#1ca2e0",
            color: "white",
            fontWeight: "bold",
            fontStyle: "italic",
            padding: "5px 20px",
            fontSize: "1.2rem",
            borderRadius: "5px",
            "&:hover": {
              backgroundColor: "#178bb5",
            },
            }}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default CreateUseCasePage;