const board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

let currentPlayer = "X";

function makeMove(row, col) {
    if (!board[row][col]) {
        board[row][col] = currentPlayer;
        document.getElementById("board").children[row * 3 + col].textContent = currentPlayer;
        if (checkWinner()) {
            setTimeout(() => alert("Player " + currentPlayer + " wins!"), 100);
            resetBoard();
        } else if (isDraw()) {
            setTimeout(() => alert("It's a draw!"), 100);
            resetBoard();
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
}

function checkWinner() {
    for (let i = 0; i < 3; i++) {
        if (board[i][0] && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
            return true;
        }
        if (board[0][i] && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
            return true;
        }
    }
    if (board[0][0] && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        return true;
    }
    if (board[0][2] && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
        return true;
    }
    return false;
}

function isDraw() {
    return board.every(row => row.every(cell => cell));
}

function resetBoard() {
    board.forEach(row => row.fill(""));
    currentPlayer = "X";
    const cells = document.getElementsByClassName("cell");
    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = "";
    }
}
