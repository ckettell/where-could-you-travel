import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Transactions from './components/transactions/Transactions'
import SignIn from './components/transactions/SignIn'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {
    state = { apiResponse: "hi" };


  render() {
    return (
      <Router>
      <div className='App'>
       <p className='appIntro'>{this.state.apiResponse}</p>
       <SignIn/>
      </div>
      </Router>
      )
    }
  }


export default App;
