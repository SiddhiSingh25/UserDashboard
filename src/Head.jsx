import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import {
    CardContent,
    Typography,
  } from "@mui/material";
const Head = () => {
  return (
    <CardContent
    sx={{
      width: "100%",
      height: "13px",
      backgroundColor: "#2c2c2c",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottom: "0.0001rem solid #6b7280"
    }}
  >
    <CloseIcon sx={{ color: "#fff", pr: 1 }} />
    <Typography color="#fff" paddingLeft={1}>Playground Component</Typography>
  </CardContent>
  )
}

export default Head