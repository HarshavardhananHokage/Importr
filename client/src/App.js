import React, { Component } from 'react';
import UploadBox from './UploadBox';
import ListDisplay from './ListDisplay';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        Working!!!
        <UploadBox />
        <ListDisplay />
      </div>
    );
  }
}

export default App;
