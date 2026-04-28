import React, { useState } from 'react';
import { mockQuestions, getRecommendation } from '../utils/mockRecommendationEngine';
import WarmHandoff from './WarmHandoff';
import './RoutineBuilder.css';

const RoutineBuilder = () => {
  // States: intro -> quiz -> analyzing -> result
  const [step, setStep] = useState('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [recommendation, setRecommendation] = useState(null);
  const [showHandoff, setShowHandoff] = useState(false);

  const startQuiz = () => setStep('quiz');

  const handleAnswer = (questionId, value) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    if (currentQuestionIndex < mockQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Finish Quiz and transition to Analyzing state
      setStep('analyzing');
      setTimeout(() => {
        setRecommendation(getRecommendation(newAnswers));
        setStep('result');
      }, 2500); // 2.5s Cinematic Loading for psychological depth
    }
  };

  const currentQuestion = mockQuestions[currentQuestionIndex];

  return (
    <div className="routine-builder-container container">
      
      {step === 'intro' && (
        <div className="rb-intro animate-fade">
          <h2 className="elevation-serif rb-title">Discover Your Ritual</h2>
          <p className="rb-desc">Guided by dermatological research and skin profiling.</p>
          <button className="btn btn-primary" onClick={startQuiz}>Start Analysis</button>
        </div>
      )}

      {step === 'quiz' && (
        <div className="rb-quiz animate-fade" key={currentQuestion.id}>
          <p className="rb-step-indicator">Step {currentQuestionIndex + 1} of {mockQuestions.length}</p>
          <h3 className="elevation-serif rb-question">{currentQuestion.question}</h3>
          <div className="rb-options">
            {currentQuestion.options.map(opt => (
              <button 
                key={opt.id} 
                className="btn btn-outline rb-option-btn"
                onClick={() => handleAnswer(currentQuestion.id, opt.value)}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 'analyzing' && (
        <div className="rb-analyzing animate-fade">
          <div className="rb-spinner"></div>
          {/* Safe Copy: Removing "Clinical" */}
          <p className="rb-analyzing-text elevation-serif">Advanced skin analysis...</p>
          <p className="rb-analyzing-subtext">Finding your ritual...</p>
        </div>
      )}

      {step === 'result' && recommendation && (
        <div className="rb-result animate-fade">
          {/* Closure Copy */}
          <h3 className="elevation-serif rb-result-title">Your personalized routine is ready.</h3>
          <div className="rb-bundle-card">
            <h4 className="rb-bundle-name elevation-serif">{recommendation.title}</h4>
            <p className="rb-bundle-desc">{recommendation.description}</p>
            <div className="rb-products">
              {recommendation.products.map((prod, idx) => (
                <span key={idx} className="rb-product-tag">{prod}</span>
              ))}
            </div>
            {/* The Warm Handoff Intent */}
            <button 
              className="btn btn-primary rb-checkout-btn"
              onClick={() => setShowHandoff(true)}
            >
              Get Your Routine
            </button>
          </div>
        </div>
      )}

      {/* The Cinematic Handoff Overlay */}
      <WarmHandoff 
        isVisible={showHandoff} 
        onComplete={() => {
          console.log("Redirecting to Shopify Checkout...");
          window.location.href = '#shopify-checkout';
          setShowHandoff(false);
        }} 
      />
    </div>
  );
};

export default RoutineBuilder;
