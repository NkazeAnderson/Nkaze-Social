import { Login, Logout, Settings } from "@mui/icons-material";
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

function TopBarAvatar() {
  const [profileMenuEl, setProfileMenuEl] = useState(null);

  const profileMenuOpen = Boolean(profileMenuEl);

  const handleProfileMenuClick = (event) => {
    setProfileMenuEl(event.currentTarget);
  };
  const handleProfileMenuClose = (event) => {
    setProfileMenuEl(null);
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

        <MenuItem onClick={handleProfileMenuClose}>
          <ListItemIcon>
            <Settings color="info" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleProfileMenuClose}>
          <ListItemIcon>
            <Login color="success" />
          </ListItemIcon>
          Log In
        </MenuItem>
        <MenuItem onClick={handleProfileMenuClose}>
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
