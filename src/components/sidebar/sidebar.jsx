import {
  DynamicFeedOutlined,
  MailOutline,
  GroupOutlined,
  OndemandVideoOutlined,
  WorkOutline,
  CalendarMonthOutlined,
  BookmarkBorderOutlined,
  PermDeviceInformationOutlined,
  AddLinkOutlined,
} from "@mui/icons-material";
import "./sidebar.css";

function LeftSideBar() {
  return (
    <div>
      <ul className="sideBarList">
        <li className="sideBarListItem">
          <DynamicFeedOutlined className="sideBarIcon" /> Feed
        </li>
        <li className="sideBarListItem">
          <OndemandVideoOutlined className="sideBarIcon" /> Videos
        </li>
        <li className="sideBarListItem">
          <MailOutline className="sideBarIcon" /> Inbox
        </li>
        <li className="sideBarListItem">
          <GroupOutlined className="sideBarIcon" /> Groups
        </li>
        <li className="sideBarListItem">
          <WorkOutline className="sideBarIcon" /> Jobs
        </li>
        <li className="sideBarListItem">
          <CalendarMonthOutlined className="sideBarIcon" /> Appointments
        </li>
        <li className="sideBarListItem">
          <BookmarkBorderOutlined className="sideBarIcon" /> Bookmark
        </li>
        <li className="sideBarListItem">
          <PermDeviceInformationOutlined className="sideBarIcon" /> News
        </li>
      </ul>
      <div className="sideBtnWithHr">
        <button className="sideBarMoreBtn">
          <AddLinkOutlined /> More
        </button>
        <div className="hrHolder">
          <hr className="sideBarDivider" />
        </div>
      </div>
      <div className="newMessages">
        <div>
          <div className="sideBarMsgHeader">
            <div className="sideBarMsgH2">
              <h2>New messages</h2>
            </div>
          </div>
          <ul class="messageList">
            <li className="messageListItem">
              <div className="friendPicHolder">
                <img
                  className="friendPic"
                  src="/images/profile-2.jpg"
                  alt="friendPic"
                />
                <div className="friendStatus"></div>
              </div>
              <div className="friendMesssagePreview">
                <div className="friendAndMesssage">
                  <span className="messageHeading">
                    <b>Anderson Sent you a message</b>
                  </span>
                  <div className="messagePreview">
                    <span>Hello dear recruiter....</span>
                    <div className="messagePreviewCount">
                      <span className="msgCount">10</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="messageListItem">
              <div className="friendPicHolder">
                <img
                  className="friendPic"
                  src="/images/profile-2.jpg"
                  alt="friendPic"
                />
                <div className="friendStatus"></div>
              </div>
              <div className="friendMesssagePreview">
                <div className="friendAndMesssage">
                  <span className="messageHeading">
                    <b>Anderson Sent you a message</b>
                  </span>
                  <div className="messagePreview">
                    <span>Hello dear recruiter....</span>
                    <div className="messagePreviewCount">
                      <span className="msgCount">10</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="messageListItem">
              <div className="friendPicHolder">
                <img
                  className="friendPic"
                  src="/images/profile-2.jpg"
                  alt="friendPic"
                />
                <div className="friendStatus"></div>
              </div>
              <div className="friendMesssagePreview">
                <div className="friendAndMesssage">
                  <span className="messageHeading">
                    <b>Anderson Sent you a message</b>
                  </span>
                  <div className="messagePreview">
                    <span>Hello dear recruiter....</span>
                    <div className="messagePreviewCount">
                      <span className="msgCount">10</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="messageListItem">
              <div className="friendPicHolder">
                <img
                  className="friendPic"
                  src="/images/profile-2.jpg"
                  alt="friendPic"
                />
                <div className="friendStatus"></div>
              </div>
              <div className="friendMesssagePreview">
                <div className="friendAndMesssage">
                  <span className="messageHeading">
                    <b>Anderson Sent you a message</b>
                  </span>
                  <div className="messagePreview">
                    <span>Hello dear recruiter....</span>
                    <div className="messagePreviewCount">
                      <span className="msgCount">15</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="messageListItem">
              <div className="friendPicHolder">
                <img
                  className="friendPic"
                  src="/images/profile-2.jpg"
                  alt="friendPic"
                />
                <div className="friendStatus"></div>
              </div>
              <div className="friendMesssagePreview">
                <div className="friendAndMesssage">
                  <span className="messageHeading">
                    <b>Anderson Sent you a message</b>
                  </span>
                  <div className="messagePreview">
                    <span>Hello dear recruiter....</span>
                    <div className="messagePreviewCount">
                      <span className="msgCount">6</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="messageListItem">
              <div className="friendPicHolder">
                <img
                  className="friendPic"
                  src="/images/profile-2.jpg"
                  alt="friendPic"
                />
                <div className="friendStatus"></div>
              </div>
              <div className="friendMesssagePreview">
                <div className="friendAndMesssage">
                  <span className="messageHeading">
                    <b>Anderson Sent you a message</b>
                  </span>
                  <div className="messagePreview">
                    <span>Hello dear recruiter....</span>
                    <div className="messagePreviewCount">
                      <span className="msgCount">9</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="messageListItem">
              <div className="friendPicHolder">
                <img
                  className="friendPic"
                  src="/images/profile-2.jpg"
                  alt="friendPic"
                />
                <div className="friendStatus"></div>
              </div>
              <div className="friendMesssagePreview">
                <div className="friendAndMesssage">
                  <span className="messageHeading">
                    <b>Anderson Sent you a message</b>
                  </span>
                  <span className="messagePreview">
                    Hello dear recruiter....
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LeftSideBar;
