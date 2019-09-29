import React, { Component } from 'react';

class Transactions extends Component {
  constructor(){
    super();
    this.state = {
      transactions: []
    }
  }


  callAPI(){
    const that = this;
    fetch("http://localhost:9000/transactions")
    .then(res => res.text())
    .then(res => this.setState({ transactions: res}, () => console.log('transations fetched', res)))
    .then(() => console.log(that.state.transactions))
  }

  componentDidMount(){
    const that = this

    setTimeout(function(){
        that.callAPI();
      }, 25000);
  }

  render() {
    return (
      <div>
        <h2> {this.state.transactions} </h2>
      </div>
      )
    }
  }


export default Transactions;
