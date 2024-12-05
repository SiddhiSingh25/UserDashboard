import React, { useState } from 'react';
import { FormControlLabel, Switch } from '@mui/material';

const SwitchComponent = ({ title, onClicked }) => {
    const [showLine, setShowLine] = useState(true); // Initialize state

    const handleSwitch = (e) => {
        const newState = e.target.checked;
        setShowLine(newState);
        if (onClicked) {
            onClicked(newState)
        }
    }
    return (
        <>
            <FormControlLabel
                control={
                    <Switch
                        checked={showLine}
                        onChange={(e) => handleSwitch(e)}
                        sx={{
                            '& .MuiSwitch-switchBase': {
                                color: '#fff',
                                '&.Mui-checked': {
                                    color: '#fff',
                                },
                            },
                            '& .MuiSwitch-track': {
                                backgroundColor: '#119e54 !important',
                                '&.Mui-checked': {
                                    backgroundColor: '#fff !important',
                                },
                            },
                            '& .MuiSwitch-thumb': {
                                backgroundColor: '#fff',
                                '&.Mui-checked': {
                                    backgroundColor: '#fff',
                                },
                            },
                        }}
                    />
                }
                label={`${title}`}
                labelPlacement="start"
                sx={{
                    color: "#9B9B9B",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    margin: 0,
                    fontSize: "2vh",
                }}
            />
        </>
    );
};

export default SwitchComponent;
