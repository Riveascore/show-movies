import React from 'react';

import MovieListItem from './MovieListItem';

export default {
  title: 'Example/MovieListItem',
  component: MovieListItem,
};

const Template = (args) => <MovieListItem {...args} />;

export const HasImage = Template.bind({});
HasImage.args = {
  title: "Title",
  uri: 'https://i.pinimg.com/originals/d7/87/da/d787da8630ce5dfcd2d7f375b03efc55.png',
  overview: "Overview"
};

export const NoImage = Template.bind({});
NoImage.args = {
  title: "Title",
  overview: "Overview"
};
