import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Link to='/login'>Login Page</Link>
        <Link to='/private-route'> Friends(Private Route) </Link>
        <Switch>
          <Route exact path='/private-route' component={PrivateRoute} />
          <Route exact path='/login' component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
