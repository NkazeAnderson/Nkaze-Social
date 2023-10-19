import {
  Avatar,
  Badge,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { purple } from "@mui/material/colors";
import {
  BookmarkAddOutlined,
  CalendarMonthOutlined,
  Groups2Outlined,
  Mail,
  MailOutline,
  OndemandVideo,
  OndemandVideoOutlined,
  Person2Outlined,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import { styled } from "@mui/system";
import { indigo } from "@mui/material/colors";

const SideBarHolder = styled(Box)(({ theme }) => ({
  backgroundColor: "primaryText.main",
  width: "100%",
  height: "calc(100vh - 52px) ",
  "background-color": indigo[200],

  "overflow-y": "scroll",
  position: "sticky",
  scrollbarWidth: "thin",
}));
const SideListItem = styled(ListItem)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  "font-size": "1.5rem",
  "border-top-right-radius": "10px",
  "border-bottom-right-radius": "10px",

  margin: "5px 25px",
  width: "90%",
  "& .MuiButtonBase-root": { "margin-left": "54px" },
  "& .MuiSvgIcon-root": {
    color: theme.palette.primaryText.main,
    "font-size": "1.3rem",
  },
  "& .MuiTypography-root": {
    color: theme.palette.primaryText.main,
    "font-weight": "400",
    "font-size": "1.3rem",
  },
}));

function SideBar() {
  const sideList = {
    People: <Person2Outlined />,
    Inbox: <MailOutline />,
    Videos: <OndemandVideoOutlined />,
    Events: <CalendarMonthOutlined />,
    Groups: <Groups2Outlined />,
    Shopping: <ShoppingBagOutlined />,
    Saved: <BookmarkAddOutlined />,
  };
  return (
    <SideBarHolder sx={{ display: { xs: "none", md: "inline-block" } }}>
      <List dense>
        {Object.entries(sideList).map((entry) => (
          <SideListItem divider>
            <ListItemButton>
              <ListItemIcon>{entry[1]}</ListItemIcon>
              <ListItemText primary={entry[0]}></ListItemText>
            </ListItemButton>
          </SideListItem>
        ))}
      </List>
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
              padding: "5px 15px",
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
                fontSize: "1.4rem",
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
