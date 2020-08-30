import React from 'react';

import MovieList from './MovieList';

import movies from '../data/movies';

export default {
  title: 'Example/MovieList',
  component: MovieList,
};

const Template = (args) => <MovieList {...args} />;

export const AllMovies = Template.bind({});
AllMovies.args = {
  movies: [
    movies[0]
  ]
};
