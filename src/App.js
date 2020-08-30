import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Basic } from './stories/MyHeader.stories';
import { SingleMovie } from './stories/MovieListItem.stories';

function App() {
  return (
    <div className="App">
      <Basic title="Top Rated Movies" />
    </div>
  );
}

export default App;
