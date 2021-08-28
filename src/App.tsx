import React, {Component} from 'react';
import './App.css';
import {Button, Card, CardActionArea, CardMedia, Paper, Typography} from '@material-ui/core';
import Image from 'material-ui-image';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom"

//Pages
import MainPage from "./pages/MainPage"
import WelcomePage from './pages/WelcomePage';
import NotFoundPage from './pages/404'
import Contact from "./pages/Contact";


class App extends Component {
  render() {
    return (

        <Router>
          <Switch>
            <Route exact path="/" component={MainPage}/>
            <Route exact path="/404" component={NotFoundPage}/>
            <Route exact path="/WelcomePage" component={WelcomePage}/>
            <Route exact path="/Contact" component={Contact}/>
            <Redirect to="/404"/>
          </Switch>
        </Router>

    )
  }
}

export default App;
