import React from 'react';
import $ from 'jquery';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    var email = $('#profileEmailInput').val() || null;
    var phoneNum = $('#profilePhoneInput').val() || null;
    var location = $('#profileLocationInput').val() || null;
    //console.log(email, phoneNum, location);
    if (email !== null) {
      this.props.updateUserData(email);
      $('#profileEmailInput').val('');
    } else if (phoneNum !== null) {
      this.props.updateUserData(phoneNum);
      $('#profilePhoneInput').val('');
    } else if (location !== null) {
      this.props.updateUserData(location);
      $('#profileLocationInput').val('');
    }

  }

  render() {
    return (
      <div className="reactComponentContainer">
        <h2>Profile</h2>
        <h5>Picture: </h5>
        <img src={this.props.user.profilePic} width="200" height="60"/>
        <h5>Name: </h5>
        <p>{this.props.user.displayName}</p>
        <h5>Email: </h5>
        <p>{this.props.user.email}</p>
        <input type="text" id="profileEmailInput" placeholder="New Email..."/>
        <br></br>
        <button className="btn" onClick={this.handleSubmit}>Change Email</button>
        <br></br><br></br>
        <h5>Phone Number: </h5>
        <p>NEED</p>
        <input type="text" id="profilePhoneInput" placeholder="New Phone Number..."/>
        <br></br>
        <button className="btn" onClick={this.handleSubmit}>Change Phone Number</button>
        <br></br><br></br>
        <h5>Location: </h5>
        <p>NEED</p>
        <input type="text" id="profileLocationInput" placeholder="New Location..."/>
        <br></br>
        <button className="btn" onClick={this.handleSubmit}>Change Location</button>
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default Profile;

