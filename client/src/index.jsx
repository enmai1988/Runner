import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import axios from 'axios';
import browserHistory from 'react-router';
import $ from 'jquery';
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
      runs: [ 
        {
          id: 1,
          userid: 1,
          runnerid: 4,
          amount: '$20',
          location: 'San Francisco',
          status: 'available',
          title: 'walk my dog',
          description: 'I would like you to walk my dog for 30 mins within the next 2 hours.  Key is under my mat',
        },
        {
          id: 2,
          userid: 3,
          runnerid: 1,
          amount: '$30',
          location: 'San Francisco',
          status: 'available',
          title: 'get groceries',
          description: 'I would like you to get my groceries at safeway within the next 3 hours.  I will send you the address and list.',
        },
        {
          id: 3,
          userid: 4,
          runnerid: 2,
          amount: '$7',
          location: 'San Francisco',
          status: 'available',
          title: 'get me coffee',
          description: 'I would like you to get me 3 coffees in the next 30 mins.  I will give you the list and the address.',
        },
        {
          id: 4,
          userid: 2,
          runnerid: 3,
          amount: '$60',
          location: 'San Francisco',
          status: 'available',
          title: 'mow my lawn',
          description: 'I would like you to mow my lawn tomorrow.  it is one acre and I need it done by 2pm.' ,
        } 
      ]
    };

    this.acceptRun = this.acceptRun.bind(this);
    this.getUserRuns = this.getUserRuns.bind(this);
    this.getActiveRuns = this.getActiveRuns.bind(this);
    this.updateUserData = this.updateUserData.bind(this);
    this.startRun = this.startRun.bind(this);
  }

  componentDidMount() {
    this.getUserInfoFromFB();
  }

  //POST REQUESTS //////////////////////////////////////////////////////////
  acceptRun(runId) {
    axios.post('/acceptrun', {runId: runId, runnerId: this.state.user.fbId})
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  updateUserData() {
    axios.post('/userinfo', {//user info
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  startRun() {
    console.log($('#startRunForm').serializeArray());
    // axios.post('/startrun', {})
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }

  //GET REQUESTS ///////////////////////////////////////////////////////////
  getUserInfoFromFB() {
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

  getUserRuns() {

  }

  getActiveRuns() {

  }

  updateUserInfo(e) {

  }

  //RENDER /////////////////////////////////////////////////////////////////
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
            <Route path="/startRun" component={() => <StartRun />}/>
            <Route path="/myRuns" component={() => <MyRuns runs={this.state.runs}/>}/>
            <Route path="/profile" component={() => <Profile user={this.state.user}/>}/>
            <Route path="/logOut" component={() => <LogOut/>}/>
          </div>
        </div>
      </Router>
    );
  }

}

ReactDOM.render(<App />, document.getElementById('app'));