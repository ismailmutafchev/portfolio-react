import './App.scss';
import './Reset.css';
import { Route, Routes } from 'react-router-dom'

import { Header } from './components/Common/Header';
import { Footer } from './components/Common/Links';

import { Hero } from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import { useState } from 'react';


function App() {
  const [page, setPage] = useState('home')

  return (
    <div className="App">
      <Header selected = {page} />

      <Routes>
        <Route path='/' element={<Hero setPage={setPage} />} />
        <Route path='/about' element={<About setPage={setPage}/>} />
        <Route path='/projects' element={<Projects setPage={setPage}/>} />
        <Route path='/contact' element={<Contact setPage={setPage}/>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
