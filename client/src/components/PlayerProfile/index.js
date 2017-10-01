
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from 'material-ui/Grid'
import PlayerCard from '../PlayerCard/index'
import { fetchProfile } from '../../ducks/profile'
import { bindActionCreators } from 'redux'

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

PlayerProfile.enter = function onEnterApp(store) {
  return ({ params }, replace, callback) => {
    store.dispatch(fetchProfile({id: params.id}))
      .then(() => callback())
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ fetchProfile }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PlayerProfile);