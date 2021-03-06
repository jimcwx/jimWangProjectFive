import React, { Component } from 'react';

class ChampCheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      champType: this.props.type,
      isChecked: true,
    }
  }
  // This function helps decide whether to add or remove the user champion class selection from the user selection array on the MainPage component with two functions passed down from there.
  userClick = () => {
    if (this.state.isChecked) {
      this.props.userSelectClassType(this.state.champType);
    } else {
      this.props.userUnselectClassType(this.state.champType);
    }
    this.setState({
      isChecked: !this.state.isChecked,
    })
  }
  // This function allows the user to make their champion class selection using the enter and tab keys
  keyUpHandler = (e) => {
    if (e.keyCode === 13) {
      this.userClick();
    } 
  }
  render() {
    return (
      <label htmlFor={`checkbox${this.props.index}`} tabIndex="0" onKeyUp={this.keyUpHandler}>
        <div className={this.state.isChecked===true ? "unclicked":"clicked"}> </div>
        <h3>{this.state.champType}</h3>
        <img src={this.props.url} alt={`icon for ${this.state.champType} class`} />
        <input type="checkbox" name={`checkbox${this.props.index}`} id={`checkbox${this.props.index}`} value={this.state.champType} onClick={this.userClick} />
      </label>
    );
  }
}

export default ChampCheckBox;