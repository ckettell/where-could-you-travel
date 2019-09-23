import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";



class SignIn extends Component {
  constructor(){
    super();
    this.state = {
      client_id: '',
      client_secret: '',
      redirect_uri: '',
      redirect: false
    }
  }

  apiSignIn(){
    const that = this;
    fetch('http://localhost:9000')
    .then(response => response.json())
    .then(json => that.setState({ client_id: json['client_id']},
    that.setState({  client_secret: json['client_secret']}),
    that.setState({ redirect_uri: json['redirect_uri']})))
    .then(() => this.setState({ redirect: true }))
    .then(() => window.location.assign(`https://auth.monzo.com/?client_id=${this.state.client_id}&redirect_uri=${this.state.redirect_uri}&response_type=code`))

  }


  callAPI(){
    fetch("/")
    .then(res => res.text())
    .then(res => this.setState({ autho: res}, () => console.log('transations fetched', res)))
  }

  // componentDidMount(){
  //   this.callAPI()
  // }

  render() {



    return (
      <div>
        <button
          onClick={() => this.apiSignIn()}
          className='sign-in-button'>
          <ul>
          </ul>
        </button>
      </div>
      )
    }
  }


export default SignIn;
