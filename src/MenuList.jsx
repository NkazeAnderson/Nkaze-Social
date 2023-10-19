import React from "react";
import {
  BookmarkAddOutlined,
  CalendarMonthOutlined,
  Groups2Outlined,
  MailOutline,
  OndemandVideoOutlined,
  Person2Outlined,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
const sideList = {
  People: <Person2Outlined />,
  Inbox: <MailOutline />,
  Videos: <OndemandVideoOutlined />,
  Events: <CalendarMonthOutlined />,
  Groups: <Groups2Outlined />,
  Shopping: <ShoppingBagOutlined />,
  Saved: <BookmarkAddOutlined />,
};
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
function MenuList() {
  return (
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
  );
}

export default MenuList;
