// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux';
import {addBand} from '../actions/band'

class BandInput extends Component {
    constructor() {
        super();
    
        this.state = {
          text: ''
        };
      }
    
      handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value}) //each input needs a name prop
      }
    
      handleSubmit = (event) => {
        event.preventDefault()
        this.props.addBand(this.state)
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>
                Name
                <input onChange={this.handleChange} id="name" name="text" type="text" value={this.state.name}/>
              </label>
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        );
      }
    }
