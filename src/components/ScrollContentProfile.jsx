import { Box, Grid, styled } from "@mui/material";
import React from "react";

import ContentProfile from "./ContentProfile";
import RightBar from "./RightBar";
const StyledContentScroll = styled(Box)({
  overflowY: "scroll",
  position: "sticky",
});
function ScrollContentProfile() {
  return (
    <StyledContentScroll className="contentScroll">
      <Grid container>
        <Grid item sx={{ flex: { xs: "auto", md: "8.5" }, position: "sticky" }}>
          <ContentProfile />
        </Grid>
        <Grid item xs={3.5} sx={{ display: { xs: "none", md: "flex" } }}>
          <RightBar />
        </Grid>
      </Grid>
    </StyledContentScroll>
  );
}

export default ScrollContentProfile;
