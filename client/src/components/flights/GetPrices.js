import React, { Component } from 'react';
import { BrowserRouter as Redirect } from "react-router-dom";
import Comparison from '../comparison/Comparison'

class GetPrices extends Component {
  constructor(){
    super();
    this.state = {
      accessToken: '',
      redirect: false,
      destinations: []
    }
  }

  callAPI(){
    fetch('http://localhost:9000/skyscanner')
    .then(res => res.json())
    .then(json => this.calculateDestinationAndPrice(json))
  }

  calculateDestinationAndPrice(array){
    const that = this
    const destinationsAdded = []
    array.forEach(function(json){
      console.log(json);
      destinationsAdded.push({[json['Places'][0]['CountryName']]: json['Quotes'][0]['MinPrice']})
    })
    setTimeout(function(){
        that.setState({  destinations: destinationsAdded})
      }, 2000);

    setTimeout(function(){
        console.log(that.state.destinations);
      }, 2500);
  }

  componentDidMount(){
    setTimeout(function(){
        this.callAPI();
      }, 1500);

  }

  render() {
    return (
      <div>
        <Comparison flightPrices={this.state.destinations} />
      </div>
    )
  }
}

export default GetPrices;
