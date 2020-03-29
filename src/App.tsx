import React from 'react';
import logo from './logo.svg';
import './App.css';
import {CalcView} from "./components/CalcView/CalcView";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CalcView/>
      </header>
    </div>
  );
}

export default App;
