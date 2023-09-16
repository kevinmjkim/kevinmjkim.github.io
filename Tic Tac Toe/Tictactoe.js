var isXTurn = true;
var gameOver = false; 

function handleClick(element) {
if(!gameOver) {
    if(!element.children[0].innerText) {


    if(isXTurn) {
        element.children[0].innerText = "X";
        document.getElementById("turn").innerText = "O";
    }
    else {
        element.children[0].innerText = "O"
        document.getElementById("turn").innerText = "X";
    }
    checkVictory();
    isXTurn = !isXTurn;
    }
    }
}
function checkVictory() {
    let winner = checkRow1() ||
     checkRow2() ||
    checkRow3() ||
     checkColumn1() || 
     checkColumn2() ||
      checkColumn3() ||
     checkDiagonal1() || 
     checkDiagonal2();
if(winner) {
    let topText = document.getElementById("top-text");
    topText.innerText  = "Victory! The Winner Is: " + winner;
    gameOver = true;
}
}

function checkRow1() {
    let bt1 = document.getElementById("box-1").children[0].innerText;
    let bt2 = document.getElementById("box-2").children[0].innerText;
    let bt3 = document.getElementById("box-3").children[0].innerText;



    if(bt1 && bt1 === bt2 && bt2 === bt3 && bt3) {
        return bt1; 
    }
        return '';
    

    return bt1.innerText === bt2.innerText === bt3.innerText;

}

function checkRow2() {
    let bt1= document.getElementById("box-4").children[0].innerText;
    let bt2 = document.getElementById("box-5").children[0].innerText;
    let bt3 = document.getElementById("box-6").children[0].innerText;



    if(bt1 && bt1 === bt1 && bt2 === bt3 && bt3) {
        return bt1; 
    }
        return '';
    

    return bt1.innerText === bt2.innerText === bt3.innerText;
}


function checkRow3() {
    let bt1 = document.getElementById("box-7").children[0].innerText;
    let bt2 = document.getElementById("box-8").children[0].innerText;
    let bt3 = document.getElementById("box-9").children[0].innerText;



    if(bt1 && bt1 === bt2 && bt2 === bt3 && bt3) {
        return bt1; 
    }
        return '';
    

    return bt1.innerText === bt2.innerText === bt3.innerText;
}

function checkColumn1() {
    let bt1= document.getElementById("box-1").children[0].innerText;
    let bt2 = document.getElementById("box-4").children[0].innerText;
    let bt3 = document.getElementById("box-7").children[0].innerText;



    if(bt1 && bt1 === bt1 && bt2 === bt3 && bt3) {
        return bt1; 
    }
        return '';
    

    return bt1.innerText === bt2.innerText === bt3.innerText;
}

function checkColumn2() {
    let bt1= document.getElementById("box-2").children[0].innerText;
    let bt2 = document.getElementById("box-5").children[0].innerText;
    let bt3 = document.getElementById("box-8").children[0].innerText;



    if(bt1 && bt1 === bt1 && bt2 === bt3 && bt3) {
        return bt1; 
    }
        return '';
    

    return bt1.innerText === bt2.innerText === bt3.innerText;
}

function checkColumn3() {
    let bt1= document.getElementById("box-3").children[0].innerText;
    let bt2 = document.getElementById("box-6").children[0].innerText;
    let bt3 = document.getElementById("box-9").children[0].innerText;



    if(bt1 && bt1 === bt1 && bt2 === bt3 && bt3) {
        return bt1; 
    }
        return '';
    

    return bt1.innerText === bt2.innerText === bt3.innerText;
}

function checkDiagonal1() {
    let bt1= document.getElementById("box-1").children[0].innerText;
    let bt2 = document.getElementById("box-5").children[0].innerText;
    let bt3 = document.getElementById("box-9").children[0].innerText;



    if(bt1 && bt1 === bt1 && bt2 === bt3 && bt3) {
        return bt1; 
    }
        return '';
    

    return bt1.innerText === bt2.innerText === bt3.innerText;
}

function checkDiagonal2() {
    let bt1= document.getElementById("box-3").children[0].innerText;
    let bt2 = document.getElementById("box-5").children[0].innerText;
    let bt3 = document.getElementById("box-7").children[0].innerText;



    if(bt1 && bt1 === bt2 && bt2 === bt3 && bt3) {
        return bt1; 
    }
        return '';
    

    return bt1.innerText === bt2.innerText === bt3.innerText;
}

function reset() {
    gameOver = false;

    isXTurn = true; 

    for( i =1; i < 10; i++) {
        let id_name = "box-" + i;

        let bt1 = document.getElementById(id_name).children[0].innerText = '';
    }
    let topText = document.getElementById("top-text");
    topText.innerText = "Turn: ";
    let mySpan = document.createElement("span");
    mySpan.id = "turn";
    mySpan.innerText = "X";
    topText.appendChild(mySpan);
}
