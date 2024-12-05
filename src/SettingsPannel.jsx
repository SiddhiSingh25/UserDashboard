import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import SelectSmall from './SelectSmall'; // Import SelectSmall component
import SwitchComponent from './SwitchComponent'; // Import SwitchComponent

function SettingsPanel({onTypeChange, onClickChangeLine, onClickChangeButton}) {


  //handle default & response
  const [selectedType, setSelectedType] = useState(""); 
  const handleTypeChange = (newType) => {
    setSelectedType(newType);
    if (onTypeChange) {
      onTypeChange(newType); 
    }
  };


  //handle display line and button
  const [clickedLine, setClickedLine] = useState(""); 
  const [clickedButton, setClickedButton] = useState("");
  const handleClickEventLine=(value)=>{
    setClickedLine(value);
    if(onClickChangeLine){
        onClickChangeLine(value)
    }
  }

  const handleClickEventButton=(value)=>{
    setClickedButton(value);
    if(onClickChangeButton){
        onClickChangeButton(value)
    }
  }


  return (
    <Box sx={{ color: "#bababa", borderRadius: "8px", maxWidth: 360, marginTop: 1 }}>
      {/* Pass handleTypeChange to SelectSmall as the onChange handler */}
      <SelectSmall about="Type" options={["Default", "Response"]} onChange={handleTypeChange} />
      
      {/* Conditional rendering based on selectedType */}
      {selectedType === "Default" ? (
        <>
          <SwitchComponent title="Show Line" onClicked={handleClickEventLine} />
          <SwitchComponent title="Show Button" onClicked={handleClickEventButton} />
        </>
      ) : (
        <SwitchComponent title="Show Line" onClicked={handleClickEventLine}/>
      )}

      <Typography variant="body2" color='#fff' fontSize="2.6vh" gutterBottom>
        Variable Modes
      </Typography>

      {/* Additional SelectSmall components for other settings */}
      <SelectSmall about="Token Color - Blue" options={["Light", "Dark"]} />
      <SelectSmall about="Token Color - Blue" options={["Light", "Dark"]} />
      <SelectSmall about="Typography" options={["Default", "Response"]} />
      <SelectSmall about="Typography" options={["Default", "Response"]} />
    </Box>
  );
}

export default SettingsPanel;
