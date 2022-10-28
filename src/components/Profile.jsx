import React, { Fragment } from "react";

function Profile() {
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
