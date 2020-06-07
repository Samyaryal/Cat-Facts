import React, { Component } from "react";
import Title from "./components/Title";
import "./App.css";
import Spinner from "./components/Spinner";
import Form from "./components/Form";
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      facts: [],
      isLoaded: false
    };
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData = (num = 5 ) => {
    fetch(
      `https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=${num}`
    )
      .then(res => res.json())
      .then(
        json => {
          this.setState({
            isLoaded: true,
            facts: json
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  };

  displayData = () => {
    const { isLoaded, facts, error } = this.state; // object destructure
    if (error) {
      return (
        <div className="alert alert-danger" role="alert">
          Error: {error.message}
        </div>
      );
    } else if (!isLoaded) {
      return (
        <div>
          {" "}
          <Spinner />
        </div>
      );
    } else {
      return (
        <div className="App">
          {facts.map(facts => (
            <div className="fact-link" key={facts._id}>
              <ul className="list-group">
                <li className="list-group-item list-group-item-primary">
                  {facts.text}
                </li>
                <li className="list-group-item list-group-item-secondary">
                  {`https://cat-fact.herokuapp.com/facts/${facts._id}`}
                </li>
              </ul>
              
            </div>
          ))}
        </div>
      );
    }
  };
  render() {
    
    return (
      <div className="background">
        <div className="container-wall">
          <Title />
          <Form fetch={this.fetchData}/> 
          
          <div>{this.displayData()}</div>
            
        </div> 
          <Footer />
            
      </div>
      
       
      
    );
  }
}
export default App;

// <div>
//                  <button className="btn btn-primary" onClick = {this.fetchData}>
//                  Click here to generate new facts!
//                   </button>
//                  </div>
