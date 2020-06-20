import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import HomePage from './Components/HomePage'
import GenreShows from './Components/Genere';
import ShowInfo from './Components/ShowDetails';

class App extends Component {

  render() {
    return (
      < Switch >
        <Route path="/genre/:id" exact component={GenreShows} />
        <Route path="/show/:id" exact component={ShowInfo} />
        <Route path="/" exact component={HomePage} />
      </Switch >
    );
  }

}

export default App;
