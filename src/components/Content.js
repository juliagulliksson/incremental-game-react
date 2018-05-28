import React, { Component } from 'react';
import Game from './Game';
import SubmitForm from './SubmitForm';

export default class Content extends Component {
  render() {
    return (
      <div className="App">
        <SubmitForm />
        <main>
          <Game />
        </main>
      </div>
    );
  }
}
