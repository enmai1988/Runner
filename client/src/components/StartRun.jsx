import React from 'react';

const StartRun = (props) => (
  <div className="reactComponentContainer">
    <form method="POST" action="/startRun">
      <h2>StartRun</h2>
      <label>Title:</label>
      <input type="text"/>
      <label>Location</label>
      <input type="text"/>
      <label>Payout</label>
      <input type="text"/>
      <label>Description</label>
      <input type="text"/>
      <br></br>
      <button className="btn" type="submit">Start Run</button>
    </form>
  </div>
);

export default StartRun;