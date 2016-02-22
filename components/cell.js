import React from 'react';

class Cell extends React.Component {
  render() {
    let cellStyle = {
      'width': this.props.cellSize,
      'height': this.props.cellSize,
      'border-width': 1,
      'border-style': 'solid',
      'border-color': 'black',
      'background-color': (this.props.cellState ? 'black' : 'white')
    };

    return <td style={cellStyle} onClick={() => this.props.onCellClicked(this.props.row, this.props.col)}></td>
  }
}

export default Cell;
