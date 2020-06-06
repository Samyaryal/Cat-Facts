
import React, { Component } from 'react';
import Title from './components/Title';
import './App.css';
import Spinner from './components/Spinner';
//import Button from './components/Button';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        error: null,
        facts: [],
        isLoaded: false
    };
  }
  componentDidMount(){
    this.fetchData();
  }
  fetchData = () => {
    fetch("https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=5") 
    .then(res => res.json())
    .then(json => {
        this.setState({
        isLoaded: true,
        facts: json
        });
    },
    (error) => {
        this.setState({
            isLoaded: true,
            error
            });
        }
        )  
    }
    displayData = () => {
      const { isLoaded, facts, error} = this.state;
          if (error) {
              return <div className="alert alert-danger" role="alert">Error: {error.message}</div>;
          } else if (!isLoaded) {
              return <div> <Spinner /></div>;
          } else {
               return (
                <div className= "App">            
                 <ul>
                 {facts.map(facts => (
                    <div className="list-group">
                     <ul className="list-group">
                     <li className="list-group-item list-group-item-primary">Fact:{facts.text}</li>
                     <li className="list-group-item list-group-item-secondary">link: {`https://cat-fact.herokuapp.com/facts/${facts._id}`}  </li>
                     </ul>
                    </div>
                 ))}
                 </ul>
                 <div>
                 <button className="btn btn-primary" onClick = {this.fetchData}>
                  Click here to generate new fact
                  </button>
                 </div>
                </div>
               
            );
      }
    } 
  render (){
    return (
      <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <Title />
       <div>
       {this.displayData()}
       </div>
       </div>
    </div>

    );
  }
  
};
export default App;

 //<displayData error ={this.state.error} loading={this.state.isLoaded} facts={this.state.facts} />
 //<Button datatoShow ={this.fetchData}/>
