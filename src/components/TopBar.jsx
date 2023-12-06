import {
  Message,
  Notifications,
  Home,
  TrendingUp,
} from "@mui/icons-material";


import {
  Box,
  Stack,
  AppBar,
  Typography,
  styled,
  Badge,
  Button

} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MobileTopbar from "./mobileTopBar";
import TopBarAvatar from "./TopBarAvatar";
import SearchComponent from "./SearchComponent";
import { Link } from "react-router-dom";

export const Logo = styled("img")({
  width: 50,
  height: 50,
});

function TopBar() {
  return (
    <Box>
      <AppBar position="fixed" color="primary">
        {/* <Toolbar></Toolbar> */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <Box sx={{ flex: 3 }}>
            <Link style={{"text-decoration": "none"}} to={"/"}> 
            <Stack direction="row" justifyContent="start" alignItems="center">
              <Logo src="/images/logo.png" alt="Logo" />
              <Typography
                variant="h4"
                sx={{ display: { md: "block", xs: "none" } }}
              >
                Nkaze Social
              </Typography>
            </Stack>
            </Link>
          </Box>
          <SearchComponent
            id="search"
            placeholder={"Search for people, post, media and more.."}
          />
          <Box sx={{ flex: 4 }}>
            <Stack
              direction="row"
              justifyContent="end"
              alignItems="center"
              spacing={3}
              mr={5}
            >
              <Link style={{"text-decoration": "none"}} to={"/"}> 
              <Button variant="text" color="primaryText" startIcon={<Home />}>
                Home
              </Button> </Link>
              <Link style={{"text-decoration": "none"}} to={"/"}> 
              <Button
                variant="text"
                color="primaryText"
                startIcon={<TrendingUp />}
              >
                Trending
              </Button> </Link>
              <IconButton aria-label="Messages" onClick={""}>
                <Badge badgeContent="1" color="error">
                  <Message sx={{ color: "white" }} />
                </Badge>
              </IconButton>
              <IconButton size="large">
                <Badge badgeContent={17} color="error">
                  <Notifications fontSize="27" color="primaryText" />
                </Badge>
              </IconButton>
              <TopBarAvatar />
            </Stack>
          </Box>
        </Stack>

        <MobileTopbar />
      </AppBar>
    </Box>
  );
}

export default TopBar;
