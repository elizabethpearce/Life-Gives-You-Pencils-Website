import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "./pages/home.js";
import './main.scss';

export default class App extends Component {
  render() {
    return (   
      
          <div className='app'>
         <Home/>
     
        </div>
     

    );
  }
}