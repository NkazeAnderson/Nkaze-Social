import "./App.css";
import MainLayout from "./components/mainLayout/mainLayout";
import Topbar from "./components/topbar/topbar";

function App() {
  return (
    <div className="container">
      <Topbar />
      <MainLayout />
    </div>
  );
}

export default App;
