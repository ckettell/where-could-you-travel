import React, { Component } from 'react';
import './App.css';
import Main from './components/AppRouter'


class App extends Component {
    state = { apiResponse: "hi" };


  render() {
    return (
           <Main />
      )
    }
  }


export default App;
