import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


class FlightAndTransactionCard extends Component {


  render() {
    const flights = this.props.flights
    console.log(flights);


    return (

    <div>
    <Card style={{ textAlign: 'center', fontSize: "50px" }}>
    <CardBody body inverse style={{ backgroundColor: '#69dcff', borderColor: '#333' }}>
      <CardTitle style={{  }}>You could have travelled to {flights.location} for £{flights.flightPrice}</CardTitle>
      <CardText>Instead of the £{flights.transactionAmount} spent at {flights.transaction}.</CardText>
    </CardBody>
  </Card>
</div>
    )
  }
}


export default FlightAndTransactionCard;
