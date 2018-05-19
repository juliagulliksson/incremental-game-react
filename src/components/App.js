import React, { Component } from 'react';
import '../App.css';
import Main from './Main';
import Content from './Content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main Content={Content} />
     
      </div>
    );
  }
}

export default App;
