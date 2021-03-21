import React from 'react';

const Gift = ({ id, title, url }) => {
  return (
    <a href={`#${id}`} className="wrapper" id={id}>
      <img src={url} alt={title} />
      <div>{title}</div>
    </a>
  );
};

export default Gift;
