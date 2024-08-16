import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { Welcome } from './Components/Welcome';
import { Partidas } from './Components/Partidas';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/welcome" element={<Welcome/>}></Route>
        <Route path="/partidas" element={<Partidas/>}></Route>
        <Route path="/jugar" element={<App />}></Route>
        <Route path='/*' element={<Welcome/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
