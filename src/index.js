import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Welcome } from './Components/Welcome';
import { Partidas } from './Components/Partidas';
import Vista from './Components/Vista';
import { SocketProvider } from './context/SocketContext';

ReactDOM.render(
  <SocketProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/partidas" element={<Partidas />} />
        <Route path="/ver" element={<Vista />} />
        <Route path="/jugar" element={<App />} />
      </Routes>
    </BrowserRouter>
  </SocketProvider>,
  document.getElementById('root')
);
