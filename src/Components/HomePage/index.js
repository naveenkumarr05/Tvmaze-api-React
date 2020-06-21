import React, { Component } from "react";
import ShowList from "../ShowList/index";
import axios from 'axios';
import InputForm from './InputForm';

var REQUEST_URL = 'http://api.tvmaze.com/shows';

class HomePage extends Component {
  state = {
    showsData: null,
    inputValue: "",
    isLoading: false,
  };

  componentDidMount() {
    this.fetchShowsData();
  }

  fetchGenresData = () => {
    const { showsData } = this.state;
    let genresType = new Set();
    if (showsData) {
      showsData.filter((show) => {
        genresType.add(...show.genres);
      });
    }
    return [...genresType];
  };

  fetchShowsData = () => {
    axios.get(REQUEST_URL)
      .then((res) => this.setState({ showsData: res.data, isLoading: false }))
      .catch(() => this.setState({ isLoading: true }));
  };

  render() {
    const { showsData } = this.state;
    const genresData = this.fetchGenresData();
    return (
      <div>
        <InputForm />
        {genresData.length ? (
          genresData.map((genreType,index) => (
            <ShowList type={genreType} shows={showsData} key={index} />
          ))
        ) : null }
      </div>
    );
  }
}

export default HomePage;
