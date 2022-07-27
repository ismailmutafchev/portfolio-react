import './App.css';
import './Reset.css';

import { Header } from './components/Common/Header';
import { Hero } from './components/Home/Home';
import { Footer } from './components/Common/Footer';

import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<Hero />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
