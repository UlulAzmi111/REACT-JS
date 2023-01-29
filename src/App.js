import logo from './logo.svg';
import './App.css';
import Kontak from './pages/Kontak';
import Nav from './pages/Nav';
import Sejarah from './pages/Sejarah';
import Tentang from './pages/Tentang';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Siswa from './pages/Siswa';
// import { Component } from 'react';


function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Nav />
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/sejarah" element={<Sejarah />} />
            <Route path="/tentang" element={<Tentang />} />
            <Route path="/kontak" element={<Kontak />} />
            <Route path="/siswa" element={<Siswa />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;

