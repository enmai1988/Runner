import React from 'react';

const MyRunsEntry = (props) => (
  <li className="myRunsItem myRunContainer">
    <div className="myRun">
      <h4>Run Title</h4><p>{props.run.title}</p>
    </div>
    <div className="myRun">
      <h4>Starter</h4><p>{props.run.userId}</p>
    </div>
    <div className="myRun">
      <h4>Runner</h4><p>{props.run.runnerId}</p>
    </div>
    <div className="myRun myRunDesc">
      <h4>Description</h4><p>{props.run.description}</p>
    </div>
    <div className="myRun">
      <h4>Location</h4><p>{props.run.location}</p>
    </div>
    <div className="myRun">
      <h4>Time</h4><p>{props.run.startTime}</p>
    </div>
    <div className="myRun">
      <h4>Expected Finish Time</h4><p>{props.run.expectedFinishTime}</p>
    </div>
    <div className="myRun">
      <h4>Finish Time</h4><p>{props.run.finishTime}</p>
    </div>
    <div className="myRun"> 
      <h4>Payout</h4><p>{props.run.amount}</p> 
    </div>
  </li>
);

export default MyRunsEntry;