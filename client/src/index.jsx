import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import axios from 'axios';
//import components
import Home from './components/Home.jsx';
import StartRun from './components/StartRun.jsx';
import MyRuns from './components/MyRuns.jsx';
import Profile from './components/Profile.jsx';
import LogOut from './components/LogOut.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}

  }


  //render
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/startRun">Start Run</Link></li>
            <li><Link to="/myRuns">My Runs</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/logOut">Log Out</Link></li>
          </ul>

        <hr/>
        <Route exact path="/" component={Home}/>
        <Route path="/startRun" component={StartRun}/>
        <Route path="/myRuns" component={MyRuns}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/logOut" component={LogOut}/>
        </div>
      </Router>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('app'));