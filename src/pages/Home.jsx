import { Box, Grid } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import { useSelector, useDispatch} from "react-redux";
import { get } from "../utils/BackEndRequests";
import { userActions } from "../store/userSlice";
import { createContext, useContext, useEffect, useRef, useState} from "react";
import { io } from "socket.io-client";

export const SocketContext = createContext()

function Home() {
  const logged_in = useSelector((state) => state.user.logged_in);
  const user = useSelector((state) => state.user.user);
  const socket_id = useSelector((state) => state.user.socket_id);
  const sockChange= sessionStorage.getItem("socketID")
  const [change, setChange] = useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const socket = useRef("") 
  console.log(sockChange)
 
  
  socket.current.on && socket.current.on("welcome", (id)=>{
      console.log("Welcome running again " + socket.current.id)
      if (sockChange != id){
        sessionStorage.setItem("socketID", id)
        console.log("Changed to " + sessionStorage.getItem("socketID"))
        setChange(!change)
      }
    })
 
  useEffect(()=>{
   socket.current.emit && socket.current.emit("addUser", user._id)
   console.log("ADDing to " + sessionStorage.getItem("socketID"))
  }, [change])

  console.log("Home running again")
  useEffect(()=>{
    console.log("Effect running again")
    if (!logged_in){
      get("/api/auth/check")
      .then((result)=>{
        if  (!result.data.logged_in){
          navigate("/user/login")
          dispatch(userActions.logout())
          console.log("Error with check No Data Returned")
        }  
        else {
          dispatch(userActions.login(result.data.user))
         socket.current = io("ws://localhost:7000")
        }
      }).catch(err=>{
        console.log("Error with check")
        navigate("/user/login")
        dispatch(userActions.logout())
      })
    }
    else{
      socket.current = io("ws://localhost:7000")
    }
  }

  , [logged_in])
  

  return (
    <>
    <SocketContext.Provider value={socket.current}>

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
    </SocketContext.Provider>
    </>
  );
}

export default Home;
