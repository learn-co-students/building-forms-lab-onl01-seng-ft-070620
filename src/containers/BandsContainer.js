import React, { Component } from 'react'
import { addBand } from '../actions/band'
import BandInput from '../components/BandInput'
import {connect} from 'react-redux'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        {this.props.bands.map((band) => {return <li>{band.name}</li>})}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {bands: state.bands}
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBand: (formData) => dispatch(addBand(formData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
