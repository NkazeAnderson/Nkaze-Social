import {
  AddAPhotoOutlined,
  Call,
  Email,
  Favorite,
  InfoOutlined,
  Person2Outlined,
  PersonPin,
  QuickreplyOutlined,
  Send,
  ShareOutlined,
  ThumbUpAltOutlined,
  Work,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Grid,
  Stack,
  TextField,
  Typography,
  IconButton,
  Card,
  CardMedia,
  CardContent,
  Chip,
  CardActions,
  CardHeader,
  List,
  ListItem,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  Divider,
  InputAdornment,
  Badge,
  AvatarGroup,
  TableContainer,
  TableBody,
  TableRow,
  TableCell,
  Table,
  Paper,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import NewPost from "./NewPost";
import PostCommentReaction from "./PostComment";
import { useSelector } from "react-redux";
import { get } from "../utils/BackEndRequests";
import { useParams } from "react-router-dom";
import Post from "./Post";

function ContentProfile() {
  const [posts, setPosts ] = useState([])
  const [user, setUser ] = useState({})
  const {_id} = useSelector((state)=>state.user.user)
  const {id} = useParams();
  
 
  useEffect(()=>{
    get(`/api/user/${id}`).then(res=>{
      setUser(res.data)
    })
    get(`/api/post/timeline/${id}`).then(res=>{
      setPosts([...res.data])
    })
  },[])

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
        <img width={"100%"} height="250px" src={`/files/${user.cover_pic}`}/>
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
                badgeContent={<AddAPhotoOutlined />}
                sx={{ position: "absolute", bottom: "0px", right: "0px" }}
              ></Badge>
              <Avatar
                sx={{
                  height: "150px",
                  width: "150px",
                }}
                src={`/files/${user.profile_pic}`}
              />
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
              {user.followers && user.followers.length}
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
              {id == _id ? "Edit" : "Follow"}
            </Button>
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
      </Box>
    </>
  );
}

export default ContentProfile;
