import {
  Message,
  Notifications,
  Home,
  TrendingUp,
  Search,
  // Menu,
  Close,
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
} from "@mui/material";
import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";

const Logo = styled("img")({
  width: 50,
  height: 50,
});
const SearchBox = styled(Box)(({ theme }) => ({
  width: 100,
  backgroundColor: "white",
  borderRadius: 30,
  borderColor: theme.palette.default,
  flex: 5,
}));
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
  const [profileMenuEl, setProfileMenuEl] = useState(null);
  const [mobileMenuEl, setMobileMenuEl] = useState(null);
  const profileMenuOpen = Boolean(profileMenuEl);
  const mobileMenuOpen = Boolean(mobileMenuEl);
  const handleMobileMenuClick = (event) => {
    setMobileMenuEl(event.target);
  };
  const handleMobileMenuClose = (event) => {
    setMobileMenuEl(null);
  };
  const handleProfileMenuClick = (event) => {
    setProfileMenuEl(event.currentTarget);
  };
  const handleProfileMenuClose = (event) => {
    setProfileMenuEl(null);
  };

  return (
    <Box>
      <AppBar position="sticky" color="primary">
        {/* <Toolbar></Toolbar> */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <Box sx={{ flex: 3 }}>
            <Stack direction="row" justifyContent="start" alignItems="center">
              <Logo src="/images/logo.png" alt="Logo" />
              <Typography
                variant="h4"
                sx={{ display: { md: "block", xs: "none" } }}
              >
                {" "}
                Nkaze Social
              </Typography>
            </Stack>
          </Box>
          <SearchBox>
            <Stack
              direction="row"
              alignItems="center"
              sx={{ margin: "0px 10px" }}
            >
              <Search color="primary" fontSize="small" />
              <InputBase
                id="search"
                fullWidth
                placeholder="Search for people, post, media and more.. "
                size="small"
              />
            </Stack>
          </SearchBox>
          <Box sx={{ flex: 4 }}>
            <Stack
              direction="row"
              justifyContent="end"
              alignItems="center"
              spacing={3}
              mr={5}
            >
              <Button variant="text" color="primaryText" startIcon={<Home />}>
                Home
              </Button>
              <Button
                variant="text"
                color="primaryText"
                startIcon={<TrendingUp />}
              >
                Trending
              </Button>
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
              <Avatar color="secondary" src="/images/profile-1.jpg">
                P
              </Avatar>
            </Stack>
          </Box>
        </Stack>
        <Grid
          container
          sx={{ display: { xs: "flex", md: "none" } }}
          alignItems="center"
        >
          <Grid item xs={2}>
            <IconButton aria-label="MenuMobile" onClick={handleMobileMenuClick}>
              <MenuIcon color="primaryText" />
            </IconButton>
          </Grid>
          <Grid item xs="2">
            <Logo src="/images/logo.png" />
          </Grid>
          <Grid item xs="8" justifyContent={"end"}>
            <Stack
              direction={"row"}
              justifyContent="end"
              alignItems={"center"}
              pr={2}
              spacing={2}
            >
              <IconButton size="large">
                <Search fontSize="27" color="secondary" />
              </IconButton>
              <IconButton size="large">
                <Badge badgeContent={17} color="error">
                  <Notifications fontSize="27" color="primaryText" />
                </Badge>
              </IconButton>
              <IconButton
                onClick={handleProfileMenuClick}
                aria-controls={"profileMenu"}
                aria-haspopup="true"
                aria-expanded={profileMenuEl ? "true" : undefined}
              >
                <Avatar
                  id="profileButton"
                  color="secondary"
                  src="/images/profile-1.jpg"
                >
                  P
                </Avatar>
              </IconButton>
            </Stack>
          </Grid>
        </Grid>
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileMenuOpen ? true : false}
        onClose={handleMobileMenuClose}
      >
        <Stack sx={{ backgroundColor: "primary.main", width: "100%", mt: 1 }}>
          <IconButton aria-label="" onClick={handleMobileMenuClose} pt={4}>
            <Close
              sx={{ backgroundColor: "primaryText.main", borderRadius: "50%" }}
            />
          </IconButton>
        </Stack>
        <Divider />
        <List dense>
          <ListItem color="primary">
            <ListItemButton alignItems="center">
              <StlyedListItemIcon>
                <Home color="primary" />
              </StlyedListItemIcon>

              <ListItemText
                primary="Home"
                primaryTypographyProps={{
                  color: "primary",
                  fontWeight: "medium",
                  variant: "body1",
                }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem color="primary">
            <ListItemButton alignItems="center">
              <StlyedListItemIcon>
                <Home color="primary" />
              </StlyedListItemIcon>

              <ListItemText
                primary="Home"
                primaryTypographyProps={{
                  color: "primary",
                  fontWeight: "medium",
                  variant: "body1",
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Menu
        id="profileMenu"
        anchorEl={profileMenuEl}
        open={profileMenuOpen}
        onClose={handleProfileMenuClose}
      >
        <MenuItem onClick={""}>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={""}>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          Log In
        </MenuItem>
        <MenuItem onClick={""}>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          LogOut
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default TopBar;
