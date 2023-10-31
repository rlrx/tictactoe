playerCount = 1;

// gameBoard object module
const gameBoard = (function() {
    let boardArray = ["", "", "", "", "", "", "", "", ""]; // create an empty array of size 9
    function resetBoard() {
        return boardArray = ["", "", "", "", "", "", "", "", ""]; // reset the boardArray
    }
    return {boardArray, resetBoard};
})();






// Player object
function User(name,symbol) {
    let score = 0;
    // include function to increment score later
    return {name, symbol, score};
}




// gameController object
function gameController() {
    function startGame() {
        let boardArray = gameBoard.resetBoard()
        return boardArray;
    }
}




// displayController object
// render tic tac toe grid onto webpage
const  displayController = (function() {
    function displayBoard() {
        let boardContainer = document.querySelector('.boardContainer');
        let squareNum = 1;
        while(squareNum < 10) {
            let grid = document.createElement("div");
            grid.classList.add('grid', `grid${squareNum}`);
            grid.textContent = '';
            grid.addEventListener('click', (event) => {
                // get the clicked element
                const clickedGrid = event.target;

                // access the classes of the clicked element
                const classes = clickedGrid.classList;
                // check if particular class is present to identify grid
                if(classes.contains('grid1')){
                    if(gameBoard.boardArray[0] == ''){
                        if(playerCount % 2 == 0){
                            gameBoard.boardArray[0] = 'X';
                            grid.textContent = 'X';
                            playerCount += 1;
                        }
                        else {
                            gameBoard.boardArray[0] = 'O';
                            grid.textContent = 'O';
                            playerCount += 1;
                        }
                    }
                }
                else if(classes.contains('grid2')){
                    if(gameBoard.boardArray[1] == ''){
                        if(playerCount % 2 == 0){
                            gameBoard.boardArray[1] = 'X';
                            grid.textContent = 'X';
                            playerCount += 1;
                        }
                        else {
                            gameBoard.boardArray[1] = 'O';
                            grid.textContent = 'O';
                            playerCount += 1;
                        }
                    }
                }
                else if(classes.contains('grid3')){
                    if(gameBoard.boardArray[2] == ''){
                        if(playerCount % 2 == 0){
                            gameBoard.boardArray[2] = 'X';
                            grid.textContent = 'X';
                            playerCount += 1;
                        }
                        else {
                            gameBoard.boardArray[2] = 'O';
                            grid.textContent = 'O';
                            playerCount += 1;
                        }
                    }
                }
                else if(classes.contains('grid4')){
                    if(gameBoard.boardArray[3] == ''){
                        if(playerCount % 2 == 0){
                            gameBoard.boardArray[3] = 'X';
                            grid.textContent = 'X';
                            playerCount += 1;
                        }
                        else {
                            gameBoard.boardArray[3] = 'O';
                            grid.textContent = 'O';
                            playerCount += 1;
                        }
                    }
                }
                else if(classes.contains('grid5')){
                    if(gameBoard.boardArray[4] == ''){
                        if(playerCount % 2 == 0){
                            gameBoard.boardArray[4] = 'X';
                            grid.textContent = 'X';
                            playerCount += 1;
                        }
                        else {
                            gameBoard.boardArray[4] = 'O';
                            grid.textContent = 'O';
                            playerCount += 1;
                        }
                    }
                }
                else if(classes.contains('grid6')){
                    if(gameBoard.boardArray[5] == ''){
                        if(playerCount % 2 == 0){
                            gameBoard.boardArray[5] = 'X';
                            grid.textContent = 'X';
                            playerCount += 1;
                        }
                        else {
                            gameBoard.boardArray[5] = 'O';
                            grid.textContent = 'O';
                            playerCount += 1;
                        }
                    }
                }
                else if(classes.contains('grid7')){
                    if(gameBoard.boardArray[6] == ''){
                        if(playerCount % 2 == 0){
                            gameBoard.boardArray[6] = 'X';
                            grid.textContent = 'X';
                            playerCount += 1;
                        }
                        else {
                            gameBoard.boardArray[6] = 'O';
                            grid.textContent = 'O';
                            playerCount += 1;
                        }
                    }
                }
                else if(classes.contains('grid8')){
                    if(gameBoard.boardArray[7] == ''){
                        if(playerCount % 2 == 0){
                            gameBoard.boardArray[7] = 'X';
                            grid.textContent = 'X';
                            playerCount += 1;
                        }
                        else {
                            gameBoard.boardArray[7] = 'O';
                            grid.textContent = 'O';
                            playerCount += 1;
                        }
                    }
                }
                else if(classes.contains('grid9')){
                    if(gameBoard.boardArray[8] == ''){
                        if(playerCount % 2 == 0){
                            gameBoard.boardArray[8] = 'X';
                            grid.textContent = 'X';
                            playerCount += 1;
                        }
                        else {
                            gameBoard.boardArray[8] = 'O';
                            grid.textContent = 'O';
                            playerCount += 1;
                        }
                    }
                }
                console.log(gameBoard.boardArray);
            });
            boardContainer.appendChild(grid);
            squareNum++;
        }
    };
    return {displayBoard};
})();

displayController.displayBoard();


