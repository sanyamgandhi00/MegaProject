import React, { Component } from 'react';
import App from './App';
import { OrgLogin } from './Components/OrgLogin';
import StuLogin from './Components/StuLogin';
import {BrowserRouter, Route , Routes } from 'react-router-dom';
export default class Main extends React.Component {
    render() {
      return (
        <BrowserRouter>
          <Routes>
              <Route exact path="/" element={<App />} />
                <Route exact path="organization" element={<OrgLogin />} />
                
                <Route exact path="student" element={<StuLogin />} />
        
        </Routes>
        </BrowserRouter>
      );
    }
  }