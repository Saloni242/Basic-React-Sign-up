import React from "react";
import loginImg from "../../logo.png";
import { Link } from 'react-router-dom';

export class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="register">
      <div className="group2">
        <div className="content">
        <br/>
          <div className="image">
          <img src={loginImg} className="centerImage"/>
          </div>
          <div className="form">
          <br/> 
          <br/> 
              <div className="signin">
                  SIGN UP
              </div>
              <br/> 
              <br/> 
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <br/>
              <input type="text" name="firstName" placeholder="First Name" />
            </div>
            <br/>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <br/>
              <input type="text" name="lastName" placeholder="Last Name" />
            </div>
            <br/>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <br/>
              <input type="text" name="email" placeholder="Email" />
            </div>
            <br/>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <br/>
              <input type="password" name="password" placeholder="Password" />
            </div>
            <br/>
            <div className="form-group">
              <label htmlFor="dob">Date Of Birth</label>
              <input type="date" name="dob" placeholder="Date Of Birth" />
            </div>
            <br/>
            <div className="form-group">
              <label htmlFor="location">Location</label>
              <br/>
              <input type="text" name="location" placeholder="Location" />
            </div>
            <br/>
            <button type="button" className="btn">
           SUBMIT
          </button>
          </div>
        </div>
    </div>
    </div>
    );
  }
}
