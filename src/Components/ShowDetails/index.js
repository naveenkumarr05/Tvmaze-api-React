import React, { Component } from "react";
import axios from 'axios';
import ShowCard from "../ShowCard/index";

class ShowInfo extends Component {
  
  state = {
    show: null,
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`http://api.tvmaze.com/shows/${id}`)
        .then((res) => this.setState({ show: res.data }))
        .catch(() => this.setState({ error: true }));
  }

  render() {
    const { show } = this.state;
    return (
      <div>
        {show !== null &&
          <div>
            <h3>{show.name}</h3>
            <img
              className="image_display"
              src={show.image.medium}
            />
            <p>{show.summary}</p>
            <ShowCard show={show} />
          </div>}
      </div>
    );
  }
}

export default ShowInfo;