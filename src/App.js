import { Box, styled } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/LogIn";
import ScrollContentHome from "./components/ScrollContentHome";
import ScrollContentProfile from "./components/ScrollContentProfile";
import ScrollMessenger from "./components/ScrollMessenger";
import SignUp from "./components/SignUp";
import Home from "./pages/Home";
import User from "./pages/User";

const MainContainer = styled(Box)({
  width: "100%",
  height: "100vh",
  position: "fixed",
});

function App() {
  return (
    <MainContainer>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<ScrollContentHome />} />
          <Route path="profile/:id" element={<ScrollContentProfile />} />
          <Route path="messenger/" element={<ScrollMessenger />} />
        </Route>
        <Route path="/user" element={<User />}>
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </MainContainer>
  );
}

export default App;
