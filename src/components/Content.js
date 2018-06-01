import React from 'react';
import Game from './Game';
import SubmitForm from './SubmitForm';

export default function Content(){
  return (
    <React.Fragment>
      <SubmitForm />
      <main>
        <Game />
      </main>
    </React.Fragment>
  );
}
