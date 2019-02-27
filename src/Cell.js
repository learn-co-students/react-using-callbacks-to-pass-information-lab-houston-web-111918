import React, { Component } from "react";

export default class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color
    };
  }

  handleClick = () => {
    const newColor = this.props.newSelectedColor();
    this.setState({
      color: newColor
    });
  };

  render() {
    console.log("this is val", this.props.color);

    return (
      <div
        className="cell"
        style={{ backgroundColor: this.state.color }}
        onClick={this.handleClick}
      />
    );
  }
}
