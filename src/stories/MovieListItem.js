import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import PropTypes from 'prop-types';
import './movie_list_item.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export const MovieListItem = ({ title, uri, overview, ...props }) => {
  const classes = useStyles();

  const renderImage = () => {
    if (uri && uri != "") {
      return (
        <CardMedia
          className={classes.media}
          image={uri}
          title={title}
        />
      );
    } 
    return (null);
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
          {renderImage()}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {overview}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

MovieListItem.propTypes = {
};

MovieListItem.defaultProps = {
};
