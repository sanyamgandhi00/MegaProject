import React, { Component } from 'react';
import './login.css';



export default class StuLogin extends React.Component {
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
                <h4>Block<span>CERT</span></h4>
              </a>
            </div>
            <div className="navbar-menu" id="open-navbar1">
              <ul className="navbar-nav">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li><a href="organizationLogin.html">Organization</a></li>
                <li className="navbar-dropdown active">
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
            <ul className="tab-group">
              <li className="tab active" id="loginbutton">
                <a href="#login">Log In</a>
              </li>
              <li className="tab" id="signupbutton"><a href="#signup">Sign Up</a></li>
            </ul>
            {/* LOGIN FORM */}
            <form action="/login" id="login" onsubmit="return validatelogin()" name="loginform" method="POST">
              <h1>Student's Login</h1>
              <hr />
              <div id="loginwarning" className="warning">
                {/* INSERT LOGIN WARNINGS HERE */}
              </div>
              <div className="input-field">
                <label htmlFor="email">UserId</label>
                <input type="text" name="email" placeholder="sanyamgandhi00" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="******" />
                <a href="studentDashboard.html"><input type="submit" defaultValue="Login" className="button" /></a>
                <p className="text-p">
                  Not Yet Registered? <a href="#signup" id="tosignup">Sign Up</a>
                </p>
              </div>
            </form>
            {/* SIGNUP FORM */}
            <form action="/signup" id="signup" onsubmit="return validatesignup()" name="signupform" method="POST">
              <h1>Sign Up as a Student</h1>
              <hr />
              <div id="signupwarning" className="warning">
                {/* INSERT SIGNUP WARNINGS HERE */}
              </div>
              <div className="input-field">
                <label htmlFor="fullName">Name</label>
                <input type="text" name="fullName" placeholder="John Doe" />
                <label htmlFor="email">UserId</label>
                <input type="text" name="email" placeholder="sanyamgandhi00" />
                <label htmlFor="contactNumber">Mobile Number</label>
                <input type="number" name="contactNumber" placeholder={9876543210} />
                {/* <div class="grid-container">
          <label for="year" class="grid-item">Year of Study</label>
          <label for="Branch" class="grid-item">Branch</label>
          <select id="year" name="year" class="grid-item">
            <option value="-1">Select Year</option>
            <option value="fy">First Year</option>
            <option value="sy">Second Year</option>
            <option value="ty">Third Year</option>
            <option value="ly">Fourth Year</option>
          </select>
          <select id="branch" name="branch" class="grid-item">
            <option value="-1">Select Branch</option>
            <option value="comps">COMPS</option>
            <option value="etrx">ETRX</option>
            <option value="extc">EXTC</option>
            <option value="it">IT</option>
            <option value="mech">MECH</option>
          </select>
        </div> */}
                <label htmlFor="password">Password</label>
                <p className="muted-text">
                  (Password Must be Atleast 6 Characters Long)
                </p>
                <input type="password" name="password" placeholder="******" />
                <label htmlFor="confirmPassword">Confirm Password</label>
                <p className="muted-text">
                  (Password and Confirm Password Fields Must Match)
                </p>
                <input type="password" name="confirmPassword" placeholder="******" />
                <input type="submit" defaultValue="Sign up" className="button" />
                <p className="text-p">
                  Already Registered? <a href="#login" id="tologin">Login</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      );
    }
  }