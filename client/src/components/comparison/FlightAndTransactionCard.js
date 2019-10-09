import React, { Component } from 'react';
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";


class FlightAndTransactionCard extends Component {


  render() {
    const flights = this.props.flights
    console.log(flights);


    return (
    <div>
      <Card style={{ width: '36rem' }}>
        <Card.Body>
          <Card.Title>{flights.location}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{flights.transaction}</Card.Subtitle>
          <ListGroup variant="flush">
          <ListGroup.Item>
          {flights.transactionAmount}
          </ListGroup.Item>
          <ListGroup.Item>
          {flights.flightPrice}
          </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
    )
  }
}


export default FlightAndTransactionCard;
