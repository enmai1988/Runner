import React from 'react';

const Home = (props) => (
  <div>
    <h2>Home</h2>
    <ul>
      <li>Run 1 @ 6:00pm $6 <button onClick={props.acceptRun}>Accept Run</button></li>
      <li>Run 2 @ 6:30pm $10 <button onClick={props.acceptRun}>Accept Run</button></li>
      <li>Run 3 @ 6:15pm $16 <button onClick={props.acceptRun}>Accept Run</button></li>
      <li>Run 4 @ 6:20pm $7 <button onClick={props.acceptRun}>Accept Run</button></li>
      <li>Run 5 @ 7:00pm $20 <button onClick={props.acceptRun}>Accept Run</button></li>
    </ul>
  </div>
);

export default Home;