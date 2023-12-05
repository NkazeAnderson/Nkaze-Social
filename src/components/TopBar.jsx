import {
  Message,
  Notifications,
  Home,
  TrendingUp,
  Search,
  // Menu,
  Close,
  Settings,
  Login,
  Logout,
} from "@mui/icons-material";

import MenuIcon from "@mui/icons-material/Menu";

import {
  Box,
  Stack,
  TextField,
  AppBar,
  InputAdornment,
  Typography,
  styled,
  Badge,
  Button,
  Avatar,
  Grid,
  Drawer,
  Divider,
  Menu,
  MenuItem,
  ListItemIcon,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemSecondaryAction,
  InputBase,
  ListItemAvatar,
} from "@mui/material";
import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import MenuList from "./MenuList";
import { useSelector } from "react-redux";
import MobileTopbar from "./mobileTopBar";
import TopBarAvatar from "./TopBarAvatar";
import SearchComponent from "./SearchComponent";
import { Link } from "react-router-dom";

export const Logo = styled("img")({
  width: 50,
  height: 50,
});
const StlyedListItemIcon = styled(ListItemIcon)({
  "&.MuiListItemIcon-root": {
    pr: 0,
    backgroundColor: "primary.main",
    width: "35px",
    "min-width": "35px",
  },
});
const StyledSearchInput = styled(TextField)({
  "&:focus": {
    outline: "none !important",
    border: "none !important",
  },
  "&:hover": {
    outline: "none !important",
    border: "none !important",
  },
  display: { md: "block", xs: "none" },
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
