'use client';
import Footer from './components/Home/Footer';
import Main from './components/Home/Main';
import Features from './components/Home/Features';
import Navbar from './components/Navigation/Navbar';
import Products from './components/Home/Products';
import Clients from './components/Home/Clients';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <Features />
      <Products />
      <Clients />
      <Footer />
    </div>
  );
}
