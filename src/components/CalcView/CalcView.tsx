import React from "react";

export class CalcView extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {value: ''};
    this.handleClick = this.handleClick.bind(this);
    this.handleClickEqual = this.handleClickEqual.bind(this)
  }

  insert(val: any) {
    if (val)
      this.setState({value: this.state.value + val})
  }

  equal() {

  }

  handleClick(e: any) {
    this.insert(e.target.innerText)
  }

  handleClickEqual(e: any) {
    this.insert(e.target.innerText)
  }

  render() {
    return (
      <table className="CalcView_table">
        <tbody>
        <tr>
          <td colSpan={4}>
            <input type="text" defaultValue={this.state.value} id="CalcView_input"/>
          </td>
        </tr>
        <tr>
          <td>
            <button onClick={this.handleClick}>C</button>
          </td>
          <td>
            <button onClick={this.handleClick}>-</button>
          </td>
          <td>
            <button onClick={this.handleClick}>&lt;</button>
          </td>
          <td>
            <button onClick={this.handleClick}>/</button>
          </td>
        </tr>
        <tr>
          <td>
            <button onClick={this.handleClick}>1</button>
          </td>
          <td>
            <button onClick={this.handleClick}>2</button>
          </td>
          <td>
            <button onClick={this.handleClick}>3</button>
          </td>
          <td>
            <button onClick={this.handleClick}>*</button>
          </td>
        </tr>
        <tr>
          <td>
            <button onClick={this.handleClick}>4</button>
          </td>
          <td>
            <button onClick={this.handleClick}>5</button>
          </td>
          <td>
            <button onClick={this.handleClick}>6</button>
          </td>
          <td>
            <button onClick={this.handleClick}>-</button>
          </td>
        </tr>
        <tr>
          <td>
            <button onClick={this.handleClick}>7</button>
          </td>
          <td>
            <button onClick={this.handleClick}>8</button>
          </td>
          <td>
            <button onClick={this.handleClick}>9</button>
          </td>
          <td>
            <button onClick={this.handleClick}>+</button>
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            <button onClick={this.handleClick}>0</button>
          </td>
          <td>
            <button onClick={this.handleClick}>.</button>
          </td>
          <td>
            <button onClick={this.handleClickEqual}>=</button>
          </td>
        </tr>
        </tbody>
      </table>
    )
  }
}