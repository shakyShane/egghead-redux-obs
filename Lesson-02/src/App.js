import React, { Component } from 'react';
import './App.css';
import Stories from "./components/Stories";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Stories />
      </div>
    );
  }
}

export default App;
