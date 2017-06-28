import React from 'react';

const Home = (props) => (
  <div className="reactComponentContainer">
    <h2>Home</h2>
    <div>
      <ul className="homeRunsContainer">
        <li className="homeRunsItem homeRunContainer">
          <div className="homeRun">
            <h4>Run Title</h4><p>Run</p>
          </div>
          <div className="homeRun">
            <h4>Time</h4><p>6:00pm</p>
          </div>
          <div className="homeRun"> 
            <h4>Payout</h4><p>$5</p> 
          </div>
          <div className="homeRun">
            <button className="btn" onClick={props.acceptRun}>Accept Run</button>
          </div>
        </li>
        <li className="homeRunsItem homeRunContainer">
          <div className="homeRun">
            <h4>Run Title</h4><p>Run</p>
          </div>
          <div className="homeRun">
            <h4>Time</h4><p>6:00pm</p>
          </div>
          <div className="homeRun"> 
            <h4>Payout</h4><p>$5</p> 
          </div>
          <div className="homeRun">
            <button className="btn" onClick={props.acceptRun}>Accept Run</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
);

export default Home;

// {props.runs.map((run, index) => {
//   return  <li className="homeRunItem">
//             <h4>Run Title</h4><p>{runs.title}</p>
//             <h4>Time</h4><p>{run.time}</p> 
//             <h4>Payout</h4><p>{run.payout}</p> 
//             <button className="btn" onClick={props.acceptRun}>Accept Run</button>
//           </li>
// })}