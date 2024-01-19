import React, { useEffect, useState } from "react";

import toast, { Toaster } from "react-hot-toast";

import CloseIcon from "@mui/icons-material/Close";
import {
  Button,
  Dialog,
  OutlinedInput,
  InputAdornment,
  DialogContent,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  DialogTitle,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { callAPIJSON } from "../../domain/api";

const Modal = () => {
  const [data, setData] = useState({
    id: "",
    provider: "",
    email: "",
    password: "",
    category: "",
  });

  const [open, openChange] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const openPopup = () => {
    openChange(true);
  };
  const closePopup = () => {
    openChange(false);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setData({ ...data, [e.target.name]: value });
  };

  const addData = async () => {
    try {
      const datas = {
        provider: data.provider,
        email: data.email,
        password: data.password,
        category: data.category,
      };
      await callAPIJSON("/password", "POST", datas);
      setData({
        id: "",
        provider: "",
        email: "",
        password: "",
        category: "",
      });
      toast.success("Data berhasil dibuat");
      window.location.reload();
      closePopup();
    } catch (error) {
      console.error("Error adding to favorites:", error);
      alert("Failed to add to Favorites!");
    }
  };

  return (
    <div style={{ textAlign: "right", margin: "20px" }}>
      <Button onClick={openPopup} color="primary" variant="contained">
        Add
      </Button>
      <Dialog open={open} onClose={closePopup} fullWidth maxWidth="sm">
        <DialogTitle>
          Add New Account{" "}
          <IconButton onClick={closePopup} style={{ float: "right" }}>
            <CloseIcon color="primary"></CloseIcon>
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Stack spacing={2} margin={2}>
            <TextField
              onChange={handleInputChange}
              required
              name="provider"
              variant="outlined"
              label="Provider"
            />
            <TextField
              required
              name="email"
              variant="outlined"
              label="Email"
              onChange={handleInputChange}
            />
            <FormControl sx={{ m: 1 }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                required
                name="password"
                onChange={handleInputChange}
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
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
              <InputLabel id="demo-select-small-label">Category</InputLabel>
              <Select
                required
                name="category"
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={data.category}
                label="Category"
                onChange={handleInputChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"work"}>work</MenuItem>
                <MenuItem value={"family"}>family</MenuItem>
                <MenuItem value={"personal"}>personal</MenuItem>
              </Select>
            </FormControl>
            <Button onClick={addData} color="primary" variant="contained">
              Submit
            </Button>
          </Stack>
        </DialogContent>
      </Dialog>
      <Toaster/>
    </div>
  );
};

export default Modal;
