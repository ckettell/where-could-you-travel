import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import FlightAndTransaction from './FlightAndTransaction'

class SimpleSwiperWithParams extends Component{
  constructor(props){
    super(props);
  }


render(){
  console.log('hello');
  var params = {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    direction: "vertical"
  };

  const that = this;

  const flightsAndTransactions = []

  that.props.transactionsAndFlights.forEach(function(flights, index){
    flightsAndTransactions.push(<div>{flights.transaction}</div>);
  })
  console.log(flightsAndTransactions);

  return(
    <Swiper {...params}>
  
    {flightsAndTransactions}
    </Swiper>


  )
}
}

export default SimpleSwiperWithParams;
