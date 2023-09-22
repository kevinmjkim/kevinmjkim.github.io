var isRedTurn = true;
var gameOver = false;

function handleClick(element) {
    if(!gameOver) {
        if(!element.children[0].innerText) {
    
    
        if(isRedTurn) {
            element.children[0].innerText = "X";
            document.getElementById("turn").innerText = "O";
        }
        else {
            element.children[0].innerText = "O"
            document.getElementById("turn").innerText = "X";
        }
        checkVictory();
        isRedTurn = !isRedTurn;
        }
        }
    }