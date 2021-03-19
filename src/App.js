import React, { useState, useEffect } from 'react';
import './App.css';
import getGifts from './services/getGifts';

function App() {
  const [gifts, updateGifts] = useState([]);

  useEffect(() => {
    getGifts({ keyword: 'bayern' }).then((gifts) => updateGifts(gifts));
  }, []);

  return (
    <div className="App">
      <div className="App-content">
        {gifts.map((gift) => (
          <img src={gift} alt="" />
        ))}

        <button onClick={() => updateGifts([])}>Cambiar gifts</button>
      </div>
    </div>
  );
}

export default App;
