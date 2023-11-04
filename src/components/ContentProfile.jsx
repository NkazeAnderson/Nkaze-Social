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
import React from "react";
import NewPost from "./NewPost";
import PostCommentReaction from "./PostComment";

function ContentProfile() {
  const userInfo = {
    phone: "+23767576767",
    email: "nkazeanderson@gmail.com",
    street: "1334 Mile 20",
    city: "Bamenda",
    state: "North West",
    country: "Cameroon",
    job: "Full Stack Developer",
    status: "In a relationship",
  };
  return (
    <>
      <Box container mt={1} mb={1}>
        <img width={"100%"} height="250px" src="/images/profile-2.jpg" />
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
                src="/images/profile-1.jpg"
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
          Nkaze Anderson
        </Typography>

        <Stack direction={"row"} justifyContent="space-evenly">
          <Stack
            backgroundColor="secondary.dark"
            color="primaryText.main"
            p="10px 20px"
          >
            <Typography variant="h5" sx={{ textDecoration: "underline" }}>
              Followers
            </Typography>
            <Typography variant="h6" textAlign={"center"}>
              10.5k
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
              10.5k
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
              Edit
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
    </>
  );
}

export default ContentProfile;
