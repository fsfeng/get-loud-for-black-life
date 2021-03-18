import React from "react";
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Card = ({ entry }) => {
  return (
    <div>
      <h2>{entry.fields.title}</h2>
    </div>
  );
};

export default Card;
