
import React, { Component } from 'react';
import { connect } from 'react-redux';

class PlayerProfile extends Component {

  render() {

    return (
      <div>
        <div>test</div>
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