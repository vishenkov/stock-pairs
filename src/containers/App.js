import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../components/About';
import Welcome from '../components/Welcome';
import NavBar from '../components/NavBar';
import Pairs from './Pairs';
import History from './History';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <NavBar />
        </header>

        <main className="row">

          <div className="col-4">
            <Pairs />
          </div>

          <div className="col-8">
            <Switch>
              <Route exact path="/" component={Welcome}/>
              <Route exact path="/about" component={About}/>
              <Route path="/:stock" component={History}/>
            </Switch>
          </div>
        </main>

      </div>
    )
  }
}

export default App;
