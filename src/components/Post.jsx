import { Favorite, QuickreplyOutlined, ShareOutlined, ThumbDown, ThumbUpAltOutlined } from "@mui/icons-material";
import {
    Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { useSelector} from "react-redux";
import { useState } from "react";
import Carousel from "react-material-ui-carousel";
import PostCommentReaction from "./PostComment";
import AddComment from "./AddComment";
import { get, put, statics } from "../utils/BackEndRequests";

function Post(props) {
  const [post, setPost] = useState(props.postData);
  const [commentOpen, setCommentOpen] = useState(false);
  const [readMoreOpen, setReadMoreOpen] = useState(false);
  const comments = post.comments
  const user = useSelector(state => state.user.user)
  const commentsCount = post.comments.length;
  const likesCount = post.like_by.length;
  const media = post.photos
  const maxTextLength = 100
 const i = 2
  const isLiked = post.like_by.filter((userInLIke)=>{
    return userInLIke.id == user["_id"]
   })
  const handleReadMore = (e) =>
  {
    setReadMoreOpen(!readMoreOpen)
  }

  const handleCommentLIke = (e) =>
  {
    put("/api/comment/")
  }
 const handleCommentOpen = ()=>{
  setCommentOpen(!commentOpen)
 }
 const handleLike = async (e) => {
  put(`/api/post/${post.id}/like`).then(res=>{
    if (res.status == 200){
      get(`/api/post/${post.id}`).then(response=>{
        setPost(response.data)
      }
      )
    }
  })
 }
  return (
    <Grid container mt={1} mb={1} key={i}>
        <Grid item xs={1.5}>
          <Stack alignItems={"center"} sx={{ p: 0, m: 0 }}>
            <IconButton aria-label="" onClick={""}>
              <Avatar
                sx={{
                  borderColor: "primary.main",
                  borderStyle: "solid",
                  borderWidth: "1px",
                }}
                src={statics(`/files/${post.owner.profile_pic}`)}
              />
            </IconButton>
            <Favorite color="primary" fontSize="1" />
            <Chip
              label= {likesCount}
              size="small"
              color="primary"
              sx={{
                fontWeight: "500",
              }}
            ></Chip>
          </Stack>
        </Grid>
        <Grid item xs={10.5}>
          <Card elevation={6}>
            
            
              <Carousel animation = "slide" autoPlay={false}>
                  {media.map((pic)=>(
                    <CardMedia
                    component="img"
                    title="Nkaze Anderson"
                    image={statics(`/files/${pic}`)}
                    height="450"
                    sx={{ objectFit: "fill" }}
                  />
                  ))}
              </Carousel>
            
            <CardHeader
              subheader= {`By: ${post.owner.first_name} ${post.owner.last_name}`}
              sx={{
                p: 0,
                ml: 2,
                "& .MuiCardHeader-subheader": {
                  color: "primary.main",
                  fontWeight: 600,
                  textAlign: "center",
                },
              }}
            ></CardHeader>
            <CardContent>
              <Typography variant="body1">
                {(post.text.length < maxTextLength && !readMoreOpen) || (post.text.length > maxTextLength && readMoreOpen) ? post.text : (`${post.text.slice(0, maxTextLength)}...`)}
              </Typography>
            {(post.text.length > maxTextLength && !readMoreOpen) && <Chip label="Read More" variant="outlined" size="small" 
            onClick={handleReadMore}></Chip>}  
            </CardContent>
            <CardActions>
              <Button variant= {isLiked.length == 0 ?"outlined": "contained"} endIcon={isLiked.length == 0 ? <ThumbUpAltOutlined /> : <ThumbDown/> } onClick={handleLike}>
               {isLiked.length == 0 ?"Like": "Unlike" } </Button>
              <Button endIcon={<QuickreplyOutlined />} id={`comment-button-${i}`} onClick={handleCommentOpen} >Comment {commentsCount}</Button>
              <Button endIcon={<ShareOutlined />}>Share</Button>
            </CardActions>
            <Divider />
            <CardContent sx={{display:commentOpen ? "block":"none" }}>
              <AddComment post= {post} setPost= {setPost}/>
              {comments.map((comment)=>(
                <List>
                <ListItem secondaryAction={<PostCommentReaction />}>
                  <ListItemAvatar>
                    <Avatar />
                  </ListItemAvatar>

                  <ListItemText secondary={comment.text} />
                </ListItem>

                <PostCommentReaction display={"sm"} />
              </List>
              ))}
              
            </CardContent>
          </Card>
        </Grid>
      </Grid>
  );
}

export default Post;
