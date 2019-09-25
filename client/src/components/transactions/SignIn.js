import React, { Component } from 'react';


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

  componentDidMount(){
    console.log(this.props.params);
  }

  apiSignIn(){
    const that = this;
    fetch('http://localhost:9000')
    .then(response => response.json())
    .then(json => that.setState({ client_id: json['client_id']},
    that.setState({  client_secret: json['client_secret']}),
    that.setState({ redirect_uri: json['redirect_uri']})))
    .then(() => this.relocateToMonzoSignIn())
  }

  relocateToMonzoSignIn(){
    window.location.assign(`https://auth.monzo.com/?client_id=${this.state.client_id}&redirect_uri=${this.state.redirect_uri}&response_type=code`)
  }

  render() {
    return (
      <div>
        <button
          onClick={() => this.apiSignIn()}
          className='sign-in-button'>
          <ul> HI
          </ul>
        </button>
      </div>
      )
    }
  }


export default SignIn;
