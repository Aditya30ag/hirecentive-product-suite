import Hero from '../components/Hero';
import About from '../components/About';
import Mission from '../components/Mission';
import Products from '../components/Products';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Mission />
      <Products />
      <Contact />
      <Footer />
    </main>
  );
}
