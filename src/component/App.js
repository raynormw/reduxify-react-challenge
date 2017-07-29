import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

import './App.css';
import Home from './Home';
import Github from './Github';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/github" component={Github} />
          <Route component={NoMatch}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

const NoMatch = ({ location }) => (
  <div className="home">
    <h2>404</h2>
    <h3>Uh oh, there is nothing here..</h3>
    <Link to="/">
      <button className="btn-home">
        Back to Home
      </button>
    </Link>
  </div>
)

export default App;
