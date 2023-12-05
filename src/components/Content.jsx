import {
  Favorite,
  QuickreplyOutlined,
  Send,
  ShareOutlined,
  ThumbUpAltOutlined,
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
} from "@mui/material";
import React, { useEffect, useState } from "react";
import NewPost from "./NewPost";
import PostCommentReaction from "./PostComment";
import { get } from "../utils/BackEndRequests";
import { useSelector } from "react-redux";
import Carousel from "react-material-ui-carousel";
import Post from "./Post";

function Content() {
  const [posts, setPosts ] = useState([])
  const user = useSelector((state)=>state.user.user)
  const isLoggedIn = useSelector((state)=>state.user.logged_in)
  
  useEffect(()=>{
   isLoggedIn && get("/api/post/trending").then(res=>{
      setPosts([...res.data])
    })
  },[isLoggedIn])
  
  return (
    <Box
      sx={{
        p: 2,
        backgroundColor: "primaryText.main",

        m: 0,
      }}
    >
      
      <Grid container mt={1} mb={1}>
        <Grid item xs={1.5}>
          <Stack alignItems={"center"}>
            <Avatar
              sx={{
                borderColor: "primary.main",
                borderStyle: "solid",
                borderWidth: "1px",
              }}
              src = {`/files/${user.profile_pic}`}
            />
          </Stack>
        </Grid>
        <Grid item xs={10.5}>
          <NewPost />
        </Grid>
      </Grid>
              
       {posts.length>0 && posts.map((post, i)=>(<Post postData= {post} key={i}/>))}
    </Box>
  );
}

export default Content;
