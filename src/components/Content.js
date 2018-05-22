import React, { Component } from 'react';
import Counter from './Counter';
import SubmitForm from './SubmitForm';

export default class Content extends Component {
  render() {
    return (
      <div className="App">
        <SubmitForm />
        <main>
          <Counter />
        </main>
      </div>
    );
  }
}
