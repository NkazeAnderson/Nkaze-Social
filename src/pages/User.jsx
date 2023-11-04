import {
  Box,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { Outlet } from "react-router-dom";
function User() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        "flex-direction": "row",
        backgroundImage: "url('/images/cover.jpg')",
        "background-size": "cover",
        overflow: "auto",
        scrollbarWidth: "thin",
      }}
    >
      <Stack
        justifyContent={"center"}
        alignItems="center"
        direction="row"
        sx={{ width: "100%", flex: "12" }}
      >
        <Box
          sx={{
            flex: "6",
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h1"
            color="primary"
            fontWeight="500"
            textAlign={"center"}
          >
            NkazeSocial
          </Typography>
          <Typography
            variant="h5"
            fontWeight="500"
            color="primaryText.dark"
            textAlign={"center"}
          >
            Best social media platform, connect with friends and family
          </Typography>
        </Box>
        <Box
          sx={{
            mr: "10%",
            ml: "10%",
            flex: "6",
            backgroundColor: "rgba(144, 140, 140, 0.8)",
            p: "10px",
          }}
        >
          <Outlet />
        </Box>
      </Stack>
    </Box>
  );
}

export default User;
