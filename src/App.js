import './App.css';
import './Reset.css';
import { Route, Routes } from 'react-router-dom'

import { Header } from './Elements/Header';
import { Footer } from './Elements/Links';

import { Hero } from './components/Home/Home';
import Hello from './components/Hello/Hello';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/hello' element={<Hello />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
