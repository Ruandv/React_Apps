import React from 'react';

import './App.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
function App() {
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
          This is the content
        </div>
      </header>
    </div >
  );
}

export default App;
