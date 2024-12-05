import React, { useState } from 'react'
import {
  CardContent,
} from "@mui/material";
import SettingsPanel from "./SettingsPannel";
import InfoAlert from './InfoAlert';
const InfoControl = ({ onTypeChangeApp, onClickChangeLine, onClickChangeButton }) => {

  // Handler function to update the selected option 
  const [selectedType, setSelectedType] = useState("");
  const handleTypeChange = (newType) => {
    setSelectedType(newType);
    if (onTypeChangeApp) {
      onTypeChangeApp(newType);
    }
  };

  //Handle Line & Button
  const [clickedLine, setClickedLine] = useState(""); // Local state to manage selected type in SettingsPanel
  const [clickedButton, setClickedButton] = useState("");
  const handleClickChangeLine = (newType) => {
    setClickedLine(newType);
    if (onClickChangeLine) {
      onClickChangeLine(newType);
    }
  };
  const handleClickChangeButton = (newType) => {
    setClickedButton(newType);
    if (onClickChangeButton) {
      onClickChangeButton(newType);
    }
  };
  return (
    <CardContent sx={{
      width: { md: "30%", xs: 0 },
      height: "100%",
      backgroundColor: "#2c2c2c",
      direction: "ltr",
      display: { md: "block", xs: "none" },
    }}>
      <InfoAlert />
      <SettingsPanel onTypeChange={handleTypeChange} onClickChangeLine={handleClickChangeLine} onClickChangeButton={handleClickChangeButton} />
    </CardContent >
  )
}

export default InfoControl

