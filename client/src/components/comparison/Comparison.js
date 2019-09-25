import React, { Component } from 'react';

class Comparisons extends Component {
  constructor(){
    super();
    this.state = {
      transactions: []
    }
  }

  componentDidMount(){
    setTimeout(function(){
        console.log(this.props);
      }, 6000);
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
    console.log(JSON.stringify(flights));

    return (
      <div>
        <h2> {this.iterateOverFlights(flights)}</h2>
      </div>
      )
    }
  }


export default Comparisons;
