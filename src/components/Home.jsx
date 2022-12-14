import React, { Fragment } from "react";

function Links() {
  const data = [
    {
      id: "slack",
      content: "Waslead",
      link: "https://app.slack.com/client/T042F7V19Q8/D048242G0CW",
    },
    {
      id: "btn__twitter",
      content: "Twitter Link",
      link: "https://twitter.com/DevWaslead/",
    },
    {
      id: "btn__zuri",
      content: "Zuri Team",
      link: "https://training.zuri.team/",
    },
    {
      id: "books",
      content: "Zuri Books",
      link: "http://books.zuri.team/",
    },
    {
      id: "book__python",
      content: "Python Books",
      link: "https://books.zuri.team/python-for-beginners?ref_id=waslead",
    },
    {
      id: "pitch",
      content: "Background Check for Coders",
      link: "https://background.zuri.team/",
    },
    {
      id: "book__design",
      content: "Design Books",
      link: "https://books.zuri.team/design-rules",
    },
    {
      id: "contact",
      content: "Contact Me",
      link: "/contact",
    },
  ];

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

      <section className="link-section">
        {data.map((data) => (
          <a className="btn" key={data.id} id={data.id} href={data.link}>
            {data.content}
          </a>
        ))}

        <div className="links-img">
          <a
            href="https://app.slack.com/client/T042F7V19Q8/D048242G0CW"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/assets/slack.png" alt="slack logo" />
          </a>
          <a
            href="https://github.com/was-coder"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/assets/github.png" alt="github logo" />
          </a>
        </div>
      </section>
    </Fragment>
  );
}

export default Links;
