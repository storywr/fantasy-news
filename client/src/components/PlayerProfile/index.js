
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from 'material-ui/Grid'
import PlayerCard from '../PlayerCard/index'

class PlayerProfile extends Component {

  render() {

    return (
      <div>
        <Grid container spacing={40}>
          <Grid item xs={6}>
            <PlayerCard />
          </Grid>
          <Grid item xs={6}>
            <PlayerCard />
          </Grid>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerProfile);