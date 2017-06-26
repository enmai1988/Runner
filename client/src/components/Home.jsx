import React from 'react';

const Home = (props) => (
  <div>
    <h2>Home</h2>
    <div>
      <ul className="homeRunContainer">
        <li className="homeRunItem">Run 1 @ 6:00pm $6 <button className="btn" onClick={props.acceptRun}>Accept Run</button></li>
        <li className="homeRunItem">Run 2 @ 6:30pm $10 <button className="btn" onClick={props.acceptRun}>Accept Run</button></li>
        <li className="homeRunItem">Run 3 @ 6:15pm $16 <button className="btn" onClick={props.acceptRun}>Accept Run</button></li>
        <li className="homeRunItem">Run 4 @ 6:20pm $7 <button className="btn" onClick={props.acceptRun}>Accept Run</button></li>
        <li className="homeRunItem">Run 5 @ 7:00pm $20 <button className="btn" onClick={props.acceptRun}>Accept Run</button></li>
      </ul>
    </div>
  </div>
);

export default Home;