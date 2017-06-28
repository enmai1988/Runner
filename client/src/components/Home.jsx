import React from 'react';
import HomeRunEntry from './HomeRunEntry.jsx';

const Home = (props) => (
  <div className="reactComponentContainer">
    <h2>Home</h2>
    <div>
      <ul className="homeRunsContainer">
        {props.runs.map((run, index) => {
          return <HomeRunEntry run={run} acceptRun={props.acceptRun} key={index} />
        })}
      </ul>
    </div>
  </div>
);

export default Home;


