import React, { Component } from 'react';
import { BrowserRouter as Redirect } from "react-router-dom";

class GetPrices extends Component {
  constructor(){
    super();
    this.state = {
      accessToken: '',
      redirect: false
    }
  }

  callAPI(){
    fetch('http://localhost:9000/skyscanner')
    .then(res => res.json())
    .then(json => console.log(json))

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
