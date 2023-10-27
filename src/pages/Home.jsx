import { Box, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import ScrollContentHome from "../components/ScrollContentHome";
import ScrollContentProfile from "../components/ScrollContentProfile";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";

function Home() {
  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      <TopBar></TopBar>
      <Grid container sx={{ mt: "53px" }}>
        <Grid item xs={3} sx={{ display: { xs: "none", md: "flex" } }}>
          <Box sx={{ position: "sticky", width: "100%" }}>
            <SideBar />
          </Box>
        </Grid>
        <Grid item sx={{ flex: { xs: "auto", md: "9" } }}>
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
