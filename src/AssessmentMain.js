import React, { useState } from 'react';
import Header from './Header';
import './Style2.css';
import { useNavigate } from 'react-router-dom';

const QuestionWrapper = ({ questionNumber, children }) => (
  <div className={`question-wrapper question-${questionNumber}`}>
    {children}
  </div>
);

const AssessmentMain = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const handleSliderPointClick = (value) => {
    console.log('Slider point clicked:', value);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestion((prevQuestion) => Math.max(1, prevQuestion - 1));
  };

  const handleBackButtonClick = () => {
    // Navigate to the main page
    navigate('/');
  };

  return (
    <>
      <Header />
      <main className="main">
        <div className="container assessment">
          <div className="section-progress-top">
            <div style={{ padding: '45px 15px 15px' }}>
              <div style={{ margin: '0 auto' }}>
                <span
                  className="MuiLinearProgress-root MuiLinearProgress-colorPrimary MuiLinearProgress-determinate custom-bar css-d9i3bi"
                  role="progressbar"
                  aria-valuenow="13"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <span
                    className="MuiLinearProgress-bar MuiLinearProgress-barColorPrimary MuiLinearProgress-bar1Determinate css-t752vm"
                    style={{ transform: 'translateX(-87%)' }}
                  ></span>
                </span>
                <p className="current-section" style={{ padding: '0 10px' }}>
                  Strategy
                </p>
              </div>
            </div>
          </div>

          <div className="MuiBox-root css-8atqhb">
            <div className="MuiStepper-root MuiStepper-horizontal css-u4p24i"></div>
          </div>

          <div>
            <div className="steps-container">
              <div>
                <div className="steps">
                  <div className="progress-indicator">
                    <strong>{currentQuestion}</strong>/3
                  </div>
                  <QuestionWrapper questionNumber={currentQuestion}>
                    <div className="question" style={{ minHeight: '130px' }}>
                      {currentQuestion === 1 && (
                        <p style={{ maxWidth: '65ch' }}>
                          Our leadership team knows of the potential risks and
                          rewards of leveraging AI.
                        </p>
                      )}
                      {currentQuestion === 2 && (
                        <p style={{ maxWidth: '65ch' }}>
                          Question 2: Your second question goes here.
                        </p>
                      )}
                      {currentQuestion === 3 && (
                        <p style={{ maxWidth: '65ch' }}>
                          Question 3: Your third question goes here.
                        </p>
                      )}
                    </div>
                    <div className="slider-container" style={{ width: '85%' }}>
                      <div className="slider">
                        {/* Your slider code goes here */}
                        <span className="slider-rail"></span>
                        <span className="slider-track"></span>
                        <span
                          className="slider-thumb"
                          onClick={() => handleSliderPointClick(80)}
                        ></span>
                      </div>
                      <div className="slider-points">
                        <a className="point" style={{ left: '0%', opacity: 0 }}></a>
                          <a className="point" style={{ left: '20%', opacity: 1 }}></a>
                          <a className="point" style={{ left: '40%', opacity: 1 }}></a>
                          <a className="point" style={{ left: '60%', opacity: 1 }}></a>
                          <a
                            className="point"
                            style={{ left: '80%', opacity: 1 }}
                            onClick={() => handleSliderPointClick(80)}
                          ></a>
                      </div>
                      <div className="slider-labels">
                        <div className="label active" style={{ left: '0%' }}>
                          <p className="desktop" style={{ width: '9ch', marginLeft: '-6ch' }}>
                            Strongly Disagree
                          </p>
                        </div>
                        <div className="label" style={{ left: '20%' }}>
                          <p className="desktop" style={{ width: '9ch', marginLeft: '-5ch' }}>
                            Disagree
                          </p>
                        </div>
                        <div className="label" style={{ left: '40%' }}>
                          <p className="desktop" style={{ width: '9ch', marginLeft: '-5ch' }}>
                            Neutral
                          </p>
                        </div>
                        <div className="label" style={{ left: '60%' }}>
                          <p className="desktop" style={{ width: '9ch', marginLeft: '-5ch' }}>
                            Agree
                          </p>
                        </div>
                        <div className="label" style={{ left: '80%' }}>
                          <p className="desktop" style={{ width: '9ch', marginLeft: '-5ch' }}>
                            Strongly Agree
                          </p>
                        </div>
                      </div>
                      <div className="form-wrapper">
                        <form>
                          <div id="debt-amount-slider">
                            {/* Your slider radio buttons code goes here */}
                            <input
                              type="radio"
                              name="debt-amount"
                              id="1"
                              value="1"
                              required
                            />
                            <label htmlFor="1"></label>
                            <input
                              type="radio"
                              name="debt-amount"
                              id="2"
                              value="2"
                              required
                            />
                            <label htmlFor="2"></label>
                            <input
                              type="radio"
                              name="debt-amount"
                              id="3"
                              value="3"
                              required
                            />
                            <label htmlFor="3"></label>
                            <input
                              type="radio"
                              name="debt-amount"
                              id="4"
                              value="4"
                              required
                            />
                            <label htmlFor="4"></label>
                            <input
                              type="radio"
                              name="debt-amount"
                              id="5"
                              value="5"
                              required
                            />
                            <label htmlFor="5"></label>
                            <div id="debt-amount-pos"></div>
                          </div>
                        </form>
                      </div>  
                    </div>

                    <div className="question-navigation">
                      {currentQuestion > 1 && (
                        <button
                          type="button"
                          onClick={handlePreviousQuestion}
                          className="navigation-button"
                          style={{
                            fontSize: '25px',
                            backgroundColor: 'green',
                            color: 'white',
                          }}
                        >
                          Previous
                        </button>
                      )}
                      {currentQuestion < 3 && (
                        <button
                          type="button"
                          onClick={handleNextQuestion}
                          className="navigation-button"
                          style={{
                            fontSize: '25px',
                            backgroundColor: 'green',
                            color: 'white',
                          }}
                        >
                          Next
                        </button>
                      )}
                    </div>
                  </QuestionWrapper>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={handleBackButtonClick}
            style={{ fontSize: '25px', backgroundColor: 'grey', color: 'white' }}
          >
            Back
          </button>
        </div>
      </main>
    </>
  );
};


export default AssessmentMain;
