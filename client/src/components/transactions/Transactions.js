import React, { Component } from 'react';

class Transactions extends Component {
  constructor(){
    super();
    this.state = {
      transactions: [],
      formattedTransactions: []
    }
  }


  callAPI(){
    const that = this;
    fetch("http://localhost:9000/transactions")
    .then(res => res.text())
    .then(res => this.setState({ transactions: res}, () => console.log('transations fetched', res)))
    .then(() => console.log(that.state.transactions))
  }

  formatTransactions(){

    const that = this;

    const formattedTransactions = [];

    for(let transaction of this.state.transactions){
      const {description,
             amount,
             category
           } = transaction;

           formattedTransactions.push({description: description, amount: amount, category: category})
    }

    setTimeout(function(){
      that.setState({
        formattedTransactions: formattedTransactions
      })
    }, 1000)

  }

  componentDidMount(){
    const that = this

    setTimeout(function(){
        that.callAPI();
        that.formatTransactions();
      }, 10000);

      console.log(that.state.formattedTransactions);
  }

  render() {
    return (
      <div>
        <h2> {this.state.formattedTransactions} </h2>
      </div>
      )
    }
  }


export default Transactions;
