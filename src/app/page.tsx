'use client';
import Footer from './components/Home/Footer';
import Event from './components/Home/Event';
import Features from './components/Home/Features';
import Header from './components/Home/Header';
import Newsletter from './components/Home/Newsletter';
import Navbar from './components/Navigation/landscape/Navbar';
import Products from './components/Home/Products';

export default function Home() {
  return (
    <div>
      <Navbar />

      <Header />

      <Event />

      <Products />

      <Features />

      <Newsletter />

      <Footer />
    </div>
  );
}
