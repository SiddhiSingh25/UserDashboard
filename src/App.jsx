

import React, { useState } from "react"; // Import useState
import {
  Box,
  Card,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import Head from "./Head";
import InfoControl from "./InfoControl";
import MainComponent from "./MainComponent";

const details = {
  name: "کتا  پارسی",
  title: "بهتسی",
  description: "این مجموعه شامل بهترین کتاب‌های فارسی است که فرهنگ غنی شامل بهترین کتاب‌های فارسی است که فرهنگ غنی ایران را منعکس م ایران را ین کتاب‌های فارسی است که فرهنگ غنی ایران را منع منعکس می‌کنند.",
  linkText: "ثبت نام کنید",
  shortDesc: "سفر به سرزمین زیب شامل بهترین کتاب‌های فارسی است که فرهنگ غنی ایران را منعکس مایی‌ها",
  imageUrl: "https://th.bing.com/th/id/OIP.CgazC3FtdMr9MQOcZ5KfCgHaNK?rs=1&pid=ImgDetMain",
};



const theme = createTheme({
  direction: "rtl", // Enables Right-to-Left layout
  typography: {
    fontFamily: "'IRANSansX', 'Yekan Bakh', Arial, sans-serif",
  },
});

function App() {
  //for default and response button
  let [selectedType, setSelectedType] = useState("")
  const handleTypeChange = (newType) => {
    setSelectedType(newType)
  }



  //for showline & button ac to select opt

  const [clickedLine, setClickedLine] = useState(true);
  const [clickedButton, setClickedButton] = useState(true);

  const handleClickChangeLine = (newType) => {
    setClickedLine(newType);
  };

  const handleClickChangeButton = (newType) => {
    setClickedButton(newType);
  };


  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          direction: "rtl",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Card
          sx={{
            width: { md: "73vw", xs: "100vw" },
            height: { md: "80vh", xs: "90vh" },
            borderRadius: "12px",
            boxShadow: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "column"
          }}
        >
          <Head />
          <Card sx={{
            width: "100%",
            height: "99%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}>
            <InfoControl onTypeChangeApp={handleTypeChange} onClickChangeLine={handleClickChangeLine} onClickChangeButton={handleClickChangeButton} />
            <MainComponent value={selectedType} clickValueLine={clickedLine} clickValueButton={clickedButton} details={details} />
          </Card>
        </Card>
      </Box>
    </ThemeProvider>
  );
}

export default App;
