import React from 'react';
import GoogleLogin from "react-google-login";
import FacebookLogin from 'react-facebook-login';

import './App.css';

function App() {
  return (
    <div className="App">
      <Login />
      <Register />
    </div>
  );
}

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.loginHandler = this.loginHandler.bind(this);
    this.googleLoginHandler = this.googleLoginHandler.bind(this);
  }
  changeHandler(e) {
    this.setState({[e.target.id]: e.target.value});
  }
  loginHandler(e) {
    e.preventDefault();
    var body = {
      username: this.state.username,
      password: this.state.password,
    };
    console.log(body);
    // fetch("api_link", {
    //   method: "POST",
    //   headers: {"Content-Type": "application/json"},
    //   body: JSON.stringify(body),
    // })
    // .then(resp => {return resp.json()})
    // .then(json => {console.log(json)});
  }
  googleLoginHandler(response) {
    console.log(response);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.loginHandler}>
          <input id="username" onChange={this.changeHandler} placeholder="Username" />
          <input id="password" onChange={this.changeHandler} placeholder="Password" />
          <button>Login</button>
        </form>
        <GoogleLogin
          clientId="738742710995-fb8r9338lmvs20pg4cs0rk3b3jruqf7c.apps.googleusercontent.com"
          onSuccess={this.googleLoginHandler}
          onFailure={this.googleLoginHandler}
        />
        <FacebookLogin
          appId="535035844060225"
        />
      </div>
    )
  }
}

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone_number: null,
      password: null,
      otp: null,
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  changeHandler(e) {
    this.setState({[e.target.id]: e.target.value});
  }
  submitHandler(e) {
    e.preventDefault();
    var body = {
      phone_number: this.state.phone_number,
      password: this.state.password,
      otp: this.state.otp,
    };
    console.log(body);
    // fetch("api_link", {
    //   method: "POST",
    //   headers: {"Content-Type": "application/json"},
    //   body: JSON.stringify(body),
    // })
    // .then(resp => {return resp.json()})
    // .then(json => {console.log(json)});
  }
  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input id="phone_number" onChange={this.changeHandler} placeholder="Phone Number" />
          <input id="password" onChange={this.changeHandler} placeholder="Password" />
          <input id="otp" onChange={this.changeHandler} placeholder="OTP" />
          <button>Register</button>
        </form>
      </div>
    )
  }
}

export default App;
