import React, { Component } from 'react';
import UploadBox from './UploadBox';
import ListDisplay from './ListDisplay';
import './App.css';
import SyncWithGoogle from './SyncWithGoogle';
import GoogleAuthenticator from './GoogleAuthenticator';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Google Calendar Birthday List Importr</h1>
        <GoogleAuthenticator />
        <h4>Upload Birthday List Excel (.xlsx or .xls) </h4>
        <UploadBox />
        <br/>
        <h4>List of Birthdays to be imported</h4>
        <ListDisplay />
        <br/>
        <SyncWithGoogle />
      </div>
    );
  }
}

export default App;
