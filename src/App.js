
import './Style.css';
import './Reset.css';
import './resources/Header'
import './resources/Hero'
import './resources/Footer'
import { Header } from './resources/Header';
import { Hero } from './resources/Hero';
import { Footer } from './resources/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Footer/>
    </div>
  );
}

export default App;
