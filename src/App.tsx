import React from 'react';
import MenuItemComponent from "./components/menuItem"
import './App.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { MenuItem } from './models/MenuItem';

function App() {
  const productItems: MenuItem[] = [
    {
      "code": "B1", "shortDescription": "Saucy Burger", "longDescription": "A very nice burger", "imageUrl": "./burger1.png", "imageBase64": "",
      "price": 23.2
    },
    {
      "code": "B2", "shortDescription": "Big Burger", "longDescription": "A big burger with patties", "imageUrl": "./burger2.png", "imageBase64": "",
      "price": 23.2
    },
    {
      "code": "B1", "shortDescription": "Saucy Burger", "longDescription": "A very nice burger", "imageUrl": "./burger1.png", "imageBase64": "",
      "price": 23.2
    },
    {
      "code": "B2", "shortDescription": "Big Burger", "longDescription": "A big burger with patties", "imageUrl": "./burger2.png", "imageBase64": "",
      "price": 23.2
    },
    {
      "code": "F1", "shortDescription": "Big Fruit basket with info", "longDescription": "A big burger with patties", "imageUrl": "./fruit.png", "imageBase64": "",
      "price": 23.2
    }
  ]
  return (
    <div className="App">
      <div
        className={serviceWorkerRegistration.isOnline() === 'true' ? 'online' : 'offline'}
      >
        <div className='statusHeader'>
          <img src={serviceWorkerRegistration.isOnline() === 'true' ? './Online.png' : './Offline.png'} alt="appStatus" />
          Your app status {serviceWorkerRegistration.isOnline().toString()}
        </div>
      </div>
      <div className="App-body">
        {productItems.map((item, i) => (MenuItemComponent(item)))}
      </div >
    </div >
  );
}

export default App;
