import { Call, Info } from "@mui/icons-material";
import {
  Button,
  Box,
  Card,
  CardMedia,
  CardHeader,
  Avatar,
  IconButton,
  CardActions,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Badge,
  ListItemText,
  Divider,
  Paper,
} from "@mui/material";
import { green } from "@mui/material/colors";
import React from "react";

function RightBar() {
  return (
    <Box
      sx={{
        width: "100%",
        padding: 2,
        backgroundColor: "primaryText.main",
        borderLeft: "2px solid lightgray",
      }}
    >
      <Card sx={{ w: "100%" }}>
        <CardHeader
          avatar={<Avatar aria-label=""></Avatar>}
          action={<IconButton aria-label=""></IconButton>}
          title="Buy Pets"
          subheader="Sponsored"
          sx={{
            "& .MuiCardHeader-title": {
              fontWeight: 900,
              fontSize: "1.2rem",
              color: "secondary.main",
            },
          }}
        />
        <CardMedia
          component="img"
          image="/images/profile-2.jpg"
          height="150px"
          width={"100%"}
          sx={{ objectFit: "fill" }}
        />
        <CardContent>
          <Typography variant="subtitle" color="initial">
            Buy pets in need of new homes
          </Typography>
        </CardContent>

        <CardActions>
          <Button variant="contained" size="small" endIcon={<Info />}>
            Learn More
          </Button>
          <Button
            variant="contained"
            size="small"
            color="secondary"
            endIcon={<Call />}
          >
            Contact us
          </Button>
        </CardActions>
      </Card>
      <Divider sx={{ color: "primaryText.main" }} />
      <Paper
        elevation={9}
        sx={{
          border: "1px solid primary.main",
          "border-top-right-radius": "20px",
          "border-top-left-radius": "20px",
          margin: "5px 0px",
        }}
      >
        <Box
          sx={{
            backgroundColor: "primary.main",
            border: "1px solid primary.main",
            "border-top-right-radius": "20px",
            "border-top-left-radius": "20px",
            m: 0,
            width: "100%",
            p: 0,
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
            Active Friends
          </Typography>
        </Box>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Badge
                badgeContent={""}
                color="success"
                variant="dot"
                sx={{ "& .MuiBadge-dot": { right: "5px", top: "5px" } }}
              >
                <Avatar sx={{ cursor: "pointer" }} />
              </Badge>
            </ListItemAvatar>

            <ListItemText
              primary="John Doe"
              primaryTypographyProps={{ fontWeight: 500 }}
              sx={{ cursor: "pointer" }}
            />
          </ListItem>
        </List>
      </Paper>
    </Box>
  );
}

export default RightBar;
