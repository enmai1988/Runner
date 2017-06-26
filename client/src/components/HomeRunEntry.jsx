import React from 'react';

const HomeRunEntry = (props) => (
  <li className="homeRunsItem homeRunContainer">
    <div className="homeRun">
      <h4>Run Title</h4><p>{props.run.title}</p>
    </div>
    <div className="homeRun">
      <h4>Starter</h4><p>{props.run.userid}</p>
    </div>
    <div className="homeRun homeRunDesc">
      <h4>Description</h4><p>{props.run.description}</p>
    </div>
    <div className="homeRun">
      <h4>Location</h4><p>{props.run.location}</p>
    </div>
    <div className="homeRun">
      <h4>Time</h4><p>TIME</p>
    </div>
    <div className="homeRun"> 
      <h4>Payout</h4><p>{props.run.amount}</p> 
    </div>
    <div className="homeRun">
      <button className="btn" onClick={props.acceptRun}>Accept Run</button>
    </div>
  </li>
);

export default HomeRunEntry;


