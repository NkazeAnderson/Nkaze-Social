import { Box, Grid, styled } from "@mui/material";
import React from "react";
import Messenger from "./messenger";
import RightBar from "./RightBar";
const StyledContentScroll = styled(Box)({
  overflowY: "scroll",
  position: "sticky",
});
function ScrollMessenger() {
  return (
    <StyledContentScroll className="contentScroll">
      <Grid container>
        <Grid item sx={{ flex: { xs: "auto", md: "8.5" }, position: "sticky" }}>
          <Messenger />
        </Grid>
        <Grid item xs={3.5} sx={{ display: { xs: "none", md: "flex" } }}>
          <RightBar />
        </Grid>
      </Grid>
    </StyledContentScroll>
  );
}

export default ScrollMessenger;
