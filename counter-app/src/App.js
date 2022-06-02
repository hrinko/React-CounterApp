import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from "./components/counters";
import './App.css';

class App extends Component {

  state = {  
    counters: [
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 }
    ]
  }; 

  constructor() {
    super();
    console.log("App - Constructor");
    //cannot use setState in here 
    //can initial state values for mounting and also pass in props
  }

  componentDidMount() {
    //make Ajax calls to server
    //can set state based on the ajax calls
    console.log("App - Mounted");
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters]; //spread operator, clones counters array
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
        c.value = 0;
        return c;
    });
    this.setState({ counters });
  };

  handleDelete = counterId => {
    console.log('Event Handler Called', counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <NavBar 
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters 
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
