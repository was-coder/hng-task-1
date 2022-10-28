import React, { Fragment, useState } from "react";

function Profile() {
  const [username, setUsername] = useState(false);

  const handleEnter = () => {
    setUsername(true);
  };

  const handleLeave = () => {
    setUsername(false);
  };

  return (
    <Fragment>
      <header className="profile-header">
        <div className="profile-img-div">
          <img
            src="/assets/wasiu.jfif"
            alt="Wasiu's Profile"
            id="profile__img"
          />
          <img src="/assets/camera.png" alt="Hover camera" id="camera__img" />
        </div>
        <h1 id="twitter" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
          DevWaslead
        </h1>
        <span id="slack">{username ? "Waslead" : null}</span>

        <div className="icon-div" id="mobile-share">
          <img
            src="/assets/mobile-share.png"
            alt="share icon"
            className="share"
          />
        </div>

        <div className="icon-div" id="desktop-share">
          <img
            src="/assets/desktop-share.png"
            alt="desktop-share icon"
            className="share"
          />
          <div className="share-link">Share Link</div>
        </div>
      </header>
    </Fragment>
  );
}

export default Profile;
