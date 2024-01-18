import React, { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import {
    Button,
    Dialog,
    OutlinedInput,
    InputAdornment,
    DialogContent,
    InputLabel,
    MenuItem, FormControl, Select, DialogTitle, IconButton, Stack, TextField
} from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Modal = () => {
    const [open, openChange] = useState(false);
    const [category, setCategory] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    const openPopup = () => {
        openChange(true);
    }
    const closePopup = () => {
        openChange(false);
    }
    return (
        <div style={{ textAlign: "right", margin: "20px" }}>
            <Button onClick={openPopup} color="primary" variant="contained">Add</Button>
            <Dialog open={open} onClose={closePopup} fullWidth maxWidth="sm">
                <DialogTitle>Add New Account <IconButton onClick={closePopup} style={{ float: "right" }}><CloseIcon color="primary"></CloseIcon></IconButton></DialogTitle>
                <DialogContent>
                    <Stack spacing={2} margin={2}>
                        <TextField required variant="outlined" label="Provider" />
                        <TextField required variant="outlined" label="Email" />
                        <FormControl sx={{ m: 1 }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                required
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                            <InputLabel id="demo-select-small-label">Age</InputLabel>
                            <Select
                                required
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                value={category}
                                label="Age"
                                onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={"work"}>work</MenuItem>
                                <MenuItem value={"family"}>family</MenuItem>
                                <MenuItem value={"personal"}>personal</MenuItem>
                            </Select>
                        </FormControl>
                        <Button color="primary" variant="contained">Submit</Button>
                    </Stack>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Modal;