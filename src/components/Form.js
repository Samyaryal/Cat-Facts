import React from "react";

class Form extends React.Component {
  state = { number: 5 };

  UponSubmit = e => {
    e.preventDefault();
    const { fetch } = this.props;

    fetch (this.state.number);
  };
  
  render() {
    return (
      <div className="form-group">
        <form  onSubmit={this.UponSubmit}>
          <label className ="question-fact">How many Facts (2 - 10)?</label>
          <div >
          <div >
          <input
              className="col-type"
              type="number"
              value={this.state.number}
              min="2"
              max="10"
              required={true}
              onChange={event => this.setState({ number: event.target.value })}
            />
          </div>
          <br/>
          <div >
          <button className = "button-click">            
              Click me to generate new facts
            </button>
          </div>
          
            
            
          </div>
        </form>
      </div>
    );
  }
}

export default Form;

// onSubmit={this.UponSubmit}
