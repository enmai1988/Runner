import React from 'react';

const LogOut = () => (
  <div>
    <h2>LogOut</h2>
    <form method="POST" action="/logout">
      <button type="submit">LogOut</button>
    </form>
  </div>
);

export default LogOut;
