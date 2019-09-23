import React, { Component } from 'react';

class SignIn extends Component {
  constructor(){
    super();
    this.state = {
      client_id: 'hi',
      client_secret: 'bye'
    }
  }

  apiSignIn(){
    const that = this;
    fetch('http://localhost:9000')
    // .then(res => res.json())
    .then(response => response.json())
    // .then(response => console.log(response['client_id']))
    .then(response => that.setState({ client_id: response['client_id']},
    that.setState({  client_secret: response['client_secret']})))
    setTimeout(() => {
      console.log(this.state.client_id + this.state.client_secret)
    }, 1000);
  }


  callAPI(){
    fetch("/")
    .then(res => res.text())
    .then(res => this.setState({ autho: res}, () => console.log('transations fetched', res)))
  }

  componentDidMount(){
    this.callAPI()
  }

  render() {
    return (
      <div>
        <button
          onClick={() => this.apiSignIn()}
          className='sign-in-button'>
        </button>
      </div>
      )
    }
  }


export default SignIn;
