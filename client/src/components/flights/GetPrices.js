import React, { Component } from 'react';
import { BrowserRouter as Redirect } from "react-router-dom";

class GetPrices extends Component {
  constructor(){
    super();
    this.state = {
      accessToken: '',
      redirect: false,
      destinations: ''
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
      destinationsAdded.push({[json['Places'][0]['Name']]: json['Quotes'][0]['MinPrice']})
    })
    setTimeout(function(){
        that.setState({  destinations: destinationsAdded})
      }, 2000);

    setTimeout(function(){
        console.log(destinationsAdded);
      }, 2500);


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
