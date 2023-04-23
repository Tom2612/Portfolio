import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
