import './App.css';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { Hero } from './Components/Hero';
import { Menu } from './Components/Menu';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
