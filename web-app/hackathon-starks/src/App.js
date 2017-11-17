import React, { Component } from 'react';
import './App.css';
import HomePanel from './components/HomePanel';
import {BrowserRouter} from 'react-router-dom';

class App extends Component {
  // Initialize state
  state = {  }

  // Fetch passwords after first mount
  componentDidMount() {
    
  }

  render() {

    return (
      <div className="App">
        <div className="row App-header">
          <div className="col col-md-4 offset-md-2">URL Shortner</div>
        </div> 
        <BrowserRouter>
          <HomePanel/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
