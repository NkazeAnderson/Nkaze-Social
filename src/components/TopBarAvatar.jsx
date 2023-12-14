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
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userActions } from "../store/userSlice";
import { get, statics } from "../utils/BackEndRequests";

function TopBarAvatar() {
  const [profileMenuEl, setProfileMenuEl] = useState(null);
  const logged_in = useSelector(state=>(state.user.logged_in))
  const user = useSelector(state=>(state.user.user))
  const dispatch = useDispatch()
  const profileMenuOpen = Boolean(profileMenuEl);
  const navigate = useNavigate();
  const handleProfileMenuClick = (event) => {
    setProfileMenuEl(event.currentTarget);
  };
  
  const handleProfileMenuClose = (event) => {
    setProfileMenuEl(null);
    let target = event.currentTarget.getAttribute("id");
    target === "login" && navigate("/user/login");
    target === "signup" && navigate("/user/signup");
    if (target === "logout") {

      get("/api/auth/logout").then(res=>{
        dispatch(userActions.logout())
        navigate("/user/login")
      })
    } 
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
          src={statics(`${user.profile_pic}`)}
        >
          {user.first_name}
        </Avatar>
      </IconButton>
      <Menu
        id="profileMenu"
        anchorEl={profileMenuEl}
        open={profileMenuOpen}
        onClose={handleProfileMenuClose}
      >
       <Link style={{"text-decoration": "none"}} to={`/profile/${user['_id']}`}>
       <MenuItem onClick={handleProfileMenuClose}>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar src = {statics(`${user.profile_pic}`)} />
              </ListItemAvatar>
              <ListItemText
                primary={`${user.first_name} ${user.last_name}`}
                secondary="View my Account"
              />
            </ListItem>
          </List>
        </MenuItem>
       </Link> 

       {
        logged_in && <MenuItem id="settings" onClick={handleProfileMenuClose}>
        <ListItemIcon>
          <Settings color="info" />
        </ListItemIcon>
        Settings
        </MenuItem>
       }
        
       {
        logged_in && <MenuItem id="logout" onClick={handleProfileMenuClose}>
        <ListItemIcon>
          <Logout color="error" />
        </ListItemIcon>
        LogOut
      </MenuItem>
       }
        
       {
        !logged_in && <MenuItem id="login" onClick={handleProfileMenuClose}>
        <ListItemIcon>
          <Login color="success" />
        </ListItemIcon>
        Log In
      </MenuItem>
       }
        
       {
        !logged_in && <MenuItem id="signup" onClick={handleProfileMenuClose}>
        <ListItemIcon>
          <Person3TwoTone color="success" />
        </ListItemIcon>
        Sign Up
      </MenuItem>
       }
        
        
        
        
      </Menu>
    </>
  );
}

export default TopBarAvatar;
