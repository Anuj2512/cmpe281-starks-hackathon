import React, { Component } from 'react';
import './App.css';
import Shortner from './components/Shortner';
import DataTable from './components/DataTable';

class App extends Component {
  // Initialize state
  state = {  }

  // Fetch passwords after first mount
  componentDidMount() {
    
  }

  render() {

    return (
      <div className="App container-fluid">
        <div className="row App-header">
          <div className="col col-md-4 offset-md-2">URL Shortner</div>
        </div>
          <Shortner/>
          <DataTable/>
      </div>
    );
  }
}

export default App;
