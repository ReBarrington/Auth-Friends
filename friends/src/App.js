import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import { PrivateRoute } from './components/PrivateRoute';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Link to='/login'>Login Page</Link>
        <Link to='/private-route'> Friends(Private Route) </Link>
        <Switch>
          <PrivateRoute exact path='/private-route' component={FriendsList} />
          <Route exact path='/login' component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
