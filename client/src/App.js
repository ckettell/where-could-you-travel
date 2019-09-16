import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    state = { apiResponse: "hi" };


  callAPI(){
    fetch("http://localhost:9000/testAPI")
    .then(res => res.text())
    .then(res => this.setState({ apiResponse: res }))
  }

  componentDidMount(){
    this.callAPI()
  }

  render() {
    return (
      <div className='App'>
       <p className='appIntro'>{this.state.apiResponse}</p>
      </div>
    )
    }
  }


export default App;
