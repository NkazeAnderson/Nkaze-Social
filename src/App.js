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

function App() {
  return (
    <MainContainer>
      <TopBar></TopBar>
      <Grid container sx={{ mt: "53px" }}>
        <Grid
          item
          xs={3}
          sx={{ display: { xs: "none", md: "flex" }, position: "sticky" }}
        >
          <SideBar />
        </Grid>
        <Grid item sx={{ flex: { xs: "auto", md: "5.5" }, position: "sticky" }}>
          <Content />
        </Grid>
        <Grid item xs={3.5} sx={{ display: { xs: "none", md: "flex" } }}>
          <RightBar />
        </Grid>
      </Grid>
    </MainContainer>
  );
}

export default App;
