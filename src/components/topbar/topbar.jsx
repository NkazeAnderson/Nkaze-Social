import "./topbar.css";
import SearchIcon from "@mui/icons-material/Search";
import PeopleIcon from "@mui/icons-material/People";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HomeIcon from "@mui/icons-material/Home";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

function Topbar() {
  return (
    <div class="topBar">
      <div className="topBarLeft">
        <div className="siteIdentity">
          <img src="/images/logo.png" alt="Logo" />
          <div>Nkaze Social</div>
        </div>
      </div>
      <div className="topBarCenter">
        <div className="search">
          <SearchIcon className="searchIcon" />
          <input
            className="searchInput"
            type="text"
            placeholder="Search people, post, vidoes, communities and more..."
          />
        </div>
      </div>
      <div className="topBarRight">
        <ul className="topBarRightNav">
          <li className="separators">|</li>
          <li className="topNavLinks">
            <HomeIcon className="topBarNotificationsIcons" />
            Home
          </li>
          <li className="separators">|</li>
          <li className="topNavLinks">
            <TrendingUpIcon className="topBarNotificationsIcons" /> Trends
          </li>
          <li className="separators">|</li>
        </ul>

        <ul className="topBarNotifications">
          <li className="topBarNotificationsitem">
            <PeopleIcon className="topBarNotificationsIcons" />
            <span className="friendBadge">1</span>
          </li>
          <li className="topBarNotificationsitem">
            <MessageIcon className="topBarNotificationsIcons" />
            <span className="messageBadge">1</span>
          </li>
          <li className="topBarNotificationsitem">
            <NotificationsIcon className="topBarNotificationsIcons" />
            <span className="infoBadge">1</span>
          </li>
        </ul>
        <div className="profileWrapper">
          <img
            className="topBarRightProfilePic"
            src="/images/profile-3.jpg"
            alt="profile picture"
          />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
