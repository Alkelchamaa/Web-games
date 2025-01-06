var board;
var playerO = "O";
var playerX = "X";
var currPlayer = playerO;
var gameOver = false;

window.onload = function() {
    setGame();
}

function setGame() {
    board = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
    ];
    
    gameOver = false;
    currPlayer = playerO;

    let boardDiv = document.getElementById("board");
    boardDiv.innerHTML = "";

    for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            if (r == 0 || r == 1) {
                tile.classList.add("horizontal-line");
            }
            if (c == 0 || c == 1) {
                tile.classList.add("vertical-line");
            }
            tile.innerText = "";
            tile.addEventListener("click", setTile);
            boardDiv.appendChild(tile);
        }
    }
}

function setTile() {
    if (gameOver) {
        return;
    }

    let coords = this.id.split("-");    
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    if (board[r][c] != ' ') { 
        return;
    }
    
    board[r][c] = currPlayer; 
    this.innerText = currPlayer; 

    if (currPlayer == playerO) {
        currPlayer = playerX;
    } else {
        currPlayer = playerO;
    }

    checkWinner();
}

function checkWinner() {
    for (let r = 0; r < 3; r++) {
        if (board[r][0] == board[r][1] && board[r][1] == board[r][2] && board[r][0] != ' ') {
            announceWinner(board[r][0]);
            highlightWinner([`${r}-0`, `${r}-1`, `${r}-2`]);
            return;
        }
    }

    for (let c = 0; c < 3; c++) {
        if (board[0][c] == board[1][c] && board[1][c] == board[2][c] && board[0][c] != ' ') {
            announceWinner(board[0][c]);
            highlightWinner([`0-${c}`, `1-${c}`, `2-${c}`]);
            return;
        }
    }

    if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != ' ') {
        announceWinner(board[0][0]);
        highlightWinner(["0-0", "1-1", "2-2"]);
        return;
    }

    if (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] != ' ') {
        announceWinner(board[0][2]);
        highlightWinner(["0-2", "1-1", "2-0"]);
        return;
    }

    if (board.flat().every(cell => cell != ' ')) {
        announceWinner("Tie");
    }
}

function highlightWinner(tiles) {
    tiles.forEach(id => {
        let tile = document.getElementById(id);
        tile.classList.add("winner");
    });
    gameOver = true;
}

function announceWinner(winner) {
    let message = winner === "Tie" ? "It's a Tie!" : `Player ${winner} Wins!`;
    setTimeout(() => {
        alert(message);
        setGame();
    }, 500);
}
