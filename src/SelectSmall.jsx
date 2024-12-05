import React, { useState, useEffect } from "react";
import {
  FormControl,
  MenuItem,
  Select,
  Typography,
  Box,
} from "@mui/material";

export default function SelectSmall(props) {
  const [typography, setTypography] = useState("");
  const data = props.options || [];

  useEffect(() => {
    if (data.length > 0 && !typography) {
      setTypography(data[0]);
      if (props.onChange) props.onChange(data[0]);
    }
  }, [data, typography, props.onChange]);

  const handleChange = (e) => {
    const value = e.target.value;
    setTypography(value);
    if (props.onChange) {
      props.onChange(value);
    }
  };

  return (
    <FormControl fullWidth sx={{ marginBottom: 2 }}>
      <Box display="flex" width="100%" alignItems="center" justifyContent="space-between">
        <Typography
          variant="body2"
          sx={{
            color: "#B0B0B0",
            fontSize: "2vh",
          }}
        >
          {props.about}
        </Typography>

        <Select
          value={typography}
          onChange={handleChange}
          sx={{
            color: "#FFFFFF",
            backgroundColor: "#3A3A3A",
            height: 33,
            fontSize: "2vh",
            borderRadius: "4px",
            "& .MuiSelect-icon": {
              color: "#FFFFFF",
              marginLeft: "8px",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#B0B0B0",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#FFFFFF",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#E0E0E0",
            },
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                backgroundColor: "#3A3A3A",
                "& .MuiMenuItem-root": {
                  color: "#FFFFFF",
                  fontSize: "2vh",
                  "&:hover": {
                    backgroundColor: "#4A4A4A",
                  },
                  "&.Mui-selected": {
                    backgroundColor: "#5A5A5A",
                    color: "#FFFFFF",
                    "&:hover": {
                      backgroundColor: "#6A6A6A",
                    },
                  },
                },
              },
            },
          }}
        >
          {data.map((option, index) => (
            <MenuItem key={index} value={option} sx={{ fontSize: "2vh" }}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </Box>
    </FormControl>
  );
}
