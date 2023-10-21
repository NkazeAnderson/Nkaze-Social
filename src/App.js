import { Box, styled, Typography, Button, Grid, Stack } from "@mui/material";
import { green } from "@mui/material/colors";
import "./App.css";
import Content from "./Content";
import RightBar from "./RightBar";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

const MainContainer = styled(Box)({
  width: "100%",
  height: "100vh",
  backgroundColor: green[500],
  position: "fixed",
});
const StyledContentScroll = styled(Box)({
  overflowY: "scroll",
  position: "sticky",
});

function App() {
  return (
    <MainContainer>
      <Box sx={{ position: "relative", width: "100%" }}>
        <TopBar></TopBar>
        <Grid container sx={{ mt: "53px" }}>
          <Grid item xs={3} sx={{ display: { xs: "none", md: "flex" } }}>
            <Box sx={{ position: "sticky", width: "100%" }}>
              <SideBar />
            </Box>
          </Grid>
          <Grid item sx={{ flex: { xs: "auto", md: "9" } }}>
            <StyledContentScroll className="contentScroll">
              <Grid container>
                <Grid
                  item
                  sx={{ flex: { xs: "auto", md: "8.5" }, position: "sticky" }}
                >
                  <Content />
                </Grid>
                <Grid
                  item
                  xs={3.5}
                  sx={{ display: { xs: "none", md: "flex" } }}
                >
                  <RightBar />
                </Grid>
              </Grid>
            </StyledContentScroll>
          </Grid>
        </Grid>
      </Box>
    </MainContainer>
  );
}

export default App;
