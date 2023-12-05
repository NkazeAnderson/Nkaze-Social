import {
  Close,
  Home,
  Menu,
  Notifications,
  Search,
  TrendingUp,
} from "@mui/icons-material";
import MenuList from "./MenuList";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  Drawer,
  Grid,
  IconButton,
  Stack,
} from "@mui/material";
import { Logo } from "./TopBar";
import TopBarAvatar from "./TopBarAvatar";
import { useState } from "react";
import SearchComponent from "./SearchComponent";
import { useDispatch, useSelector } from "react-redux";
import { UiActions } from "../store/uiSlice";
import { Link } from "react-router-dom";

const MobileTopbar = () => {
  const [mobileMenuEl, setMobileMenuEl] = useState(null);
  // const [searchOpen, setSearchOpen] = useState(false);
  const searchOpen = useSelector((state) => state.ui.mobileSearchOpen);
  const dispatch = useDispatch();

  const mobileMenuOpen = Boolean(mobileMenuEl);
  const handleMobileMenuClick = (event) => {
    setMobileMenuEl(event.target);
  };
  const handleMobileMenuClose = (event) => {
    setMobileMenuEl(null);
  };
  const handleSearchClicked = () => {
    dispatch(UiActions.MobileSearchClicked());
  };
  return (
    <>
      <Grid
        container
        sx={{ display: { xs: "flex", md: "none" } }}
        alignItems="center"
      >
        <Grid item xs={2}>
          <IconButton aria-label="MenuMobile" onClick={handleMobileMenuClick}>
            <Menu color="primaryText" />
          </IconButton>
        </Grid>
        <Grid item xs="2">
        <Link style={{"text-decoration": "none"}} to={"/"}> 
          <Logo src="/images/logo.png" /></Link>
        </Grid>
        <Grid item xs="8" justifyContent={"end"}>
          <Stack
            direction={"row"}
            justifyContent="end"
            alignItems={"center"}
            pr={2}
            spacing={2}
          >
            <IconButton size="large" onClick={handleSearchClicked}>
              <Search fontSize="27" color="secondary" />
            </IconButton>
            <IconButton size="large">
              <Badge badgeContent={17} color="error">
                <Notifications fontSize="27" color="primaryText" />
              </Badge>
            </IconButton>
            <TopBarAvatar />
          </Stack>
        </Grid>

        {searchOpen && (
          <Stack justifyContent={"center"} sx={{ width: "100%", p: 1 }}>
            <SearchComponent
              id="mobileSearch"
              placeholder={"Search for people, post, media and more.."}
            />
          </Stack>
        )}
      </Grid>

      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileMenuOpen ? true : false}
        onClose={handleMobileMenuClose}
      >
        <Stack sx={{ backgroundColor: "primary.main", width: "100%", mt: 1 }}>
          <IconButton aria-label="" onClick={handleMobileMenuClose} pt={4}>
            <Close
              sx={{ backgroundColor: "secondary.light", borderRadius: "50%" }}
            />
          </IconButton>
        </Stack>
        <Divider />
        <Stack direction="row" justifyContent={"center"} mt={1}>
        <Link style={{"text-decoration": "none"}} to={"/"}> 
          <Button
            variant="contained"
            sx={{
              color: "secondary.main",
              "font-weight": "400",
              "font-size": "1.1rem",
            }}
            startIcon={<Home />}
            onClick={handleMobileMenuClose}
          >
            Home
          </Button> </Link>
          <Divider direction="vertical" sx={{ m: 2 }} />
          <Link style={{"text-decoration": "none"}} to={"/"}> 
          <Button
            variant="contained"
            sx={{ color: "secondary.main" }}
            startIcon={<TrendingUp />}
            onClick={handleMobileMenuClose}
          >
            Trending
          </Button> </Link>
        </Stack>
        <MenuList />
      </Drawer>
    </>
  );
};
export default MobileTopbar;
