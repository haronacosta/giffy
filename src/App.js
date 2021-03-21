import React from 'react';
import './App.css';
import ListOfGifts from './components/ListOfGifts';
import { Route, Link } from 'wouter';

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <h1>App de gifs</h1>
        <Link className="link" href="/gif/batman">
          Gif de Batman
        </Link>
        <Link className="link" href="/gif/superman">
          Gif de Superman
        </Link>
        <Link className="link" href="/gif/aquaman">
          Gif de Aquaman
        </Link>

        <Route path="/gif/:keyword" component={ListOfGifts} />
      </div>
    </div>
  );
}

export default App;
