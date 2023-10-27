import { Box, styled } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ScrollContentHome from "./components/ScrollContentHome";
import ScrollContentProfile from "./components/ScrollContentProfile";
import Home from "./pages/Home";

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
        </Route>
      </Routes>
    </MainContainer>
  );
}

export default App;
