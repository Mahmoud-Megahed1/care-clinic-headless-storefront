import React, { useEffect, useState } from 'react';
import './WarmHandoff.css';

const WarmHandoff = ({ isVisible, onComplete }) => {
  const [phase, setPhase] = useState('entering'); // entering -> holding -> exiting

  useEffect(() => {
    if (isVisible) {
      setPhase('entering');
      
      // Hold the screen for 2.5 seconds to build anticipation and read the text
      const holdTimer = setTimeout(() => {
        setPhase('holding');
      }, 500); // 500ms fade in

      const exitTimer = setTimeout(() => {
        setPhase('exiting');
        if (onComplete) onComplete();
      }, 3000); // 2.5s hold + 500ms fade in

      return () => {
        clearTimeout(holdTimer);
        clearTimeout(exitTimer);
      };
    }
  }, [isVisible, onComplete]);

  if (!isVisible && phase !== 'exiting') return null;

  return (
    <div className={`warm-handoff-overlay ${phase}`}>
      <div className="handoff-content">
        <h2 className="handoff-logo elevation-serif" dir="ltr">DNA<span>PLUS</span>CARE</h2>
        <div className="handoff-line-container">
           <div className="handoff-progress-line"></div>
        </div>
        <p className="handoff-text">Securing your ritual...</p>
      </div>
    </div>
  );
};

export default WarmHandoff;
