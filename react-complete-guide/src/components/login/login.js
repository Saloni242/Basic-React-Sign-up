import React from "react";
import loginImg from "../../logo.png";

export class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="group1">
        <div className="content">
        <br/>
          <div className="image">
          <img src={loginImg} className="centerImage"/>
          </div>
          <div className="form">
          <br/> <br/> 
              <div className="signin">
                  SIGN IN
              </div>
              <br/> <br/> 
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <br/>
              <input type="text" name="email" placeholder="Email" />
            </div>
            <br/>
            <br/>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <br/>
              <input type="password" name="password" placeholder="Password" />
            </div>
            <br/>
            <br/>
            <button type="button" className="btn">
           SUBMIT
          </button>
          </div>
        </div>
    </div>
    );
  }
}