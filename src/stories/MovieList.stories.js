import React from 'react';

import { MovieList } from './MovieList';

export default {
  title: 'Example/MovieList',
  component: MovieList,
};

const Template = (args) => <MovieList {...args} />;

export const AllMovies = Template.bind({});
AllMovies.args = {
  movies: [
    {
      title: "Title",
      uri: 'https://i.pinimg.com/originals/d7/87/da/d787da8630ce5dfcd2d7f375b03efc55.png',
      overview: "Overview"
    }
  ]
};
