import React, { Component } from 'react'
import { addBand } from '../actions/band'
import BandInput from '../components/BandInput'
import addBand from '../actions/band'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={addBand}/>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBand: (formData) => dispatch(addBand(formData))
  }
}

export default connect(null, mapDispatchToProps)(BandsContainer);
