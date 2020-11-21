import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'

class BandsContainer extends Component {


  render() {
    const bands = this.props.bands.map((band, index) => {
      return <li key={index}>{band.name}</li>
      })
      
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <ul>
          {bands}
        </ul>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({ addBand: band => dispatch({ type: 'ADD_BAND', band })})
const mapStateToProps = state => {
  return { bands: state.bands }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
