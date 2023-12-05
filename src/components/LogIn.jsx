import { Google } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  FormControl,
  InputLabel,
  OutlinedInput,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import { Link, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { userActions } from "../store/userSlice";
import { useState } from "react";

function Login() {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const logged_in = useSelector((state) => state.user.logged_in);
  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      const data = {
        email: document.getElementById("logemail").value,
        password: document.getElementById("logpassword").value,
      };
      const res = await axios.post("/api/auth/login", data);
      const userRes = await axios.get("/api/user/" + res.data.user);
      userRes.status === 200 && dispatch(userActions.login(userRes.data));
    } catch (err) {
      setError(err.response.status);
    }
  };
  return (
    <>
      {logged_in && <Navigate to="/" replace={false} />}
      {error === 404 && (
        <Snackbar
          open={true}
          message="Invalid credentials"
          autoHideDuration={2000}
        />
      )}
      <Box
        component="form"
        onSubmit={submitHandler}
        noValidate
        autoComplete="off"
      >
        <Typography variant="h3" color={"primary"}>
          Log In
        </Typography>
        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="email">Email</InputLabel>
          <OutlinedInput
            id="logemail"
            type="email"
            placeholder="johndoe@gmail.com"
            label="Email"
            fullWidth
          />
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            id="logpassword"
            type="password"
            placeholder="password"
            label="Password"
          />
        </FormControl>

        <Stack direction={"column"} justifyContent="center">
          <Button variant="contained" color="primary" type="submit">
            Log In
          </Button>
        </Stack>
        <Divider sx={{ m: "10px" }} />
        <Stack direction={"row"} justifyContent="center">
          <Box>
            <Button variant="contained" color="primary" endIcon={<Google />}>
              Log in With Google
            </Button>
          </Box>
        </Stack>
        <Divider sx={{ m: "10px" }} />
        <Typography variant="body2" color="initial">
          Don't have an account? <Link to="/user/signup">Sign Up</Link>
        </Typography>
      </Box>
    </>
  );
}

export default Login;
