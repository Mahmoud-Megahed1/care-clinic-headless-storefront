import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import './index.css';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Hero />
      <Marquee text="PREMIUM DERMATOLOGY • CLINICALLY PROVEN • ADVANCED CELLULAR RESTORATION" dark={true} />

      {/* Brand Narrative Section */}
      <section className="section-white">
        <div className="container grid-2-cols">
          <div className="animate-fade">
            <p className="luxury-text mb-4">The DNA Ethos</p>
            <h2 className="text-5xl mb-8">Where Science Meets <br /><span className="italic" style={{fontWeight: 300}}>Sublime Luxury</span></h2>
            <p className="text-lg mb-6" style={{color: 'var(--color-dark-gray)'}}>
              DNA PLUS CARE isn't just another skincare brand. We are a medical-first dermatological house dedicated to the art of precision. Our formulations are built on the intersection of genetic insights and advanced molecular science.
            </p>
            <p className="text-lg mb-10" style={{color: 'var(--color-dark-gray)'}}>
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
      </section>

      {/* Services/Product Lines Preview */}
      <section className="section-light">
        <div className="container">
          <div className="text-center mb-16">
            <p className="luxury-text mb-4">Curated Solutions</p>
            <h2 className="text-5xl">Our Product Lines</h2>
          </div>
          
          <div className="grid-3-cols">
            {['Ectoheal', 'Sebufree', 'Silky'].map((line) => {
              const imageSrc = line === 'Ectoheal' ? '/ectoheal.png' : line === 'Sebufree' ? '/sebufree.png' : null;
              
              return (
                <div key={line} className="product-card">
                  <div className="product-image-wrapper">
                    {imageSrc ? (
                      <img src={imageSrc} alt={`${line} Product`} className="product-image" />
                    ) : (
                      <span className="product-placeholder">{line[0]}</span>
                    )}
                  </div>
                  <h3 className="product-title">{line}</h3>
                  <p className="product-desc">Professional grade formulas designed for deep cellular restoration and balance.</p>
                  <button className="product-link">Explore Collection</button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container grid-4-cols">
          <div className="footer-col-main">
            <a href="/" className="footer-logo">
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
            <h4 className="luxury-text footer-heading mb-8">Collections</h4>
            <ul className="footer-links">
              <li><a href="#">Ectoheal</a></li>
              <li><a href="#">Sebufree</a></li>
              <li><a href="#">Silky</a></li>
              <li><a href="#">New Arrivals</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="luxury-text footer-heading mb-8">Company</h4>
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
  );
}

export default App;
