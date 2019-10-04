import React, { Component } from 'react';
import Deck from './Deck'

class Comparisons extends Component {
  constructor(){
    super();
    this.state = {
      transactions: [{"description":"TRANSFER","amount":"100.00","category":"general"},{"description":"LIDL UK                LONDON        GBR","amount":"-14.69","category":"groceries"},{"description":"UberBV                 help.uber.com NLD","amount":"0.00","category":"transport"},{"description":"UBER FW4VO HELP.UBER.C help.uber.com NLD","amount":"-7.44","category":"transport"},{"description":"UBER NSV73 HELP.UBER.C help.uber.com NLD","amount":"-7.64","category":"transport"},{"description":"TESCO STORES 2747      ISLINGTON     GBR","amount":"-7.10","category":"groceries"},{"description":"TESCO STORES 5486      STOKE NEWINGT GBR","amount":"-4.30","category":"groceries"},{"description":"TESCO STORES 2747      ISLINGTON     GBR","amount":"-3.00","category":"groceries"},{"description":"TESCO STORES 2747      ISLINGTON     GBR","amount":"-2.20","category":"groceries"},{"description":"TESCO STORES 2747      ISLINGTON     GBR","amount":"-0.86","category":"groceries"},{"description":"CO-OP GROUP FOOD       LONDON        GBR","amount":"-2.52","category":"groceries"},{"description":"iZ *Black Sheep Coffee LONDON       GBR","amount":"-2.50","category":"eating_out"},{"description":"TESCO STORES 5486      STOKE NEWINGT GBR","amount":"-5.00","category":"groceries"},{"description":"PP*HAIRTONIC           London        GBR","amount":"-18.00","category":"general"}],
      flights: [{location: "Ireland", price: 5},{location: "France", price: 10},{location: "Spain", price: 11},{location: "Iceland", price: 5}],
      flightsCheaperThanTransactions: ''
    }
  }

  transactionsFormatted(){
    const formattedTransactions = []
    this.state.transactions.forEach(function(transaction){
      formattedTransactions.push({description: transaction['description'], amount: (parseFloat(transaction['amount'] * -1))})
    })

    // console.log(formattedTransactions);
    return formattedTransactions;
  }

    compareFlightsAndTransactions(){
      const that = this;
      const flightsInsteadOfTransactions = [];

      that.state.flights.forEach(function(flight, price){
        that.transactionsFormatted().forEach(function(transaction){

          if(transaction['amount'] > flight['price']){
            flightsInsteadOfTransactions.push({transaction: transaction['description'], transactionAmount: transaction['amount'], location: flight['location'], flightPrice: flight['price']})
          }
        })
      })
      that.setState({
        flightsCheaperThanTransactions: flightsInsteadOfTransactions
      })
      setTimeout(function(){
        console.log(that.state.flightsCheaperThanTransactions);
      }, 1000)
    }



  componentDidMount(){
    setTimeout(function(){
        console.log(this.props);
      }, 6000);
    this.transactionsFormatted();
    this.compareFlightsAndTransactions();
  }

  iterateOverFlights(flights){
    const flightsHere = []
    flights.forEach(function(flight){
      flightsHere.push(flight)
    })
    return JSON.stringify(flightsHere)
  }

  render() {

    const flights = this.props.flightPrices
    console.log(flights);

    return (
      <div>
        <Deck transactionsAndFlights={this.state.flightsCheaperThanTransactions}/>
        <h2> Comparison Page </h2>
      </div>
      )
    }
  }


export default Comparisons;
