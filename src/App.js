import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HeadlineCards } from './components/HeadlineCards';
import { Product } from './components/Product';

function App() {
  return (
    <div className='bg-background'>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Product />
    </div>
  );
}

export default App;
