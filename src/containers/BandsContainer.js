import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'
import Bands from '../components/Bands'

class BandsContainer extends Component {
  handleAddBand = (band) => {
    this.props.addBand(band)
  }

  render() {
    return(
      <div>
        <BandInput addBand={this.handleAddBand} />
        <Bands bands={this.props.bands} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: band => dispatch({
      type: 'ADD_BAND',
      band: band
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
