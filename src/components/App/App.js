import React, { Component } from 'react';
import './App.css';
import * as helper from '../../helper';
import FakeContainer from '../../containers/FakeContainer/';

class App extends Component {
  async componentDidMount() {
    const fetchType = await helper.fetchType();
    console.log(fetchType);
  }

  render() {
    return (
      <div className='App'>
      <h1 className='header'> POKéDEX </h1>
        <FakeContainer />
      </div>
    );
  }
}


export default App;
