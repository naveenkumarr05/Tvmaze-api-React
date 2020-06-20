import React, { Component } from "react";
import Show from "../Show";
import { Redirect } from "react-router-dom";
import axios from 'axios';
import LoaderComponent from '../Loader/index';

class GenreShows extends Component {
  state = {
    backToprevious: false,
    shows: this.props.location.shows,
  };

  componentDidMount() {
   this.fetchShowData();
  }

  fetchShowData() {
    const { shows } = this.state;
    const type = this.props.match.params.id;
    if (!shows) {
        axios.get("http://api.tvmaze.com")
        .then((response) => {
                this.setState({ shows: response.data });
        })
        .catch(() => this.setState({ error: true }));
    }
  }

  onBacktoPrevious = () => {
    this.setState({ backToprevious: true });
  };

  render() {
    const { shows, backToprevious } = this.state;
    const { match } = this.props;
    return shows ? (
      <div>
        <h1>{match.params.id}</h1>
          {shows.map((show) => (
            <Show
              image={show.image ? show.image.medium : null}
              name={show.name}
              show={show}
              key={`Show-${show.id}`}
            />
          ))}
        {backToprevious ? <Redirect to="/" /> : null}
      </div>
    ) : <LoaderComponent/>
  }
}

export default GenreShows;
