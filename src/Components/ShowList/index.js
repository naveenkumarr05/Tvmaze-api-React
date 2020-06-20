import React from "react";
import Show from "../Show";
import { Row } from "react-bootstrap";

export default ({ type, shows }) => {
  let List = shows
    .map((show) => (
      <Show
        image={show.image ? show.image.medium : null}
        name={show.name}
        show={show}
        key={`Show-${show.id}`}
      />
    ))

  return (
    <div>
      <h2>{type}</h2>
      <Row>{List}</Row>
    </div>
  );
};
