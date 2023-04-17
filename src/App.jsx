import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Projects from './pages/Projects';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
