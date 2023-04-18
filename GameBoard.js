let gameBoard = (function () {
  "use strict";
  // private variables
  let board = new Array(3);
  let moves = 0;
  let currentTurn = false;
  const cellsList = Array.from(document.getElementById("game-board").children);

  // init
  function init() {
    for (let i = 0; i < 3; i++) board[i] = new Array(3).fill(0);
    moves = 0;
    currentTurn = Math.floor(Math.random() * 2);
  }

  // render
  function render() {
    cellsList.forEach((element, index) => {
      let row = Math.floor(index / 3);
      let column = index % 3;
      element.innerHTML =
        board[row][column] === 0 ? "" : board[row][column] === 1 ? "X" : "O";
    });
  }

  // API
  function makeMove(row, column) {
    board[row][column] = currentTurn + 1;
    currentTurn = !currentTurn;
    moves++;
    render();
  }
  function isEmpty(row, column) {
    return Boolean(!board[row][column]);
  }
  function gameOver() {
    return Boolean(gameResult());
  }
  function gameResult() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][0] !== board[i][j]) break;
        if (board[i][0] && j == 2) return board[i][0];
      }
    }

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[0][i] !== board[j][i]) break;
        if (board[i][0] && j === 2) return board[0][i];
      }
    }

    for (let i = 0; i < 3; i++) {
      if (board[0][0] !== board[i][i]) break;
      if (board[i][0] && i === 2) return board[0][0];
    }

    for (let i = 0; i < 3; i++) {
      if (board[2][0] !== board[2 - i][i]) break;
      if (board[i][0] && i === 2) return board[2][0];
    }
    return moves === 9 && 3;
  }

  function reset() {
    init();
    render();
  }

  reset();

  return {
    makeMove,
    isEmpty,
    gameOver,
    gameResult,
    reset,
  };
})();
