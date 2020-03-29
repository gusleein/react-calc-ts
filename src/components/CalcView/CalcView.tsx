import React from "react";

export class CalcView extends React.Component<any, any> {
  value: string = '';

  insert(val: string | number) {
    this.value += val
  }

  render() {
    return (
      <table className="CalcView_table">
        <tr>
          <td colSpan={4}><input type="text" id="CalcView_input"/></td>
        </tr>
        <tr>
          <td>
            <button onClick={this.insert(1)}>1</button>
          </td>
          <td>2</td>
          <td>3</td>
        </tr>
        <tr>
          <td>4</td>
          <td>5</td>
          <td>6</td>
        </tr>
        <tr>
          <td>7</td>
          <td>8</td>
          <td>9</td>
        </tr>
      </table>
    )
  }
}