import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import NavigationBar from './NavigationBar';
import '../../style/Website.scss';

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <Route exact path="/" component={LandingPage}/>
      </div>
    )
  }
}

export default App;