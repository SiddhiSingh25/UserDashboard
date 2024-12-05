import React, { useState } from 'react'
import {
  Box,
  Typography,
} from "@mui/material";
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import { Alert, AlertTitle, IconButton } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const InfoAlert = () => {

  const [open, setOpen] = useState(true);
  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="space-between" width="100%" mt={1}>
        <Typography color="#fff" fontWeight="500" fontSize="2vh">Message Blog</Typography>
        <ReplayIcon sx={{ color: "#fff", fontSize: "2.8vh" }} />
      </Box>
      {open && (
        <Alert
          severity="info"
          sx={{ backgroundColor: '#476656', color: '#fff', borderRadius: '8px', marginTop: 1 }}
          icon={<InfoOutlinedIcon sx={{ color: '#fff', font: "bold" }} />}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => setOpen(false)}
              sx={{ color: "#fff" }}
            >
              <CloseIcon fontSize="inherit" sx={{ color: '#fff' }} />
            </IconButton>
          }
        >
          <AlertTitle sx={{ fontWeight: "600", color: "#fff", fontSize: "2.1vh" }} >Feel free to experiment!</AlertTitle>
          <Typography lineHeight={1.25} fontSize="2VH">You're viewing this in a playground-
            changes mode not defend the actual view.</Typography>
        </Alert>
      )
      }
    </>
  )
}

export default InfoAlert