import React, { Component } from 'react';


class FlightAndTransaction extends Component {
    constructor(props){
        super(props);
      }

  componentDidMount(){
    console.log(this.props);
  }

  render(){
    return(
      <div className="favorite">
          <div className="under-sect">
              <div className='leftSide'>
                <div className="und-decoration">
                {console.log(this.props)}
                {console.log('hi')}
                <h1> Hello </h1>
                    <span className="dot"></span>
                </div>
              </div>
          </div>
      </div>
    )
  }
};

export default FlightAndTransaction;
