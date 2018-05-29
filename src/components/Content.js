import React from 'react';
import Game from './Game';
import SubmitForm from './SubmitForm';

export default function Content(){
  return (
    <div className="App">
      <SubmitForm />
      <main>
        <Game />
      </main>
    </div>
  );
}
