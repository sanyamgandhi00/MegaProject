import React, { Component } from 'react';
import './login.css';

export class OrgLogin extends React.Component {
    render() {
      return  (
        <div>
          <nav className="navbar">
            <div className="container">
              <div className="navbar-header">
                <button className="navbar-toggler" data-toggle="open-navbar1">
                  <span />
                  <span />
                  <span />
                </button>
                <a href="#">
                  <h4>Block<span>CERT</span><i className="fas fa-file-certificate" /></h4>
                </a>
              </div>
              <div className="navbar-menu" id="open-navbar1">
                <ul className="navbar-nav">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li className="active"><a href="organizationLogin.html">Organization</a></li>
                  <li className="navbar-dropdown">
                    <a href="studentLogin.html" className="dropdown-toggler" data-dropdown="my-dropdown-id">
                      Student 
                    </a>
                  </li>
                  <li><a href="{% url 'profile' %}">About Us</a></li>
                </ul>
              </div>
            </div>
          </nav>
          <div style={{minHeight: '95vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', display: 'flex', backgroundPosition: 'left top', backgroundAttachment: 'fixed', backgroundImage: 'url("login-background.jpg")'}}>
            <div className="forms">
              {/* LOGIN FORM */}
              <form action="/login" id="login" onsubmit="return validatelogin()" name="loginform" method="POST">
                <h1>Organization's Login</h1>
                <hr />
                <div id="loginwarning" className="warning">
                  {/* INSERT LOGIN WARNINGS HERE */}
                </div>
                <div className="input-field">
                  <label htmlFor="email">Organization Id</label>
                  <input type="text" name="email" placeholder="kjsce1221" />
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" placeholder="******" />
                  <input type="submit" defaultValue="Login" className="button" />
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    }
  }