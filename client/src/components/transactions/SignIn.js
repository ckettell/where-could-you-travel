import React, { Component } from 'react';

class Transactions extends Component {
  constructor(){
    super();
    this.state = {
      autho: ''
    }
  }


  callAPI(){
    fetch("/")
    .then(res => res.text())
    .then(res => this.setState({ autho: res}, () => console.log('transations fetched', res)))
  }

  componentDidMount(){
    this.callAPI()
  }

  render() {
    return (
      <div>
        <h2> {this.state.autho} </h2>
      </div>
    )
    }
  }


export default Transactions;
