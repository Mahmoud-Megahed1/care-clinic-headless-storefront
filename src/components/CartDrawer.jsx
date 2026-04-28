import React from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './CartDrawer.css';

const CartDrawer = () => {
  const { isCartOpen, closeCart, cartItems, removeFromCart, cartTotal } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`cart-backdrop ${isCartOpen ? 'open' : ''}`} 
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2 className="elevation-serif">Your Ritual</h2>
          <button className="cart-close-btn" onClick={closeCart}>
            <X size={24} />
          </button>
        </div>

        <div className="cart-body">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <p className="body-text">Your ritual is currently empty.</p>
              <button className="btn btn-outline mt-4" onClick={closeCart}>
                Discover Solutions
              </button>
            </div>
          ) : (
            <div className="cart-items-list">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="cart-item-details">
                    <div className="cart-item-top">
                      <h4 className="elevation-serif" dir="ltr">{item.name}</h4>
                      <button className="cart-item-remove" onClick={() => removeFromCart(item.id)}>
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <p className="cart-item-type">{item.type || 'Treatment'}</p>
                    <div className="cart-item-bottom">
                      <div className="cart-item-qty">
                        <span>Qty: {item.quantity}</span>
                      </div>
                      <p className="cart-item-price">{item.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-subtotal">
              <span className="body-text">Subtotal</span>
              <span className="elevation-serif">SAR {cartTotal}</span>
            </div>
            <p className="cart-shipping-note">Shipping & taxes calculated at checkout</p>
            <button className="btn btn-primary cart-checkout-btn">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
