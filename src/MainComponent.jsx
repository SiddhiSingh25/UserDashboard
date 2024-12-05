import React, { useState } from "react"; // Import useState
import {
    Avatar,
    Box,
    CardContent,
    Typography,
} from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';


const MainComponent = ({ value, clickValueLine, clickValueButton, details }) => {
    let [likeCount, setLikeCount] = useState(0);
    //Handle like count
    React.useEffect(() => {
        if (value === "Response") {
            setLikeCount((prevCount) => prevCount + 1);
        }
    }, [value]);

    return (<>
        <CardContent sx={{ width: { xs: "100%", md: "74%" }, height: { md: "90%", xs: "100%" }, display: "flex", justifyContent: "center", flexDirection: "column" }}>
            {/* Header Section */}


            <Box display="flex" alignItems="center" justifyContent="space-between" mb={{ md: 2, xs: 4 }}>

                <Box display="flex" alignItems="center" >
                    <Avatar
                        alt="User Avatar"
                        src={`${details.imageUrl}`}
                        sx={{ width: { md: 45, xs: 80 }, height: { md: 45, xs: 80 }, ml: 2 }}
                    />
                    <Box display="flex" alignItems="center" gap={2}>
                        <Typography variant="body1" fontWeight="bold" fontSize={{ md: "3vh", xs: "2.6vh" }}>
                            {details.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" fontSize={{ md: "2.2vh", xs: "2vh" }}>
                            {details.title}
                        </Typography>
                    </Box>
                </Box>


                <Box pl={{ md: 3, xs: 0 }} display="flex" gap={{ md: "5vh", xs: "2vh" }}>
                    <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
                        <Typography color="#222" fontSize={{ md: "2vh", xs: "2vh" }} fontWeight={500}>{likeCount}</Typography>
                        {value === "Response" ? (<FavoriteIcon sx={{ color: "red", fontWeight: "300" }} ></FavoriteIcon>) : <FavoriteBorderIcon sx={{ color: "#9ca3af", fontWeight: "300" }} ></FavoriteBorderIcon>}


                    </Box>
                    <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
                        <Typography color="#1d4ed8">{details.title}</Typography>
                        <CommentIcon sx={{ color: "#1d4ed8", fontWeight: "300" }}></CommentIcon>
                    </Box>
                </Box>
            </Box>

            {value === "Response" ? (<>
                <Box mb={2}>
                    <Box display="flex" alignItems="center" gap={2} mb={2}>
                        <AttachFileIcon sx={{ color: "#4f77eb", rotate: "35deg" }} ></AttachFileIcon>
                        <Typography color="#4f77eb" fontWeight={600} fontSize="2.5vh"> {details.linkText}</Typography>
                    </Box>
                    <Box>
                        <Typography color="#6b7280" fontWeight={200} fontSize="2.5vh">{details.shortDesc}</Typography>
                    </Box>
                </Box>
                {!clickValueLine ? "" : (<Box width="100%" borderBottom={"0.0001rem dotted #D5D5D5"} mb={1} mt={1}></Box>)}
            </>) : ""}





            {/* Main Content */}
            <Typography variant="body1" color="#6b7280" fontWeight={200} fontSize="2.5vh" width={{ md: "85%", xs: "100%" }} >
                {details.description}
            </Typography>


            {clickValueButton && (
                <Box mt={{ md: 2, xs: 4 }} p={2} display="flex" gap={1} alignItems="center">
                    <Typography color="#1d4ed8" fontWeight={500} fontSize={{ md: "2.2vh", xs: "2vh" }}>۲ هفته قبل</Typography>
                    <ExpandLessIcon sx={{ color: "#1d4ed8" }}></ExpandLessIcon>
                </Box>
            )}


            {clickValueLine && <Box width="100%" borderBottom={"0.0001rem solid #e2e1e1"} mb={1} mt={1}></Box>}

        </CardContent>

    </>
    )
}

export default MainComponent