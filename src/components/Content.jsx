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
import React from "react";
import NewPost from "./NewPost";
import PostCommentReaction from "./PostComment";

function Content() {
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
            />
          </Stack>
        </Grid>
        <Grid item xs={10.5}>
          <NewPost />
        </Grid>
      </Grid>

      <Grid container mt={1} mb={1}>
        <Grid item xs={1.5}>
          <Stack alignItems={"center"} sx={{ p: 0, m: 0 }}>
            <IconButton aria-label="" onClick={""}>
              <Avatar
                sx={{
                  borderColor: "primary.main",
                  borderStyle: "solid",
                  borderWidth: "1px",
                }}
                src="/images/profile-1.jpg"
              />
            </IconButton>
            <Favorite color="primary" fontSize="1" />
            <Chip
              label="5.5k"
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
            <CardMedia
              component="img"
              title="Nkaze Anderson"
              image="/images/profile-3.jpg"
              height="450"
              sx={{ objectFit: "fill" }}
            />
            <CardHeader
              subheader="By: Nkaze Anderson"
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
                Hello Wale posted something amazing. Findout more about this
                post
              </Typography>
              <Chip label="Read More" variant="outlined" size="small"></Chip>
            </CardContent>
            <CardActions>
              <Button endIcon={<ThumbUpAltOutlined />}>Like</Button>
              <Button endIcon={<QuickreplyOutlined />}>Comment</Button>
              <Button endIcon={<ShareOutlined />}>Share</Button>
            </CardActions>
            <Divider />
            <CardContent>
              <TextField
                placeholder="write a comment"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton>
                        <Send color="primary" />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                fullWidth
              />
              <List>
                <ListItem secondaryAction={<PostCommentReaction />}>
                  <ListItemAvatar>
                    <Avatar />
                  </ListItemAvatar>

                  <ListItemText secondary="Lol, Liking so awesome" />
                </ListItem>

                <PostCommentReaction display={"sm"} />
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Content;
