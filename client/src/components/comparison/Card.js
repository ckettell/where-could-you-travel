import React, { Component } from 'react';
import PropTypes from "prop-types";
import { animated, interpolate } from "react-spring";
import Carousel from 'nuka-carousel';


class Card extends Component {


  render() {
    const { i, x, y, rot, scale, trans, bind, data } = this.props;
    console.log(data[i]);
    const { transaction, transactionPrice, location, locationPrice } = data[i];


    return (
      <animated.div
      key={i}
      style={{
        transform: interpolate(
          [x, y],
          (x, y) => `translate3d(${x}px,${y}px,0)`
        )
      }}
      >
      <animated.div
        {...bind(i)}
        style={{
          transform: interpolate([rot, scale], trans)
        }}
      >
      <div className="card">
        <h2>transaction</h2>
        <h2>transactionPrice</h2>
        <h2>location</h2>
        <h2>locationPrice</h2>
      </div>
      </animated.div>
      </animated.div>

    )
  }
}

Card.propTypes = {
  transaction: PropTypes.string,
  transactionPrice: PropTypes.number,
  location: PropTypes.string,
  locationPrice: PropTypes.number
};

export default Card;
