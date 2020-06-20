import React, { Component } from "react";
import Show from "../Show";
import { Row, Container, Spinner } from "react-bootstrap";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import axios from 'axios';

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
    console.log("Match",match)
    return shows ? (
      <Container>
        <h1>{match.params.id}</h1>
        <Row>
          {shows.map((show) => (
            <Show
              image={show.image ? show.image.medium : null}
              name={show.name}
              show={show}
              key={`Show-${show.id}`}
            />
          ))}
        </Row>
        {backToprevious ? <Redirect to="/" /> : null}
      </Container>
    ) : (
      <Spinner className="spinner" animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  }
}

export default GenreShows;
