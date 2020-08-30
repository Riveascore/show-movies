import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Basic } from './stories/MyHeader.stories';
import { AllMovies } from './stories/MovieList.stories';
import movies from './data/movies';

function App() {
  return (
    <div className="App">
      <Basic title="Top Rated Movies" />
      <AllMovies movies={movies} />
    </div>
  );
}

export default App;
