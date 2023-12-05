import { Box, Grid } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import { useSelector, useDispatch} from "react-redux";
import { get } from "../utils/BackEndRequests";
import { userActions } from "../store/userSlice";
import { useEffect } from "react";

function Home() {
  const logged_in = useSelector((state) => state.user.logged_in);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(()=>{
    if (!logged_in){
      get("/api/auth/check")
      .then((result)=>{
        if  (!result.data.logged_in){
          navigate("/user/login")
          dispatch(userActions.logout())
        }  
        else {
          dispatch(userActions.login(result.data.user))
        }
      }).catch(err=>{
        navigate("/user/login")
        dispatch(userActions.logout())
      })
    }
  }

  , [logged_in])
  

  return (
    <>
    
    
    {logged_in &&   <Box sx={{ position: "relative", width: "100%" }}>
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
    }
    </>
  );
}

export default Home;
