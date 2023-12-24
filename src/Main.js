import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import './Style2.css';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/getstart');
  };

  return (
    <>
      <Header />
      <main className="main">
        <div className="container start">
          <div className="video">
            <img
              className="thumbnail"
             src={require('./image/video-thumbnail.e39d4546ab24c71915fc.png')}
            />
          </div>
          <div style={{ backgroundColor: 'rgb(51, 51, 51)', height: '10px' }}></div>
          <div className="intro">
            <h1 style={{ marginBottom: '0px' }}>
              <span style={{ color: 'rgb(110, 12, 249)' }}>
                Is your church embracing impact
              </span>{' '}
              or AI* hesitant?
            </h1>
            <ol
              type="1"
              className="intro-points-list"
              style={{ margin: '15px auto' }}
            >
              <li>Take this 3-minute assessment</li>
              <li>Invite your team to take it too after you do</li>
              <li>View everyone's results on 1 dashboard</li>
              <li>
                Align on the best next step for your church's approach to AI
              </li>
            </ol>
            <div className="completion">
            <button
              className="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButtonBase-root cta css-1ujsas3"
              tabIndex="0"
              type="button"
              onClick={handleOnClick} 
            >
                GET STARTED
                <span className="MuiTouchRipple-root css-w0pj6f"></span>
            </button>
              <div className="time-estimate">
                
              </div>
            </div>
            <p className="footnote">*Artificial Intelligence</p>
            <p className="disclaimer">
              <span>If you aren't a Senior/Lead/Executive Pastor,</span> please
              ask one of them on your team to first take this test -
              ctt1.bleat.church. That test's result will generate a team link
              so you and other team members can then take this same test
              afterward as a team.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Main;
