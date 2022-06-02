import React, { Component } from 'react';

class Counter extends Component {
    //state = {
    //    value: this.props.counter.value
        //imageUrl: 'https://picsum.photos/200'
    //};

    //styles = {
    //    fontSize: 10,
    //    fontWeight: "bold"
    //};

    // constructor() {
    //    super();
    //    this.handleIncrement = this.handleIncrement.bind(this); //returns a new instance of this function
    // }
    
    //arrow function acts the same way as a constructor so you have access to the child component/states
    //handleIncrement = () => {
    //    this.setState({ value: this.state.value + 1 }) //setState tells the DOM something is going to change like TF
    //    console.log("Increment Clicked", this);
    //};

    componentDidUpdate(prevProps, prevState) {
        console.log("prevProps", prevProps);
        console.log("prevState", prevState);
        //can make Ajax calls in case the current state is incorrectly updating the DOM
    }

    componentWillUnmount() {
        console.log("Counter - Unmount");
        //can set up listeners, cleanup before unmounting hook
    }

    render() { 
        console.log("Counter - Rendered");

        return ( 
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button 
                    onClick={() => this.props.onIncrement(this.props.counter)} 
                    className='btn btn-secondary btn-sm'
                >
                    Increment
                </button>
                <button 
                    onClick={() => this.props.onDelete(this.props.counter.id)} 
                    className='btn btn-danger btn-sm m-2'
                >
                    Delete
                </button>
            </div>
        );    
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}
 
export default Counter;
