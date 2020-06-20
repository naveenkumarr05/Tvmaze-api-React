import React from "react";
import { Link } from "react-router-dom";


function Show({ image, name, show }) {
  return (
    <div className="column_pic">
      <Link to={{ pathname: `/show/${show.id}` }}>
        <img src={image} style={{ width: "100%" }} />
        <div className="show_name">{name}</div>
      </Link>
    </div>
  );
}

export default Show;
