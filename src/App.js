import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Basic } from './stories/MyHeader.stories';
import { AllMovies } from './stories/MovieList.stories';

function App() {
  return (
    <div className="App">
      <Basic title="Top Rated Movies" />
    </div>
  );
}

export default App;
