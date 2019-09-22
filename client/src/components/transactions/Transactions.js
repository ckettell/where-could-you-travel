import React, { Component } from 'react';

class Transactions extends Component {
  constructor(){
    super();
    this.state = {
      transactions: []
    }
  }


  callAPI(){
    fetch("/transactions/:acc_id")
    .then(res => res.text())
    .then(res => this.setState({ transactions: res}, () => console.log('transations fetched', res)))
  }

  componentDidMount(){
    this.callAPI()
  }

  render() {
    return (
      <div>
        <h2> Transactions </h2>
      </div>
    )
    }
  }


export default Transactions;
