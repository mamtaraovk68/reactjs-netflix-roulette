import React from 'react'
import ReactDOM from 'react-dom';
import './counter.css';


// CounterApp React class level component
class CounterApp extends React.Component{

  //Constructor to make use of component state
  constructor(props){
    super(props);
    this.state = {
      value: parseInt(props.initialValue, 10) || 0
    }

    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
  }

  // function to increase the counter value from 1
  incrementCounter(){
    this.setState({
        value: this.state.value+1
      })
  }

  // function to decrease the counter value from 1
  decrementCounter(){
    this.setState({
        value: this.state.value-1
    })
  }

  // Main render code for the CounterApp component. Re-renders when the state is changed
  render() {
    return React.createElement('div',null,
      React.createElement('h1', null, "Counter Application"),
      React.createElement('p', null, `Current value: ${this.state.value}`),
      React.createElement('button', { onClick: this.incrementCounter, className: 'incrementButton' }, 'Increment'),
      React.createElement('span', { style: { margin: '0 10px' } }), // Adding a span for spacing
      React.createElement('button', { onClick: this.decrementCounter, className: 'decrementButton' }, 'Decrement')
    );
  }
}


export default CounterApp;