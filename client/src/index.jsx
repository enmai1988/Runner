import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
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
      user: {
        id: 1,
        fbId: 324234,
        firstName: 'Kai',
        lastName: 'Mashima',
        displayName: 'Kai Mashima',
        gender: 'male',
        rating: 5,
        profilePic: null,
        profileUrl: null,
        location: 'San Francisco',
        phone: '6508155855',
        email: 'kaiomashima@gmail.com',
      },
      runs: [ 
        {
          id: 1,
          userId: 1,
          runnerId: null,
          amount: '$20',
          location: 'San Francisco',
          status: 'available',
          title: 'walk my dog',
          description: 'I would like you to walk my dog for 30 mins within the next 2 hours.  Key is under my mat',
          expectedFinishTime: '6:30PM',
          startTime: '6:00PM',
          finishTime: null,
        },
        {
          id: 2,
          userId: 3,
          runnerId: null,
          amount: '$30',
          location: 'San Francisco',
          status: 'available',
          title: 'get groceries',
          description: 'I would like you to get my groceries at safeway within the next 3 hours.  I will send you the address and list.',
          expectedFinishTime: '6:30PM',
          startTime: '6:00PM',
          finishTime: null,
        },
        {
          id: 3,
          userId: 4,
          runnerId: null,
          amount: '$7',
          location: 'San Francisco',
          status: 'available',
          title: 'get me coffee',
          description: 'I would like you to get me 3 coffees in the next 30 mins.  I will give you the list and the address.',
          expectedFinishTime: '6:30PM',
          startTime: '6:00PM',
          finishTime: null,
        },
        {
          id: 4,
          userId: 2,
          runnerId: null,
          amount: '$60',
          location: 'San Francisco',
          status: 'available',
          title: 'mow my lawn',
          description: 'I would like you to mow my lawn tomorrow.  it is one acre and I need it done by 2pm.',
          expectedFinishTime: '6:30PM',
          startTime: '6:00PM',
          finishTime: null,
        } 
      ],
      availableRuns: [],
      activeRuns: [],
      completedRuns: [],
      modalIsOpen: false
    };

    //post requests
    this.acceptRun = this.acceptRun.bind(this);
    this.startRun = this.startRun.bind(this);
    this.updateUserInfo = this.updateUserInfo.bind(this);
    this.signupNewUser = this.signupNewUser.bind(this);

    //get requests
    this.getStartedRuns = this.getStartedRuns.bind(this);
    this.getAvailableRuns = this.getAvailableRuns.bind(this);
    this.getFinishedRuns = this.getFinishedRuns.bind(this);
    this.getUserInfoFromFB = this.getUserInfoFromFB.bind(this);
    this.getUserInfo = this.getUserInfo.bind(this);

    //modal 
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.getUserInfoFromFB();
    this.checkForNullUserValues();

    //GET user info from db
    //this.getUserInfo();

    //GET all types of runs
    //this.getAvailableRuns();
    //this.getFinishedRuns();
    //this.getStartedRuns();
  }

  checkForNullUserValues() {
    var user = this.state.user;
    var nullExist = false;
    for (var prop in this.state.user) {
      if (user[prop] === null) {
        nullExist = true;
      }
    }
    if (nullExist === true) {
      this.openModal();
    }
  }

  //POST REQUESTS //////////////////////////////////////////////////////////
  //fix to send all user data
  updateUserInfo(data) {
    console.log('updated user data', data);
    // axios.post('/user/info', data)
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }

  signupNewUser(e) {
    e.preventDefault();
    var data = {};
    var form = document.getElementById('signupNewUserForm');
    var formData = new FormData(form);
    var iterator = formData.entries();
    for (var pair of formData.entries()) {
      data[pair[0]] = pair[1];
    }
    var obj = Object.assign({}, data, this.user);
    console.log('signup user data', obj);
    // axios.post('/user/signup', {obj})
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    this.closeModal();
  }

  startRun(data) {
    data.userid = this.state.user.fbId;
    data.runnerId = null;
    data.id = null;
    data.status = 'available';
    data.finishTime = null;
    console.log('the data has arrived', data);
    // axios.post('/runs/start', {data})
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }

  acceptRun(run) {
    console.log(run);
    console.log(this.state.user.id);
    run.runnerId = this.state.user.id;
    console.log('run data', run);
    // axios.post('/runs/accept', {run})
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }

  //GET REQUESTS ///////////////////////////////////////////////////////////
  //USERS
  getUserInfoFromFB() {
    axios.get('/user/info/fb')
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

  getUserInfo() {
    // axios.get('/user/info')
    //   .then(res => {
    //     console.log('User info: ', res.data);
    //     this.setState({
    //       user: res.data
    //     });
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }

  //RUNS
  getAvailableRuns() {
    axios.get('/runs/available')
      .then(res => {
        console.log('available runs: ', res.data);
        this.setState({
          availableRuns: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  getStartedRuns() {
    axios.get('/runs/started')
      .then(res => {
        console.log('active runs: ', res.data);
        this.setState({
          activeRuns: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  getFinishedRuns() {
    axios.get('/runs/finished')
      .then(res => {
        console.log('User info: ', res.data);
        this.setState({
          completedRuns: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  //modal
  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  //RENDER /////////////////////////////////////////////////////////////////
  render() {
    return (
      <Router history={browserHistory}>
        <div className="mainContainer" id="bootstrap-overrides">
          <div className="topBarContainer">
            <div className="dropdown">
              <img src="../logo/menu.png" alt="Menu" width="75"></img>
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
            <Route path="/startRun" component={() => <StartRun startRun={this.startRun}/>}/>
            <Route path="/myRuns" component={() => <MyRuns runs={this.state.runs}/>}/>
            <Route path="/profile" component={() => <Profile user={this.state.user} updateUserData={this.updateUserInfo} />}/>
            <Route path="/logOut" component={() => <LogOut/>}/>
          </div>

          <Modal 
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            contentLabel="Sign Up Modal"
          > 
            <div>
              <h2 ref={subtitle => this.subtitle = subtitle}>Sign Up For</h2>
              <img src="../logo/RunnerLogo.png" width="170"/>
              <br></br><br></br>
              <form id="signupNewUserForm" onSubmit={this.signupNewUser}>
                <label>Phone Number</label>
                <input type="text" name="phoneNumber" required />
                <label>Email</label>
                <input type="text" name="email" required />
                <label>Location</label>
                <input type="text" name="location" required />
                <br></br>
                <button className="btn" type="submit">Sign Up</button>
              </form>
            </div>
          </Modal>
        </div>
      </Router>
    );
  }

}

ReactDOM.render(<App />, document.getElementById('app'));