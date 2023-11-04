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
import { Link } from "react-router-dom";

function Login() {
  return (
    <Box component="form" noValidate autoComplete="off">
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
          placeholder="6719299392"
          label="Password"
        />
      </FormControl>

      <Stack direction={"column"} justifyContent="center">
        <Button variant="contained" color="primary">
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
  );
}

export default Login;
