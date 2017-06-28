import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import axios from 'axios';
import browserHistory from 'react-router';
//import components
import Home from './components/Home.jsx';
import StartRun from './components/StartRun.jsx';
import MyRuns from './components/MyRuns.jsx';
import Profile from './components/Profile.jsx';
import LogOut from './components/LogOut.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      runs: {},
    };
    this.acceptRun = this.acceptRun.bind(this);
  }

  componentDidMount() {
    this.getUserInfo();
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

  getUserInfo() {
    axios.get('/userinfo')
      .then(res => {
        console.log('User info: ', res.data);
        this.setState({
          user: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <Router history={browserHistory}>
        <div className="mainContainer" id="bootstrap-overrides">
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
              <img src="../logo/RunnerLogo.png" width="170"/>
            </div>
            <hr/>
          </div>
          <div className="mainBodyContainer">
            <Route exact path="/" component={() => <Home runs={this.state.runs} acceptRun={this.acceptRun} />}/>
            <Route path="/startRun" component={() => <StartRun/>}/>
            <Route path="/myRuns" component={() => <MyRuns/>}/>
            <Route path="/profile" component={() => <Profile user={this.state.user}/>}/>
            <Route path="/logOut" component={() => <LogOut/>}/>
          </div>
        </div>
      </Router>
    );
  }

}

ReactDOM.render(<App />, document.getElementById('app'));