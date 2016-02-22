import React from 'react';
import classnames from 'classnames';
import Board from './board';
import survive from '../survive';
import States from '../states';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cellSize: 10,
      intervalId: 0,
      rows: 20,
      cols: 20,
      board: {}
    }

    this.random = this.random.bind(this);
    this.blank = this.blank.bind(this);
    this.toggle = this.toggle.bind(this);
    this.update = this.update.bind(this);
    this.handleCellClicked = this.handleCellClicked.bind(this);
  }
  random() {
    let board = {};
    for (let row = 0; row < this.state.rows; row++) {
      for (let col = 0; col < this.state.cols; col++) {
        board[[row,col]] = Math.round(Math.random());
      }
    };

    this.setState({ board: board });
  }
  blank() {
    let board = {};
    for (let row = 0; row < this.state.rows; row++) {
      for (let col = 0; col < this.state.cols; col++) {
        board[[row,col]] = 0;
      }
    };

    this.setState({ board: board });
  }
  toggle() {
    let intervalId = this.state.intervalId;
    if (intervalId) {
      window.cancelAnimationFrame(intervalId);
      intervalId = 0;
    } else {
      intervalId = window.requestAnimationFrame(this.update);
    }
    this.setState({ intervalId: intervalId });
  }
  update() {
    let start = new Date().getTime();

    let board = {};
    for (let row = 0; row < this.state.rows; row++) {
      for (let col = 0; col < this.state.cols; col++) {
        let liveNeighbours = 0;
        for (let i = -1; i < 2; i++) {
          for (let j = -1; j < 2; j++) {
            if ((i != 0 || j != 0) && this.state.board[[row+i,col+j]]) {
              liveNeighbours++;
            }
          }
        }
        board[[row,col]] = survive(this.state.board[[row,col]] ? States.LIVE : States.DEAD, liveNeighbours);
      }
    };

    let now = new Date().getTime();
    let delta = now - start;
    while (now - start < 100) {
        now = new Date().getTime();
    }

    this.setState({ board: board });

    this.forceUpdate();

    if (this.state.intervalId) {
      let intervalId = window.requestAnimationFrame(this.update);
      this.setState({ intervalId: intervalId });
    }
  }
  handleCellClicked(row, col) {
    if (this.state.intervalId) {
      this.toggle();
    }

    this.state.board[[row,col]] = this.state.board[[row,col]] ? 0 : 1;
    this.forceUpdate();
  }
  componentDidMount() {
    this.setState({ cellSize: Math.max(5, Math.floor(Math.min(this.refs.board.getDOMNode().offsetWidth, window.innerHeight) / this.state.cols)) });
  }
  render() {
    let running = this.state.intervalId;

    return (
      <div className="container-fluid" style={{'height': '100%'}}>
        <div className="col-xs-2">
          <button className="btn btn-block btn-default col-xs-12" onClick={this.random}>Random</button>
          <button className="btn btn-block btn-default col-xs-12" onClick={this.blank}>Blank</button>
          <button className={classnames('col-xs-12', 'btn', 'btn-block', 'btn-default', {
            'btn-danger': running,
            'btn-success': !running
          })} onClick={this.toggle}>{this.state.intervalId ? 'Stop' : 'Start'}</button>
        </div>
        <div className="col-xs-10" ref="board">
          <Board cellSize={this.state.cellSize} board={this.state.board} rows={this.state.rows} cols={this.state.cols} onCellClicked={this.handleCellClicked} />
        </div>
      </div>);
  }
}

export default App;
