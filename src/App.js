import { Box, styled, Typography, Button, Grid } from "@mui/material";
import { green } from "@mui/material/colors";
import "./App.css";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

const MainContainer = styled(Box)({
  width: "100%",
  height: "100vh",
  backgroundColor: green[500],
});

function App() {
  return (
    <MainContainer>
      <TopBar></TopBar>
      <Grid container>
        <Grid item xs={3}>
          <SideBar />
        </Grid>
        <Grid item xs={5}>
          {" "}
          Central
        </Grid>
        <Grid item xs={4}>
          {" "}
          Right Side bar
        </Grid>
      </Grid>
    </MainContainer>
  );
}

export default App;
