import React, { Component } from "react";
import { connect } from "react-redux";
import BandInput from "../components/BandInput";
import Bands from "../components/Bands";

class BandsContainer extends Component {
  render() {
    const { bands, addBand } = this.props;
    // debugger;
    return (
      <div>
        <BandInput addBand={addBand} />
        <Bands bands={bands} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bands: state.bands,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addBand: (band) => dispatch({ type: "ADD_BAND", band }),
});

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
