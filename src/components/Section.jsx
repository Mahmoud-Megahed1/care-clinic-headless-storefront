import React from 'react';
import './Section.css';

const Section = ({ id, theme = 'light', className = '', children, ...props }) => {
  // theme options: 'light' (off-white), 'dark' (matte black), 'champagne'
  return (
    <section 
      id={id} 
      className={`env-section env-${theme} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
