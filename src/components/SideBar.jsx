import {
  Avatar,
  Badge,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
import { indigo } from "@mui/material/colors";
import MenuList from "./MenuList";

const SideBarHolder = styled(Box)(({ theme }) => ({
  backgroundColor: "primaryText.main",
  width: "100%",
  height: "calc(100vh - 52px) ",
  "background-color": indigo[200],

  "overflow-y": "scroll",
  position: "sticky",
  scrollbarWidth: "thin",
}));

function SideBar() {
  return (
    <SideBarHolder
      sx={{
        display: { xs: "none", md: "inline-block" },
      }}
    >
      <MenuList />
      <Divider sx={{ color: "primaryText.main" }} />
      <Paper
        elevation={9}
        sx={{
          border: "1px solid primary.main",
          "border-top-right-radius": "20px",
          "border-top-left-radius": "20px",
          margin: "5px 10px",
          "box-shadow": "-3px 10px 23px 1px rgba(0,0,0,0.75)",
        }}
      >
        <Box
          sx={{
            backgroundColor: "primary.main",
            border: "1px solid primary.main",
            "border-top-right-radius": "20px",
            "border-top-left-radius": "20px",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "primaryText.main",
              padding: "5px 5px",
              cursor: "default",
            }}
          >
            New Messages
          </Typography>
        </Box>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Badge badgeContent={3} color="error">
                <Avatar sx={{ cursor: "help" }} />
              </Badge>
            </ListItemAvatar>

            <ListItemText
              primary="New Message from Wale"
              secondary="Hello, we need to talk....."
              secondaryTypographyProps={{
                padding: "0px 5px",
                fontFamily: "Glass Antiqua",
                fontSize: "1.2rem",
              }}
              primaryTypographyProps={{ fontWeight: 900 }}
              sx={{ cursor: "pointer" }}
            />
          </ListItem>
        </List>
      </Paper>
    </SideBarHolder>
  );
}

export default SideBar;
