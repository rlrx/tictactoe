playerCount = 1;

// gameBoard object module
const gameBoard = (function() {
    let boardArray = new Array(9); // create an empty array of size 9
    function resetBoard() {
        return boardArray = new Array(9); // reset the boardArray
    }
    return {boardArray, resetBoard};
})();






// Player object
function User(name,symbol) {
    let symbol = symbol;
    let score = 0;
    // include function to increment score later
    return {name, symbol, score};
}




// gameController object
function gameController() {
    function startGame() {
        let boardArray = gameBoard.resetBoard()
        return boardArray;

        // display logic
    }

    function playerClick() {
        if(playerCount % 2 == 0){
            let symbol = "X";
        }
        else{
            let symbol = "O";
        }
        
    }
}







// displayController object
function displayController() {

}