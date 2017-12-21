import React from 'react';
//import { BrowserRouter as Router, Route } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import App from './App';
import Layout from './components/Layout';


const Routes = (
  <Router>
    <div>
      <Route exact path="/" component = {Home} />
      <Route exact path="/jose" render={props => <App user_name="jose" {...props} />} />
      <Route exact path="/damian" render={props => <App user_name="damian" {...props} />} />
      <Route exact path="/bing" render={props => <App user_name="bing" {...props} />} />
      <Route exact path="/jose/chat" render={props => <Layout user_name="jose" {...props} />} />
      <Route exact path="/damian/chat" render={props => <Layout user_name="damian" {...props} />} />
      <Route exact path="/bing/chat" render={props => <Layout user_name="bing" {...props} />} />
    </div>
  </Router>
);

export default Routes;
