import {
  AddAPhotoOutlined,
  Call,
  Cancel,
  Email,
  PersonPin,
  Save,
  Work,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Badge,
  Paper,
  Popover,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get, put } from "../utils/BackEndRequests";
import { useNavigate, useParams } from "react-router-dom";
import Post from "./Post";
import { userActions } from "../store/userSlice";

function ContentProfile() {
  const [posts, setPosts ] = useState([])
  const [user, setUser ] = useState({"_id":"6569b2b604206ecd08153618","first_name":"User","last_name":"User","email":"Loading","phone":"Loading","profile_pic":"/noProfilePic.png","cover_pic":"/noCoverPic.png","followers":[],"following":[],"__v":0})
  const {_id} = useSelector((state)=>state.user.user)
  const isLoggedIn = useSelector((state)=>state.user.logged_in)
  const {id} = useParams();
  const navigate =  useNavigate();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const [picToChange, setPicToChange] = useState(null);
  const [picToChangeURL, setPicToChangeURL] = useState(null);
  const [file, setFile] = useState(null);

  const handleAddPics = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAddPic = (event) => {
    if(event.currentTarget.getAttribute("id") === "addPpBtn"){
       document.getElementById("addPicInput").click() 
       setPicToChange(0)
    }
    if(event.currentTarget.getAttribute("id") === "addCpBtn"){
       document.getElementById("addPicInput").click() 
       setPicToChange(1)
    }
  };

  const handlePicChange = (event) => {
   const files =  event.currentTarget.files
   const url = URL.createObjectURL(files[0]);
   setFile(files[0])
   setPicToChangeURL(url)
   handleClose()
  };

  const handlePicChangeSave = (event) => {
    const formData = new FormData()
    formData.append("files", file ) 
    put(`/api/user/${user['_id']}/change/${picToChange === 0 ? "profile": "cover" }`, formData).then(res=>{
      handlePicChangeCancel()
      get(`/api/user/${user["_id"]}`).then(res=> {
      dispatch(userActions.changes(res.data))
      setUser(res.data)
      })
    })
   
  };

  const handlePicChangeCancel = (event) => {
    setPicToChange(null)
    setPicToChangeURL(null)
    handleClose()
   
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const picChange = Boolean(picToChangeURL);

  
 
  useEffect(()=>{

    if (isLoggedIn){
      get(`/api/user/${id}`).then(res=>{
        setUser(res.data)
      })
      get(`/api/post/timeline/${id}`).then(res=>{
        setPosts([...res.data])
      })
    } 
    
  },[isLoggedIn])

  const handleFollow = () =>{
    put(`/api/user/${id}/follow`).then(res=>{
      get(`/api/user/${id}`).then(res=>{
        setUser(res.data)
      })
    })
  }
const isFollowing = user.followers.filter(u=>{
  console.log("u:", u)
  console.log("id request:", _id)
  return u._id == _id
})
  const userInfo = {
    phone: user.phone,
    email: user.email,
    street: user.street ? user.street : "N/a",
    city: user.city ? user.city : "N/a",
    state: user.state ? user.state : "N/a",
    country: user.country ? user.country : "N/a",
    job: user.job ? user.job : "N/a",
    status: user.status ? user.status : "N/a",
  };
  return (
    <>
      <Box container mt={1} mb={1}>
        <img width={"100%"} height="250px" src= {(picChange && picToChange === 1) ? picToChangeURL : `/files/${user.cover_pic}`}/>
        <Box
          sx={{
            position: "relative",
            height: "100px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              height: "150px",
              width: "150px",
              top: "-50px",
              display: "flex",
            }}
          >
            <Box
              sx={{
                position: "relative",
              }}
            >
              <Badge
                badgeContent={picChange 
                  ? <Stack spacing={1}><Save color="primary" onClick={handlePicChangeSave}/> <Cancel color="secondary" onClick={handlePicChangeCancel} /> </Stack>  
                : <IconButton onClick={handleAddPics} disabled = {picChange}> <AddAPhotoOutlined id = "addImgIcon"/></IconButton> }
                sx={{ position: "absolute", bottom: "0px", right: "0px" }}
                onClick={handleAddPics}
                aria-describedby= "profileImgPop"
              ></Badge>
              <Avatar
                sx={{
                  height: "150px",
                  width: "150px",
                }}
                src={(picChange && picToChange === 0) ? picToChangeURL : `/files/${user.profile_pic}`}
              />
              <Popover
                id="profileImgPop"
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                
                <Stack spacing={1}>

                <Button id = "addPpBtn" variant="contained" onClick={handleAddPic}>Add Profile Picture</Button><br/>
                <Button id = "addCpBtn" variant="contained" onClick={handleAddPic}>Add Cover Picture</Button>
                </Stack>
              </Popover>
             
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          p: 2,
          backgroundColor: "primaryText.main",

          m: 0,
        }}
      >
        <Typography
          variant="h3"
          color="secondary.dark"
          sx={{
            backgroundColor: { xs: "secondaryText.light", md: "transparent" },
          }}
        >
          {`${user.first_name} ${user.last_name}`}
        </Typography>

        <Stack direction={"row"} mt={2} justifyContent="space-evenly">
          <Stack
            backgroundColor="secondary.dark"
            color="primaryText.main"
            p="10px 20px"
          >
            <Typography variant="h5" sx={{ textDecoration: "underline" }}>
              Followers
            </Typography>
            <Typography variant="h6" textAlign={"center"}>
              { user.followers && user.followers.length}
            </Typography>
          </Stack>
          <Stack
            backgroundColor="secondary.dark"
            color="primaryText.main"
            p="10px 20px"
          >
            <Typography variant="h5" sx={{ textDecoration: "underline" }}>
              Following
            </Typography>
            <Typography variant="h6" textAlign={"center"}>
            {user.following && user.following.length}
            </Typography>
          </Stack>
          <Box
            sx={{ position: "relative", display: { xs: "none", md: "flex" } }}
          >
            <Button
              variant="contained"
              size="small"
              sx={{
                display: "block",
                position: "absolute",
                bottom: "0px",
                left: "0px",
              }}
            >
            </Button>
              {id == _id ? 
              <Button
              variant="contained"
              size="small"
              sx={{
                display: "block",
                position: "absolute",
                bottom: "0px",
                left: "0px",
              }}
            >
              Edit
            </Button>
              : <Button
              variant="contained"
              size="small"
              sx={{
                display: "block",
                position: "absolute",
                bottom: "0px",
                left: "0px",
              }}
              onClick={handleFollow}
            >
              {isFollowing.length > 0 ? "Unfollow": "Follow"}
              
            </Button>}
          </Box>
        </Stack>
        {/* mobile */}
        <Box
          sx={{
            position: "relative",
            justifyContent: "end",
            width: "100%",
            pt: "10px",
            display: { xs: "flex", md: "none" },
          }}
        >
          <Button
            variant="contained"
            size="small"
            sx={{
              display: "block",
            }}
          >
            Edit
          </Button>
        </Box>
        <Grid container>
          <Grid item flex={1.5}></Grid>
          <Grid item flex={10.5}>
            <Paper elevation={5} sx={{ width: "70%", m: "15px 0px" }}>
              <List>
                {/* Phone */}
                <ListItem secondaryAction={<Call color="primary" />}>
                  <ListItemText
                    primary="Phone"
                    secondary={userInfo.phone}
                    primaryTypographyProps={{
                      fontWeight: "500",
                      fontSize: "1.1rem",
                    }}
                    secondaryTypographyProps={{
                      color: "primary",
                      "text-decoration": "none",
                      fontWeight: "500",
                    }}
                  />
                </ListItem>
                {/* Email */}
                <ListItem secondaryAction={<Email color="primary" />}>
                  <ListItemText
                    primary="Email"
                    secondary={userInfo.email}
                    primaryTypographyProps={{
                      fontWeight: "500",
                      fontSize: "1.1rem",
                    }}
                    secondaryTypographyProps={{
                      color: "primary",
                      "text-decoration": "none",
                      fontWeight: "500",
                    }}
                  />
                </ListItem>
                {/* Address */}
                <ListItem secondaryAction={<PersonPin color="primary" />}>
                  <ListItemText
                    primary="Address"
                    secondary={`${userInfo.street}, ${userInfo.city}, ${userInfo.state}, ${userInfo.country}`}
                    primaryTypographyProps={{
                      fontWeight: "500",
                      fontSize: "1.1rem",
                    }}
                    secondaryTypographyProps={{
                      color: "primary",
                      "text-decoration": "none",
                      fontWeight: "500",
                    }}
                  />
                </ListItem>
                {/* Job */}
                <ListItem secondaryAction={<Work color="primary" />}>
                  <ListItemText
                    primary="Job"
                    secondary={userInfo.job}
                    primaryTypographyProps={{
                      fontWeight: "500",
                      fontSize: "1.1rem",
                    }}
                    secondaryTypographyProps={{
                      color: "primary",
                      "text-decoration": "none",
                      fontWeight: "500",
                    }}
                  />
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
        
        {posts.length>0 && posts.map((post, i)=>(<Post postData= {post} key={i}/>))}
        <input hidden onChange={handlePicChange} id = "addPicInput" type="file" accept="image/jpeg, image/png, image/jpg"></input>
      </Box>
    </>
  );
}

export default ContentProfile;
