var playerRed = "R";
var playerYellow = "Y";
var currentPlayer = playerRed;

var gameOver = false;
var board;
var currentColumns;

var rows = 6;
var columns = 7;

window.onload = function() {
    let playerDot = document.getElementById("playerDot");
    let turnText = document.getElementById("turnText");

    setGame();

    playerDot.classList.add("red-dot");
    turnText.innerText = "Red's Turn";
}

function setGame() {
    board = [];
    currentColumns = [5, 5, 5, 5, 5, 5, 5];

    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            //JS
            row.push(' ');

            //HTML
            // <div id="r-c" class="tile"></div>
            let title = document.createElement("div");
            title.id = r.toString() + "-" + c.toString();
            title.classList.add("tile");
            title.addEventListener("click", setPiece);
            document.getElementById("board").appendChild(title);
        }
        board.push(row);
    }
}

function setPiece() {
    if (gameOver) {
        return;
    }

    let coords = this.id.split("-");
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    r = currentColumns[c];
    if (r < 0) {
        return;
    }

    board[r][c] = currentPlayer;
    let tile = document.getElementById(r.toString() + "-" + c.toString());
    if (currentPlayer == playerRed) {
        tile.classList.add("red-piece");
        currentPlayer = playerYellow;

        playerDot.classList.remove("red-dot");
        playerDot.classList.add("yellow-dot");

        turnText.innerText = "Yellow's Turn";
    } else {
        tile.classList.add("yellow-piece");
        currentPlayer = playerRed;

        playerDot.classList.remove("yellow-dot");
        playerDot.classList.add("red-dot");

        turnText.innerText = "Red's Turn";
    }

    r -= 1;
    currentColumns[c] = r;

    checkWinner();
}

function checkWinner() {
    //Horizontal Check
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns - 3; c++) {
            if (board[r][c] != ' ') {
                if (board[r][c] == board[r][c + 1] && board[r][c] == board[r][c + 2] && board[r][c] == board[r][c + 3]) {
                    setWinner(r, c);
                    return;
                }
            }
        }
    }

    //Vertical Check
    for (let r = 0; r < rows - 3; r++) {
        for (let c = 0; c < columns; c++) {
            if (board[r][c] != ' ') {
                if (board[r][c] == board[r + 1][c] && board[r][c] == board[r + 2][c] && board[r][c] == board[r + 3][c]) {
                    setWinner(r, c);
                    return;
                }
            }
        }
    }

    //Anti-Diagonal Check
    for (let r = 0 ; r < rows - 3; r++) {
        for (let c = 0; c < columns - 3; c++) {
            if (board[r][c] != ' ') {
                if (board[r][c] == board[r + 1][c + 1] && board[r][c] == board[r + 2][c + 2] && board[r][c] == board[r + 3][c + 3]) {
                    setWinner(r, c);
                    return;
                }
            }
        }
    }

    //Diagonal Check
    for (let r = 3; r < rows; r++) {
        for (let c = 0; c < columns - 3; c++) {
            if (board[r][c] != ' ') {
                if (board[r][c] == board[r - 1][c + 1] && board[r - 1][c + 1] == board[r - 2][c + 2] && board[r - 2][c + 2] == board[r - 3][c + 3]) {
                    setWinner(r, c);
                    return;
                }
            }
        }
    }
}

function setWinner(r, c) {
    let winner = document.getElementById("winner");
    if (board[r][c] == playerRed) {
        let winner = "Red"
        displayWinner(winner);
    } else {
        let winner = "Yellow"
        displayWinner(winner);
    }

    gameOver = true;
}

function displayWinner(winner) {
    const modal = document.getElementById('winnerModal');
    const winnerMessage = document.getElementById('winnerMessage');
    const closeModal = document.getElementById('closeModal');

    winnerMessage.textContent = `${winner} wins!`;
    modal.style.display = 'block';

    closeModal.onclick = function () {
        modal.style.display = 'none';
    };

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}