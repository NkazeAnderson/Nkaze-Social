import { Favorite, Send, ThumbDown } from "@mui/icons-material";
import {
  Avatar,
  AvatarGroup,
  Badge,
  Box,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";

function PostCommentReaction({ display }) {
  return (
    <Box
      sx={{
        display:
          display === "sm"
            ? { xs: "block", md: "none" }
            : { xs: "none", md: "block" },
        width: "100%",
      }}
    >
      <Stack direction={"row"} justifyContent="end">
        <IconButton>
          <Favorite color="primary" />
        </IconButton>
        <IconButton>
          <ThumbDown color="error" />
        </IconButton>
        <Box sx={{ border: "2px solid black" }}>
          <AvatarGroup max={4}>
            <Badge
              sx={{
                "& .MuiBadge-badge": {
                  "min-width": "6px;",
                  p: 0,
                  height: null,
                  backgroundColor: "transparent",
                  right: 10,
                  top: 5,
                },
              }}
              badgeContent={<Favorite fontSize={"6"} m={0} color="primary" />}
            >
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Badge>

            <Badge
              sx={{
                "& .MuiBadge-badge": {
                  "min-width": "6px;",
                  p: 0,
                  height: null,
                  backgroundColor: "transparent",
                  right: 10,
                  top: 5,
                },
              }}
              badgeContent={<ThumbDown fontSize={"6"} m={0} color="error" />}
            >
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Badge>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          </AvatarGroup>
        </Box>
      </Stack>
    </Box>
  );
}

export default PostCommentReaction;
