import React, { Component } from "react";
import Title from "./components/Title";
import "./App.css";
import Spinner from "./components/Spinner";
import Form from "./components/Form";
import Footer from "./components/Footer";

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
  fetchData = (num = 5) => {
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
    const { isLoaded, facts, error } = this.state;
    if (error) {
      return (
        <div className="alert alert-danger" role="alert">
          Error: {error.message}
        </div>
      );
    } else if (!isLoaded) {
      return (
        <div>
          <Spinner />
        </div>
      );
    } else {
      return (
        <div className="container-fluid">
          {facts.map(facts => (
            <ul className="list-group">
              <li className="list-group-item list-group-item-primary">
                {facts.text}
              </li>
              <li className="list-group-item list-group-item-secondary">
                <a href={`https://cat-fact.herokuapp.com/facts/${facts._id}`}>
                  {" "}
                  link => {`https://cat-fact.herokuapp.com/facts/${facts._id}`}{" "}
                </a>
              </li>
              <br />
            </ul>
          ))}
        </div>
      );
    }
  };
  render() {
    return (
      <div className="wrapper">
        <Title />
        <Form fetch={this.fetchData} />
        {this.displayData()}
        <Footer />
      </div>
    );
  }
}
export default App;
