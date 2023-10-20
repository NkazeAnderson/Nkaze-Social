import { Button } from "@mui/base";
import {
  Box,
  Card,
  CardMedia,
  CardHeader,
  Avatar,
  IconButton,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
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
        <CardMedia
          component="img"
          image="/images/profile-2.jpg"
          height="150px"
          width={"100%"}
          sx={{ objectFit: "fill" }}
        />
        <CardHeader
          avatar={<Avatar aria-label=""></Avatar>}
          action={<IconButton aria-label=""></IconButton>}
          title="Buy Pets"
          subheader="Sponsored"
        />

        <CardActions>
          <Button variant="filled" color="secondary.main">
            Learn more
          </Button>
          <Button variant="filled" color="secondary.main">
            Get a quote
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default RightBar;
