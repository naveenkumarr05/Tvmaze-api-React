import React, { Component } from "react";
import ShowList from "../ShowList/index";
import axios from 'axios';
import Form from './Form'
import LoaderComponent from '../Loader/index';

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

  searchInputValue = (inputValue) => {
    if (inputValue) {
      axios.get(`http://api.tvmaze.com/search/shows?q=${inputValue}`)
        .then((response) => {
          const result = response.data.map((showData) => showData.show);
          this.setState({ showsData: result, isLoading: false });
        })
        .catch(() => this.setState({ isLoading: true }));
    } 
  };

  fetchShowsData = () => {
    axios.get(REQUEST_URL)
      .then((res) => this.setState({ showsData: res.data, isLoading: false }))
      .catch(() => this.setState({ isLoading: true }));
  };

  handleChange = (e) => {
    e.preventDefault();
    const inputValue = e.target.value;
    this.setState((state) => ({ ...state, inputValue }));
    this.searchInputValue(inputValue);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = this.state.inputValue;
    this.searchInputValue(inputValue);
  };

  render() {
    const { showsData, inputValue,isLoading } = this.state;
    const genresData = this.fetchGenresData();
    return (
      <div>
        <Form handleChange={this.handleChange}
              inputValue={inputValue}
              handleSubmit={this.handleSubmit}/>
        {!isLoading ? <LoaderComponent/> : null}
        {genresData.length ? (
          genresData.map((genreType) => (
            <ShowList type={genreType} shows={showsData} key={`Genre-${genreType}`} />
          ))
        ) : null }
      </div>
    );
  }
}

export default HomePage;
