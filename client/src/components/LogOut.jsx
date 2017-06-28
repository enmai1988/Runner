import React from 'react';

const LogOut = () => (
  <div  className="reactComponentContainer">
    <h2>LogOut</h2>
    <form method="POST" action="/logout">
      <button className="btn" type="submit">LogOut</button>
    </form>
  </div>
);

export default LogOut;
