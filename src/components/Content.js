import React, { Component } from 'react';
import Counter from './Counter';
import SubmitForm from './SubmitForm';

class Content extends Component {
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

export default Content;