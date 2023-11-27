import { Login, Logout, Person3TwoTone, Settings } from "@mui/icons-material";
import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function TopBarAvatar() {
  const [profileMenuEl, setProfileMenuEl] = useState(null);

  const profileMenuOpen = Boolean(profileMenuEl);
  const navigate = useNavigate();
  const handleProfileMenuClick = (event) => {
    setProfileMenuEl(event.currentTarget);
  };
  const handleProfileMenuClose = (event) => {
    setProfileMenuEl(null);
    let target = event.currentTarget.getAttribute("id");
    target === "login" && navigate("/user/login");
    target === "logout" && navigate("/user/logout");
    target === "signup" && navigate("/user/signup");
  };
  return (
    <>
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
      <Menu
        id="profileMenu"
        anchorEl={profileMenuEl}
        open={profileMenuOpen}
        onClose={handleProfileMenuClose}
      >
        <MenuItem>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar src="/images/profile-1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Wale Anderson"
                secondary="View my Account"
              />
            </ListItem>
          </List>
        </MenuItem>

        <MenuItem id="settings" onClick={handleProfileMenuClose}>
          <ListItemIcon>
            <Settings color="info" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem id="login" onClick={handleProfileMenuClose}>
          <ListItemIcon>
            <Login color="success" />
          </ListItemIcon>
          Log In
        </MenuItem>
        <MenuItem id="signup" onClick={handleProfileMenuClose}>
          <ListItemIcon>
            <Person3TwoTone color="success" />
          </ListItemIcon>
          Sign Up
        </MenuItem>
        <MenuItem id="logout" onClick={handleProfileMenuClose}>
          <ListItemIcon>
            <Logout color="error" />
          </ListItemIcon>
          LogOut
        </MenuItem>
      </Menu>
    </>
  );
}

export default TopBarAvatar;
