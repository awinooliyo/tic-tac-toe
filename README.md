# Tic-Tac-Toe Game

A simple Tic-Tac-Toe game implemented using HTML, CSS, and JavaScript. The game allows two players to play against each other in a classic 3x3 grid format. This project focuses on clean code structure using the module pattern and factory functions.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Game Rules](#game-rules)
- [How It Works](#how-it-works)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Two-player mode:** Play against another person locally.
- **Interactive UI:** Click on the grid to place your mark.
- **Player names:** Enter player names before starting the game.
- **Win detection:** Automatically detects and announces the winner or a tie.
- **Restart functionality:** Reset the game at any time to start a new round.

## Getting Started

### Prerequisites

To run this project, you need a web browser. No additional software or libraries are required.

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/awinooliyo/tic-tac-toe.git
    ```
2. Navigate to the project directory:
    ```bash
    cd tic-tac-toe
    ```
3. Open the `index.html` file in your web browser:
    - You can either double-click the file in your file explorer or run the following command:
    ```bash
    open index.html
    ```

## Game Rules

- The game is played on a grid that's 3 squares by 3 squares.
- Player 1 is "X" and Player 2 is "O". Players take turns putting their marks in empty squares.
- The first player to get 3 of their marks in a row (horizontally, vertically, or diagonally) wins.
- If all 9 squares are filled and no player has 3 marks in a row, the game ends in a tie.

## How It Works

The game logic is encapsulated in JavaScript using the following modules:

- **Gameboard Module:** Manages the state of the game board as an array.
- **Player Factory:** Creates player objects with a name and symbol.
- **GameController Module:** Handles game flow, including switching turns, checking for wins and ties, and resetting the game.
- **DisplayController Module:** Manages the rendering of the gameboard and user interactions.

The game starts by asking the players to input their names. Players then take turns clicking on the board to place their marks. The game checks for a win or a tie after each move. Players can restart the game at any time using the "Restart" button.

## Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**


## Contributing

Contributions are welcome! If you have any suggestions or improvements, feel free to open an issue or submit a pull request.

1. Fork the repository.
2. Create your feature branch:
    ```bash
    git checkout -b feature/YourFeature
    ```
3. Commit your changes:
    ```bash
    git commit -m 'Add YourFeature'
    ```
4. Push to the branch:
    ```bash
    git push origin feature/YourFeature
    ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
******