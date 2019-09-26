import React, { Component } from 'react';
import { BrowserRouter as Redirect } from "react-router-dom";
const queryString = require('query-string');

class AuthCallBack extends Component {
  constructor(){
    super();
    this.state = {
      accessToken: 'hello world',
      redirect: false
    }
  }

  callAPI(){
    fetch('http://localhost:9000/oauth/callback',{
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token: this.state.accessToken }),})
    .then(text => console.log(text))
    .then(redirect => this.setState({ redirect: true }))
    .then(() => console.log(JSON.stringify(this.state.accessToken)))
  }

  componentDidMount(){
    this.updateAccessToken()
  }

  updateAccessToken(){
    const that = this
    this.setState({
      accessToken: queryString.parse(this.props.location.search).code
    })
    setTimeout(function(){
        that.callAPI()
    }, 1000);
  }

  render() {
    const code = queryString.parse(this.props.location.search).code
    console.log(code);

    if (this.state.redirect) return <Redirect to='/' />
    return (
      <ul> HI
      </ul>
    )
  }
}


export default AuthCallBack;
