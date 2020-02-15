import React from 'react';
import { Router } from "@reach/router";
import './App.css';
import Login from './pages/login';
import Registrasi from './pages/registrasi';
import LupaPassword from './pages/lupa-password';
import NotFound from './pages/404';

function App() {
  return (
    <div className="App">
      <Router>
        <Login path="/login" />
        <Registrasi path="registrasi" />
        <LupaPassword path="lupa-password" />
        <NotFound default />

      </Router>
    </div>
  );
}

export default App;
