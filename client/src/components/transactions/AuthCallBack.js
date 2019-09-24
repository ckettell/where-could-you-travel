import React, { Component } from 'react';
import { BrowserRouter as Redirect } from "react-router-dom";

class AuthCallBack extends Component {
  constructor(){
    super();
    this.state = {
      accessToken: '',
      redirect: false
    }
  }

  callAPI(){
    fetch('http://localhost:9000/oauth/callback',{
    method: 'POST',
    data: JSON.stringify(this.state.accessToken)})
    .then(text => console.log(text))
    .then(redirect => this.setState({ redirect: true }))
  }

  componentDidMount(){
    this.callAPI()
  }

  render() {
    if (this.state.redirect) return <Redirect to='/' />
    return (
      <ul> HI
      </ul>
    )
  }
}


export default AuthCallBack;
