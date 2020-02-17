import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TextEditor} from './TextEditor';



const App: React.FC = () => {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Collard Greens</h1>
        <TextEditor/>
      </header>
    </div>
  );
}

export default App;
