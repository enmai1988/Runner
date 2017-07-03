import React from 'react';
import MyRunsEntry from './MyRunsEntry.jsx';

const MyRuns = (props) => (
  <div  className="reactComponentContainer">
    <h2>My Runs</h2>
    <h4>Active Runs</h4>
    <div>
      <ul className="myRunsContainer">
        {props.activeRuns.map((run, index) => {
          return <MyRunsEntry run={run} key={index} />;
        })}
      </ul>
    </div>
    <hr/>
    <h4>Past Runs</h4>
    <div>
      <ul className="myRunsContainer">
        {props.completedRuns.map((run, index) => {
          return <MyRunsEntry run={run} key={index} />;
        })}
      </ul>
    </div>
  </div>
);

export default MyRuns;