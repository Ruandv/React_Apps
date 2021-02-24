import React from 'react';
import useSound from 'use-sound';

import './App.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
function App() {
  const soundUrl = './nono.mp3';

  const [play, { stop }] = useSound(
    soundUrl,
    { volume: 0.5 }
  );

  return (
    <div className="App">
      <div
        className={serviceWorkerRegistration.isOnline() === 'true' ? 'online' : 'offline'}
      >
        <div className='statusHeader'>
          <img src={serviceWorkerRegistration.isOnline() ? './Offline.png' : './Offline.png'} alt="appStatus" />
          Your app status
        </div>
      </div>
      <header className="App-body">
        <div className="App-content">
          <div
            onMouseEnter={() => {
              setIsHovering(true);
              play();
            }}
            onMouseLeave={() => {
              setIsHovering(false);
              stop();
            }}
          >NO NO NO
          </div>
        </div>
      </header>
    </div >
  );
}

export default App;
