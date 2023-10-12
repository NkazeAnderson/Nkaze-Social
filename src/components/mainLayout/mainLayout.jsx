import LeftSideBar from "../sidebar/sidebar";
import "./mainLayout.css";

function MainLayout() {
  return (
    <div className="mainContainer">
      <div className="leftSideBarContainer">
        <LeftSideBar />
      </div>
      <div className="feedContainer">Feeds</div>
      <div className="rightSideContainer">Right Side Bar</div>
    </div>
  );
}

export default MainLayout;
