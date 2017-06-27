import React from 'react';

const Profile = ({user}) => (
  <div className="reactComponentContainer">
    <h2>Profile</h2>
    <h5>Picture: </h5>
    <img src={user.profilePic} width="200" height="60"/>
    <h5>Name: </h5>
    <p>{user.displayName}</p>
    <br></br>
    <h5>Email: </h5>
    <p>{user.email}</p>
    <label>New Email</label>
    <input type="text"/>
    <br></br>
    <button className="btn">Change Email</button>
    <br></br><br></br>
    <h5>Phone Number: </h5>
    <p>NEED</p>
    <label>New Phone Number</label>
    <input type="text"/>
    <br></br>
    <button className="btn">Change Phone Number</button>
    <br></br><br></br>
    <h5>Location: </h5>
    <p>NEED</p>
    <label>New Location</label>
    <input type="text"/>
    <br></br>
    <button className="btn">Change Location</button>
  </div>
);

export default Profile;