import React, { Component } from 'react';
import './App.css';
import Transactions from './components/transactions/Transactions'
import SignIn from './components/transactions/SignIn'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Main from './components/AppRouter'
import {Layout, Header, Navigation, Drawer, Content } from 'react-mdl';



class App extends Component {
    state = { apiResponse: "hi" };


  render() {
    return (
           <Main />
      )
    }
  }


export default App;
