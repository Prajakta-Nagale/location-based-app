import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import MapScreen from './components/MapScreen';
import DetailsScreen from './components/DetailsScreen';
import MoviesScreen from './components/MoviesScreen';

const App = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {isLoggedIn ? <Redirect to="/map" /> : <LoginForm />}
        </Route>
        <Route path="/map" component={MapScreen} />
        <Route path="/details" component={DetailsScreen} />
        <Route path="/movies" component={MoviesScreen} />
      </Switch>
    </Router>
  );
};

export default App;
