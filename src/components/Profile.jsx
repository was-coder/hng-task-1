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
      <section className="profile-section">
        <img src="asset/wasiu.jfif" alt="Wasiu's Profile" id="profile__img" />
        <h1 id="twitter" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
          DevWaslead
        </h1>
        <span id="slack">{username ? "Waslead" : null}</span>
        <div className="icon-div">
          <img src="asset/share.png" alt="share icon" id="share" />
        </div>
      </section>
    </Fragment>
  );
}

export default Profile;
