import React from 'react';

const Profile = () => (
  <div>
    <h2>Profile</h2>
    <p>Name: </p>
    <p>Frank Test</p>
    <br></br>
    <p>Email: </p>
    <p>Frank@test.com</p>
    <label>New Email</label>
    <input type="text"/>
    <button>Change Email</button>
    <br></br>
    <br></br>
    <p>Phone Number: </p>
    <p>(415)555-5555</p>
    <label>New Phone Number</label>
    <input type="text"/>
    <button>Change Phone Number</button>
    <br></br>
    <br></br>
    <p>Location: </p>
    <p>SOMA, San Francisco</p>
    <label>New Location</label>
    <input type="text"/>
    <button>Change Location</button>
  </div>
);

export default Profile;