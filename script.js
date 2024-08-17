// The Gameboard Module
const Gameboard = (function() {
    let board = ["", "", "", "", "", "", "", "", ""];

    const getBoard = () => board;

    const setCell = (index, symbol) => {
        if (board[index] === "") {
            board[index] = symbol;
        }
    };

    const resetBoard = () => {
        board = ["", "", "", "", "", "", "", "", ""];
    };

    return { getBoard, setCell, resetBoard };
})();

// Player Factory
const Player = (name, symbol) => {
    return { name, symbol };
};

// The Game Controller Module
const GameController = (function() {
    let player1 = Player('Player 1', 'X');
    let player2 = Player('Player 2', 'O');
    let currentPlayer = player1;

    const getPlayer1 = () => player1;
    const getPlayer2 = () => player2;
    const getCurrentPlayer = () => currentPlayer;

    const switchPlayer = () => {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    };

    const playTurn = (index) => {
        if (Gameboard.getBoard()[index] === "") {
            Gameboard.setCell(index, currentPlayer.symbol);
            if (checkWin()) {
                DisplayController.updateMessage(`${currentPlayer.name} wins!`);
            } else if (checkTie()) {
                DisplayController.updateMessage("It's a tie!");
            } else {
                switchPlayer();
                DisplayController.updateMessage(`${currentPlayer.name}'s turn`);
            }
        }
    };

    const checkWin = () => {
        const board = Gameboard.getBoard();
        const winConditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        return winConditions.some(condition => 
            board[condition[0]] === currentPlayer.symbol &&
            board[condition[0]] === board[condition[1]] &&
            board[condition[1]] === board[condition[2]]
        );
    };

    const checkTie = () => {
        return Gameboard.getBoard().every(cell => cell !== "");
    };

    const resetGame = () => {
        Gameboard.resetBoard();
        currentPlayer = player1;
        DisplayController.renderBoard();
        DisplayController.updateMessage(`${currentPlayer.name}'s turn`);
    };

    return { playTurn, getPlayer1, getPlayer2, getCurrentPlayer, resetGame, checkWin, checkTie };
})();

// The Display Controller Module
const DisplayController = (function() {
    const gameboardContainer = document.querySelector('#gameboard');
    const playerNameInputs = document.querySelectorAll('.player-name');
    const messageDisplay = document.querySelector('#message');
    const restartButton = document.querySelector('#restart');

    const renderBoard = () => {
        gameboardContainer.innerHTML = ''; // Clear previous content
        const board = Gameboard.getBoard();
        board.forEach((cell, index) => {
            const cellElement = document.createElement('div');
            cellElement.classList.add('cell');
            cellElement.textContent = cell;
            cellElement.addEventListener('click', () => handleCellClick(index));
            gameboardContainer.appendChild(cellElement);
        });
    };

    const handleCellClick = (index) => {
        GameController.playTurn(index);
        renderBoard(); // Re-render the board after each move
    };

    const updateMessage = (message) => {
        messageDisplay.textContent = message;
    };

    const setupGame = () => {
        playerNameInputs.forEach((input, index) => {
            const player = index === 0 ? GameController.getPlayer1() : GameController.getPlayer2();
            player.name = input.value || `Player ${index + 1}`;
        });
        Gameboard.resetBoard();
        renderBoard();
        updateMessage(`${GameController.getCurrentPlayer().name}'s turn`);
    };

    const addRestartListener = () => {
        restartButton.addEventListener('click', () => {
            GameController.resetGame();
            setupGame();
        });
    };

    addRestartListener(); // Initialize the restart button listener

    return { renderBoard, updateMessage, setupGame };
})();

DisplayController.setupGame();