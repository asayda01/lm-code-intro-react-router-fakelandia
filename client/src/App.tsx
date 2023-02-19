import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ComponentRouter from './components/router';

function App() {

  return (

    <BrowserRouter>

      <ComponentRouter />

    </BrowserRouter>

  );

};

export default App;
