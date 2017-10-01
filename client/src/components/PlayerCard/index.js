import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
};

function PlayerCard(props) {
  const classes = props.classes;
  const name = props.player.name
  const player = props.player.player

  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={'https://usatftw.files.wordpress.com/2014/10/nfl_logo_new2.jpg?w=1000&h=750'}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography type="headline" component="h2">
            {props.player.name}
          </Typography>
          <Typography component="p">
            Age: {player.age}
          </Typography>
          <Typography component="p">
            Height: {player.height}
          </Typography>
          <Typography component="p">
            Weight: {player.weight}
          </Typography>
        </CardContent>
        <CardActions>
          <Button dense color="primary">
            Share
          </Button>
          <Button dense color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

PlayerCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PlayerCard);