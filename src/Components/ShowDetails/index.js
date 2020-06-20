import React, { Component } from "react";
import axios from 'axios';
import ShowCard from "../ShowCard/index";
import LoaderComponent from '../Loader';

class ShowInfo extends Component {
  state = {
    show: this.props.location.show,
  };

  componentDidMount() {
    const { show } = this.state;
    const id = this.props.match.params.id;
    if (!show) {
      axios.get(`http://api.tvmaze.com/shows/${id}`)
        .then((res) => this.setState({ show: res.data }))
        .catch(() => this.setState({ error: true }));
    }
  }

  render() {
    const { show } = this.state;
    return  show ? (
      <div>
          <h3>{show.name}</h3>
          <img
            className="infoImage"
            src={show.image ? show.image.medium : null}
          />
          <p>{show.summary}</p>
          <ShowCard show={show} />
      </div>
    ): <LoaderComponent/>;
  }
}

export default ShowInfo;
