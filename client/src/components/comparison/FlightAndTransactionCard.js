import React, { Component } from 'react';
import Card from "react-bootstrap/Card";

class FlightAndTransactionCard extends Component {


  render() {
    const flights = this.props.flights
    console.log(flights);


    return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          {flights.transaction}
        </Card.Body>
      </Card>
    </div>
    )
  }
}


export default FlightAndTransactionCard;
