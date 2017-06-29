import React from 'react';


class StartRun extends React.Component {

  handleSubmit(e) {
    e.preventDefault();
    console.log('here');
    //console.log(e.target);
    var myForm = document.getElementById('startRunForm');
    formData = new FormData(myForm);
    //formData = new FormData(e.target);
    console.log(formData);
  }

  render() {
    return (
      <div className="reactComponentContainer">
        <form id="startRunForm" onSubmit={this.handleSubmit}>
          <h2>StartRun</h2>
          <label>Title</label>
          <input type="text"/>
          <label>Location</label>
          <input type="text"/>
          <label>Payout</label>
          <input type="text"/>
          <label>Description</label>
          <input type="text"/>
          <label>Time</label>
          <input type="datetime-local"/>
          <br></br>
          <button className="btn" type="submit">Start Run</button>
        </form>
      </div>
    );
  }
}


// const StartRun = (props) => (
//   <div className="reactComponentContainer">
//     <form id="startRunForm" onSubmit={props.startRun}>
//       <h2>StartRun</h2>
//       <label>Title</label>
//       <input type="text"/>
//       <label>Location</label>
//       <input type="text"/>
//       <label>Payout</label>
//       <input type="text"/>
//       <label>Description</label>
//       <input type="text"/>
//       <label>Time</label>
//       <input type="datetime-local"/>
//       <br></br>
//       <button className="btn" type="submit">Start Run</button>
//     </form>
//   </div>
// );

export default StartRun;