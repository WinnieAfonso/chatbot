import React from "react";

import "./link.css";

const link = (props) => {
  const linkMarkup = props.options.map((link) => (
    <li key={link.id} className="link-item">
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="link-item-url"
      >
        {link.text}
      </a>
    </li>
  ));

  return <ul className="link">{linkMarkup}</ul>;
};

export default link;
