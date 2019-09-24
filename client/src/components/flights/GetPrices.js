import React, { Component } from 'react';
import { BrowserRouter as Redirect } from "react-router-dom";

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
    const destinationsAdded = []
    array.forEach(function(json){
      destinations.push({[json['Places'][0]['Name']]: json['Quotes'][0]['MinPrice']})
    })
    setTimeout(function(){
        this.setState({  destinations: destinationsAdded})
      }, 4000);
      
    setTimeout(function(){
        console.log(this.state.destinations);
      }, 5000);


  }

  componentDidMount(){
    this.callAPI()
  }

  render() {
    return (
      <ul> HI
      </ul>
    )
  }
}

export default GetPrices;
