/**
 * Created by taylorrayhoward on 8/8/17.
 */
import '../Styles/App.css';
import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div className="container">
        <div className="d-flex justify-content-center align-self-center">
          <div className="card col-sm-6">
            <div className="card-block">
              <div className="card-title text-center">
                Sign in
              </div>
              <div className="form-group row">
                <label htmlFor="input-email" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                  <input type="text" id="input-email" className="form-control" placeholder="Email..."/>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="input-password" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                  <input type="text" id="input-password" className="form-control" placeholder="Password..."/>
                </div>
              </div>
              <div className="text-center">
                <button className="btn btn-primary">Sign In</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;