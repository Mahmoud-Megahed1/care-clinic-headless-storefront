import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Section from './components/Section';
import RoutineBuilder from './components/RoutineBuilder';
import ProductPage from './components/ProductPage';
import { CartProvider } from './context/CartContext';
import CartDrawer from './components/CartDrawer';
import './index.css';
import './App.css';

function App() {
  const isProductPage = typeof window !== 'undefined' && window.location.search.includes('page=product');

  if (isProductPage) {
    return (
      <CartProvider>
        <ProductPage />
        <CartDrawer />
      </CartProvider>
    );
  }

  return (
    <CartProvider>
      <div className="app-wrapper">
      <Navbar />
      <Hero />
      <Marquee text="DERMATOLOGIST APPROVED • CLINICALLY TESTED • MEDICAL GRADE • DNA OPTIMIZED • ADVANCED MOLECULAR SCIENCE" dark={true} />

      {/* Brand Narrative Section - using light theme */}
      <Section theme="light">
        <div className="container grid-2-cols">
          <div className="animate-fade">
            <p className="subtitle-text mb-4">The DNA Ethos</p>
            <h2 className="elevation-serif main-heading mb-8">Where Science Meets <br /><span style={{fontWeight: 400, fontStyle: 'italic'}}>Sublime Luxury</span></h2>
            <p className="body-text mb-6">
              DNA PLUS CARE isn't just another skincare brand. We are a medical-first dermatological house dedicated to the art of precision. Our formulations are built on the intersection of genetic insights and advanced molecular science.
            </p>
            <p className="body-text mb-10">
              Every drop is a testament to our commitment to skin health, designed to provide transformative results for the most discerning clients.
            </p>
            <a href="/about" className="btn btn-outline">Discover our Story</a>
          </div>
          <div className="brand-image-wrapper">
            <div className="brand-image-bg"></div>
            <span className="brand-image-watermark">DNA PLUS</span>
            <div className="brand-image-placeholder">
               <div className="placeholder-circle-outer">
                  <div className="placeholder-circle-inner"></div>
               </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Services/Product Lines Preview - using champagne theme */}
      <Section theme="champagne">
        <div className="container">
          <div className="text-center mb-16">
            <p className="subtitle-text mb-4">Curated Solutions</p>
            <h2 className="elevation-serif main-heading">Our Product Lines</h2>
          </div>
          
          <div className="grid-3-cols">
            {['Ectoheal', 'Sebufree', 'Silky'].map((line) => {
              const imageSrc = `/${line.toLowerCase()}.png`;
              
              return (
                <div key={line} className="product-card">
                  <div className="product-image-wrapper">
                    <img src={imageSrc} alt={`${line} Product`} className="product-image" />
                  </div>
                  <h3 className="elevation-serif product-title">{line}</h3>
                  <p className="product-desc">Professional grade formulas designed for deep cellular restoration and balance.</p>
                  <a href="/?page=product" className="product-link btn btn-outline" style={{textDecoration: 'none', display: 'inline-block'}}>Explore Collection</a>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* The Routine Builder (Decision Engine) - using dark theme for focus */}
      <Section theme="dark">
        <RoutineBuilder />
      </Section>

      {/* Footer */}
      <footer className="footer">
        <div className="container grid-4-cols">
          <div className="footer-col-main">
            <a href="/" className="footer-logo elevation-serif" dir="ltr">
              DNA<span>PLUS</span>CARE
            </a>
            <p className="footer-desc">
              Revolutionizing skincare through the lens of genetic science and medical luxury.
            </p>
            <div className="social-links">
              {['Instagram', 'Facebook', 'LinkedIn'].map(social => (
                <a key={social} href="#">{social}</a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="subtitle-text footer-heading mb-8">Collections</h4>
            <ul className="footer-links">
              <li><a href="#">Ectoheal</a></li>
              <li><a href="#">Sebufree</a></li>
              <li><a href="#">Silky</a></li>
              <li><a href="#">New Arrivals</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="subtitle-text footer-heading mb-8">Company</h4>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Science</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>© 2026 DNA PLUS CARE. All Rights Reserved.</p>
          <div className="footer-legal">
            <a href="#">Terms</a>
            <a href="#">Shipping</a>
          </div>
        </div>
      </footer>
    </div>
    <CartDrawer />
  </CartProvider>
);
}

export default App;
