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
    super(props);

    this.state = {};
    this.acceptRun = this.acceptRun.bind(this);
    this.acceptRun = this.acceptRun.bind(this);
  }

  acceptRun(e) {
    var runId = 7;
    var runnerId = 2;
    axios.post('/runs', {runId: runId, runnerId: runnerId})
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  startRun(e) {
    var form = e.target.value;
    console.log(form);
    // var data = {
    //   title: ,
    //   description: ,
    //   location: ,
    //   payout: ,
    // };
  }

  render() {
    return (
      <Router>
        <div className="mainTopContainer">
          <div className="topBarContainer">
            <div className="dropdown">
              <button className="dropbtn">Menu</button>
              <div className="dropdown-content">
                <Link to="/">Home</Link>
                <Link to="/startRun">Start Run</Link>
                <Link to="/myRuns">My Runs</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/logOut">Log Out</Link>
              </div>
            </div>
            <div className="logo">
              <img src="../logo/RunnerLogo.png" width="200" height="60"/>
            </div>
          </div>

          <hr/>
          <Route exact path="/" component={() => <Home acceptRun={this.acceptRun} />}/>
          <Route path="/startRun" component={() => <StartRun/>}/>
          <Route path="/myRuns" component={() => <MyRuns/>}/>
          <Route path="/profile" component={() => <Profile/>}/>
          <Route path="/logOut" component={() => <LogOut/>}/>
        </div>
      </Router>
    );
  }

}

ReactDOM.render(<App />, document.getElementById('app'));


        
          // <ul>
          //   <li><Link to="/">Home</Link></li>
          //   <li><Link to="/startRun">Start Run</Link></li>
          //   <li><Link to="/myRuns">My Runs</Link></li>
          //   <li><Link to="/profile">Profile</Link></li>
          //   <li><Link to="/logOut">Log Out</Link></li>
          // </ul>