import React from 'react';

class StartRun extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    var results = {};
    var form = document.getElementById('startRunForm');
    var formData = new FormData(form);
    var iterator = formData.entries();
    for (var pair of formData.entries()) {
      results[pair[0]] = pair[1];
    }
    this.props.startRun(results);
  }

  render() {
    return (
      <div className="reactComponentContainer">
        <h2>StartRun</h2>
        <form id="startRunForm" onSubmit={this.handleSubmit}>
          <label>Title</label>
          <input type="text" name="title"/>
          <label>Location</label>
          <input type="text" name="location"/>
          <label>Payout</label>
          <input type="text" name="payout"/>
          <label>Description</label>
          <input type="text" name="description"/>
          <label>Time</label>
          <input type="datetime-local" name="time"/>
          <br></br>
          <button className="btn" type="submit">Start Run</button>
        </form>
      </div>
    );
  }
}

export default StartRun;