import React from 'react';
import Navbar from './Navbar';
import Section from './Section';
import { useCart } from '../context/CartContext';
import './ProductPage.css';

const ProductPage = () => {
  const { addToCart } = useCart();

  // Mock Data for "Silky" Serum
  const product = {
    name: 'Silky',
    type: 'Cellular Restoration Serum',
    price: 'SAR 450',
    description: 'A high-molecular weight serum engineered for complete DNA repair, cellular turnover, and deep hydration. Formulated to mimic the skin’s natural lipid barrier.',
    clinicalFocus: ['Fine Lines & Wrinkles', 'Loss of Elasticity', 'Dullness'],
    ingredients: 'Hyaluronic Acid 2%, Peptides, Ectoin, Niacinamide 5%.',
    image: '/silky.png'
  };

  return (
    <div className="app-wrapper">
      <Navbar />
      
      <Section theme="light" className="product-decision-engine">
        <div className="container product-grid">
          
          {/* Left: Visual Evidence */}
          <div className="product-gallery">
            <div className="product-image-main">
              <img src={product.image} alt={product.name} />
            </div>
            {/* Minimalist thumbnail indicators */}
            <div className="product-gallery-hints">
              <span className="hint active"></span>
              <span className="hint"></span>
              <span className="hint"></span>
            </div>
          </div>

          {/* Right: The Decision Logic */}
          <div className="product-info animate-fade">
            <div className="product-header">
              <span className="product-type">{product.type}</span>
              <h1 className="elevation-serif product-name" dir="ltr">{product.name}</h1>
              <p className="product-price">{product.price}</p>
            </div>

            <div className="product-divider"></div>

            <div className="product-logic-section">
              <p className="body-text">{product.description}</p>
            </div>

            <div className="product-clinical-focus">
              <h3 className="subtitle-text mb-4">Clinical Focus</h3>
              <ul className="focus-list">
                {product.clinicalFocus.map((focus, idx) => (
                  <li key={idx}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {focus}
                  </li>
                ))}
              </ul>
            </div>

            <div className="product-actions">
              <button 
                className="btn btn-primary add-to-cart-btn"
                onClick={() => addToCart({
                  id: 'silky-01',
                  name: product.name,
                  type: product.type,
                  price: product.price,
                  image: product.image
                })}
              >
                Add to Ritual — {product.price}
              </button>
              <p className="shipping-hint">Complimentary shipping on orders over SAR 500</p>
            </div>

            {/* Accordions for Science / Ingredients */}
            <div className="product-accordions">
              <details className="accordion">
                <summary className="elevation-serif">The Molecular Science</summary>
                <div className="accordion-content body-text">
                  Our exclusive high-molecular weight complex works at the cellular level to stimulate natural collagen production and repair DNA damage caused by environmental stress.
                </div>
              </details>
              <details className="accordion">
                <summary className="elevation-serif">Key Ingredients</summary>
                <div className="accordion-content body-text">
                  {product.ingredients}
                </div>
              </details>
              <details className="accordion">
                <summary className="elevation-serif">How to Apply</summary>
                <div className="accordion-content body-text">
                  Apply 2-3 drops to clean, dry skin morning and evening. Follow with Ectoheal Barrier Cream to lock in active ingredients.
                </div>
              </details>
            </div>
          </div>

        </div>
      </Section>
    </div>
  );
};

export default ProductPage;
