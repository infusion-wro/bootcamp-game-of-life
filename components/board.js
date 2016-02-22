import React from 'react';
import Cell from './cell';

class Board extends React.Component {
  render() {
    let rows = [];
    for (var row = 0; row < this.props.rows; row++) {
      let cols = [];
      for (var col = 0; col < this.props.cols; col++) {
        cols.push(<Cell key={row + ',' + col} row={row} col={col} cellState={this.props.board[[row,col]]} cellSize={this.props.cellSize} onCellClicked={this.props.onCellClicked} />)
      }
      rows.push(<tr>{cols}</tr>);
    };

    return (
      <table>{rows}</table>
    );
  }
}

export default Board;
