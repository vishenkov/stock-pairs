import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import About from '../components/About';
import History from './History';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/">Home</Link>
          <Link to="/about-us">About</Link>
        </header>

        <main>
          <Home />
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/:stock" component={History} />
        </main>
      </div>
    )
  }
}

export default App;
