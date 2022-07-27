import './App.css';
import './Reset.css';
import { Route, Routes } from 'react-router-dom'

import { Header } from './components/Common/Header';
import { Footer } from './components/Common/Links';

import { Hero } from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
