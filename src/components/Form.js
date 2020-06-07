import React from "react";

class Form extends React.Component {
  state = { number: 5 };

  UponSubmit = e => {
    e.preventDefault();
    const { fetch } = this.props;

    fetch(this.state.number);
  };

  render() {
    return (
      <div className="question-fact">
        <form onSubmit={this.UponSubmit}>
          <label>How many Facts (2 - 10)?</label>
          <div>
            <input
              type="number"
              value={this.state.number}
              min="2"
              max="10"
              required={true}
              onChange={event => this.setState({ number: event.target.value })}
            />
          </div>
          <br />
          <div className="button-click">
            <button>Generate new facts</button>
          </div>
          <br />
        </form>
      </div>
    );
  }
}

export default Form;


