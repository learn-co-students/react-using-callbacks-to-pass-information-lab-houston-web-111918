import React, { Component } from "react";
import chromeBoi from "./data.js";
import Cell from "./Cell.js";
import ColorSelector from "./ColorSelector.js";

export default class Matrix extends Component {
  state = {
    selectedColor: "#FFF"
  };

  theSelectedColor = newColor => {
    this.setState({ selectedColor: newColor });
  };

  newSelectedColor = () => this.state.selectedColor;

  genRow = vals =>
    vals.map((val, idx) => (
      <Cell key={idx} color={val} newSelectedColor={this.newSelectedColor} />
    ));

  genMatrix = () =>
    this.props.values.map((rowVals, idx) => (
      <div key={idx} className="row">
        {this.genRow(rowVals)}
      </div>
    ));

  render() {
    return (
      <div id="app">
        <ColorSelector theSelectedColor={this.theSelectedColor} />
        <div id="matrix">{this.genMatrix()}</div>
      </div>
    );
  }
}

Matrix.defaultProps = {
  values: chromeBoi
};
