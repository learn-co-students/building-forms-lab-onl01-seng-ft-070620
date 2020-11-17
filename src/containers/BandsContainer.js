import React, { Component } from 'react'
import {connect} from 'react-redux'
import BandInput from '../components/BandInput'
import Bands from '../components/Bands'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        <Bands bands={this.props.bands}/>
      </div>
    )
  }
}

// this equals the code below
const mapStateToProps = ({bands}) => ({bands})

// const mapStateToProps = state => {
//   return ({
//       bands: state.bands
//   })
// }

// this equals the code below
const mapDispatchToProps = dispatch => ({ addBand: band => dispatch({type: 'ADD_BAND', band}) })

// const mapDispatchToProps = dispatch => ({
//   addBand: band => dispatch({type: 'ADD_BAND', band})
// })

export default connect(mapStateToProps,mapDispatchToProps)(BandsContainer)