import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Transactions from './components/transactions/Transactions'
import SignIn from './components/transactions/SignIn'


class App extends Component {
    state = { apiResponse: "hi" };


  render() {
    return (
      <div className='App'>
       <p className='appIntro'>{this.state.apiResponse}</p>
       <SignIn/>
      </div>
      )
    }
  }


export default App;
