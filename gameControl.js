let gameControl = (function () {
  const cellsList = Array.from(document.getElementById("game-board").children);
  const gameResult = document.getElementById("game-result");
  cellsList.forEach((element) => {
    element.addEventListener("click", (event) => {
      const cellIdx = parseInt(element.getAttribute("data-cell")) - 1;
      let row = Math.floor(cellIdx / 3);
      let column = cellIdx % 3;

      if (gameBoard.isEmpty(row, column)) {
        gameBoard.makeMove(row, column);
      }

      if (gameBoard.gameOver()) {
        let result = gameBoard.gameResult();
        let resultMessage =
          result === 1
            ? "First Player Wins"
            : result === 2
            ? "Second Player Wins"
            : "Draw!!";
        gameResult.innerText = resultMessage;
        setTimeout(() => {
          gameBoard.reset();
          gameResult.innerText = "";
        }, 3000);
      }
    });
  });
})();
