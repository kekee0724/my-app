import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// Square 组件渲染了一个单独的 <button>
class Square extends React.Component {
  // 向这个 class 中添加一个构造函数，用来初始化 state
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  render() {
    return (
      // <button className="square" onClick={function() {alert('click'); }}>
      <button
        className="square"
        onClick={() => this.setState({ value: 'X' })}>
        {/* 数据通过 props 的传递，从父组件流向子组件 */}
        {this.state.value}
      </button>
    );
  }
}
// Board 组件渲染了 9 个方块。
class Board extends React.Component {
  renderSquare(i) {
    // 传递一个名为 value 的 prop 到 Square 当中
    return <Square value={i} />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
// Game 组件渲染了含有默认值的一个棋盘
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);