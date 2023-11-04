import { Google } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  FormControl,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <Box component="form" noValidate autoComplete="off">
      <Typography variant="h3" color={"primary"}>
        Sign Up
      </Typography>
      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="firstName">First Name</InputLabel>
        <OutlinedInput id="firstName" placeholder="John" label="FirstName" />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="lastName">Last Name</InputLabel>
        <OutlinedInput id="lastName" placeholder="Doe" label="Last Name" />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="email">Email</InputLabel>
        <OutlinedInput
          id="email"
          type="email"
          placeholder="johndoe@gmail.com"
          label="Email"
          fullWidth
        />
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="phone">Phone</InputLabel>
        <OutlinedInput
          id="phone"
          placeholder="6719299392"
          label="Phone"
          fullWidth
        />
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="password">Password</InputLabel>
        <OutlinedInput
          id="password"
          type="password"
          placeholder="6719299392"
          label="Password"
        />
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="passwordagain">Repeat password</InputLabel>
        <OutlinedInput
          id="passwordagain"
          type="password"
          placeholder="6719299392"
          label="Repeat password"
        />
      </FormControl>
      <Stack direction={"column"} justifyContent="center">
        <Button variant="contained" color="primary">
          Sign Up
        </Button>
      </Stack>
      <Divider sx={{ m: "10px" }} />
      <Stack direction={"row"} justifyContent="center">
        <Box>
          <Button variant="contained" color="primary" endIcon={<Google />}>
            Sign Up With Google
          </Button>
        </Box>
      </Stack>
      <Divider sx={{ m: "10px" }} />
      <Typography variant="body2" color="initial">
        Already have an account? <Link to="/user/login">Log In</Link>
      </Typography>
    </Box>
  );
}

export default SignUp;
