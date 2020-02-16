import React from 'react';
import { Router } from "@reach/router";
import './App.css';
import Login from './pages/login';
import Registrasi from './pages/registrasi';
import LupaPassword from './pages/lupa-password';
import NotFound from './pages/404';
import Private from './pages/private';

function App() {
  return (
    <div className="App">
      <Router>
        <Private path="/" />
        <Private path="/pengaturan" />
        <Private path="/produk" />
        <Private path="/transaksi" />
        <Registrasi path="registrasi" />
        <Login path="/login" />
        <LupaPassword path="lupa-password" />
        <NotFound default />

      </Router>
    </div>
  );
}

export default App;
