import './App.css';
import Navbar from './componentss/Navbar';
import React, { Component } from 'react'
import News from './componentss/News';
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <News />
      </div>
    )
  }
}

