import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import PropTypes from 'prop-types';
import './movie_list.css';

import { SingleMovie } from './stories/MovieListItem.stories';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const MovieList = ({ title, uri, overview, ...props }) => {
  const classes = useStyles();

  return (
    <div>
      <h1
        className="storybook-movie-list-item"
      >
        {title}
      </h1>
      <img
        src={uri}
        alt={title}
      />
      <p>
        {overview}
      </p>
    </div>
  );
}

MovieList.propTypes = {
};

MovieList.defaultProps = {
};
