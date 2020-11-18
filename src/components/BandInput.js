import React, { Component } from 'react'

export default class BandInput extends Component {
  state = {name: ''}

  handleChange = event => {
    this.setState({ name: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({ name: '' })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>Band name: </label>
        <input
          name='name'
          value={this.state.name}
          onChange={this.handleChange}
        >
        </input>
        <input type='submit'></input>
      </form>
    )
  }

}
