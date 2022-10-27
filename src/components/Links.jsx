import React, { Fragment } from "react";

function Links() {
  const data = [
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
  ];

  return (
    <Fragment>
      <section className="link-section">
        {data.map((data) => (
          <a
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
            key={data.id}
            href={data.link}
          >
            {data.content}
          </a>
        ))}
      </section>
    </Fragment>
  );
}

export default Links;
