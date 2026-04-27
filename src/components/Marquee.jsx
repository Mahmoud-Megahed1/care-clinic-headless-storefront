import React from 'react';
import './Marquee.css';

const Marquee = ({ text, dark = false }) => {
  const repeatedText = new Array(10).fill(text);

  return (
    <div className={`marquee-container ${dark ? 'dark' : ''}`}>
      <div className="marquee-content">
        {repeatedText.map((item, index) => (
          <span key={index} className="marquee-item">
            {item} <span className="marquee-separator">•</span>
          </span>
        ))}
      </div>
      {/* Duplicate for seamless infinite loop */}
      <div className="marquee-content" aria-hidden="true">
        {repeatedText.map((item, index) => (
          <span key={`dup-${index}`} className="marquee-item">
            {item} <span className="marquee-separator">•</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
