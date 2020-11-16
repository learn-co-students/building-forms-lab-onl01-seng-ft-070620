import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'
import {addBand} from '../actions/addBand'

class BandsContainer extends Component {
  constructor() {
    super()
    this.state = {bands: []}
  }

  render() {
    return(
      <div>
        <BandInput 
          addBand={this.props.addBand}/>
        <ul>
          {this.props.bands.map(b => <li key={b.name}>{b.name}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {bands: state.bands}
}
 
export default connect(mapStateToProps, {addBand})(BandsContainer)
