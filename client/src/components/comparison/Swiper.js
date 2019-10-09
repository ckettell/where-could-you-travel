import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import FlightAndTransaction from './FlightAndTransaction'
import FlightAndTransactionCard from './FlightAndTransactionCard'

class SimpleSwiperWithParams extends Component{
  constructor(props){
    super(props);
  }


render(){
  console.log('hello');
  var params = {
    containerClass: ".swiper-container",
    // slidesPerView: "auto",
    spaceBetween: 5,
    freeMode: true,
    direction: "vertical"
  };

  const that = this;

  const flightsAndTransactions = []

  that.props.transactionsAndFlights.forEach(function(flights, index){
    flightsAndTransactions.push(<span>{<FlightAndTransactionCard flights={flights}/>}</span>);
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
