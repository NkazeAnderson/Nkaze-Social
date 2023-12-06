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
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { post } from "../utils/BackEndRequests";

function SignUp() {
  const [firstName, setFirstName] =  useState("")
  const [lastName, setLastName] =  useState("")
  const [email, setEmail] =  useState("")
  const [phone, setPhone] =  useState("")
  const [password, setPassword] =  useState("")
  const [password1, setPassword1] =  useState("")
  const navigate = useNavigate()

  const handleChange = (e) =>{
    const el = e.currentTarget
    const el_id = el.getAttribute("id")
    el_id === "firstName" && setFirstName(el.value)
    el_id === "lastName" && setLastName(el.value)
    el_id === "email" && setEmail(el.value)
    el_id === "phone" && setPhone(el.value)
    el_id === "password" && setPassword(el.value)
    el_id === "password1" && setPassword1(el.value)
  }
  const handleSubmit = () =>{
    if (password === password1){
      const data ={first_name: firstName, last_name: lastName, phone: phone, email: email, password: password}
      post("/api/user", data).then(res=>{
        navigate("/user/login")
      })
    }
  }
  return (
    <Box component="form" noValidate autoComplete="off">
      <Typography variant="h3" color={"primary"}>
        Sign Up
      </Typography>
      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="firstName">First Name</InputLabel>
        <OutlinedInput id="firstName" placeholder="John" name="first_name" label="FirstName" value = {firstName} onChange={handleChange} required/>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="lastName">Last Name</InputLabel>
        <OutlinedInput id="lastName" placeholder="Doe" label="Last Name" name="last_name" value = {lastName}  onChange={handleChange}  required/>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="email">Email</InputLabel>
        <OutlinedInput
          id="email"
          type="email"
          name="email"
          placeholder="johndoe@gmail.com"
          label="Email"
          fullWidth
          value = {email} 
          onChange={handleChange} 
          required
        />
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="phone">Phone</InputLabel>
        <OutlinedInput
          id="phone"
          name="phone"
          placeholder="6719299392"
          label="Phone"
          fullWidth
          value = {phone} 
          onChange={handleChange} 
          required
        />
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="password">Password</InputLabel>
        <OutlinedInput
          id="password"
          type="password"
          placeholder="password"
          label="Password"
          name="password"
          value = {password} 
          onChange={handleChange} 
          required
        />
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="passwordagain">Repeat password</InputLabel>
        <OutlinedInput
          id="password1"
          type="password"
          name="password1"
          placeholder="password again"
          label="Repeat password"
          value = {password1} 
          onChange={handleChange} 
          required
        />
      </FormControl>
      <Stack direction={"column"} justifyContent="center">
        <Button variant="contained" color="primary" onClick={handleSubmit}>
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
