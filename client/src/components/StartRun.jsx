import React from 'react';

const StartRun = (props) => (
  <div>
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
      <button className="btn" type="submit">Start Run</button>
    </form>
  </div>
);

export default StartRun;