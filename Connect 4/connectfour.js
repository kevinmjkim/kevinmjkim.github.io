var isRedTurn = true;
var gameOver = false;

function handleClick(element) {
    if(!gameOver) {
        if(!element.children[0].innerText) {
            
    
        if(isRedTurn) {
            
            document.getElementById("turn").innerText = "Yellow";
            element.style.backgroundColor = "Red";

        }
        else {
        
            document.getElementById("turn").innerText = "Red";
            element.style.backgroundColor = "Yellow"
        }

        checkVictory();
        isRedTurn = !isRedTurn;
    
        let el = document.getElementById("circle-1");
 while(el.style.backgroundColor != "Red" || el.style.backgroundColor != "Yellow") {
 while("circle-" + i) {
    document.getElementById("circle-").style.backgroundColor = 
        i+1;
 }
 }
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
          checkColumn4() ||
          checkColumn5()||
         checkDiagonal1() || 
         checkDiagonal2() ||
         checkDiagonal3() ||
         checkDiagonal4() ||
         checkDiagonal5() ||
         checkDiagonal6();
         checkDiagonal2();

    if(winner) {
        let topText = document.getElementById("top-text");
        topText.innerText  = "Victory! The Winner Is: " + winner;
        gameOver = true;
    }
    }

    function checkRow1() {
        let bt1 = document.getElementById("circle-1").style.backgroundColor;
        let bt2 = document.getElementById("circle-2").style.backgroundColor;
        let bt3 = document.getElementById("circle-3").style.backgroundColor;
        let bt4 = document.getElementById("circle-4").style.backgroundColor;
        let bt5 = document.getElementById("circle-5").style.backgroundColor;
    

    if(bt1 && bt1 === bt2 && bt2 === bt3&& bt3 === bt4 && bt4) {
        return bt1;
    } 
     else if(bt2 && bt2 === bt3&& bt3 === bt4 && bt4 === bt5 && bt5){
        return bt2;
     }
     return '';

     return bt1.innerText === bt2.innerText === bt3.innerText === bt4.innerText || 
     bt2.innerText === bt3.innerText === bt4.innerText === bt5.innerText;
    }

    function checkRow2() {
        let bt1 = document.getElementById("circle-6").style.backgroundColor;
        let bt2 = document.getElementById("circle-7").style.backgroundColor;
        let bt3 = document.getElementById("circle-8").style.backgroundColor;
        let bt4 = document.getElementById("circle-9").style.backgroundColor;
        let bt5 = document.getElementById("circle-10").style.backgroundColor;
    

    if(bt1 && bt1 === bt2 && bt2 === bt3&& bt3 === bt4 && bt4) {
        return bt1;
    } 
     else if(bt2 && bt2 === bt3&& bt3 === bt4 && bt4 === bt5 && bt5){
        return bt2;
     }
     return '';

     return bt1.innerText === bt2.innerText === bt3.innerText === bt4.innerText || 
     bt2.innerText === bt3.innerText === bt4.innerText === bt5.innerText;
    }

    function checkRow3() {
        let bt1 = document.getElementById("circle-11").style.backgroundColor;
        let bt2 = document.getElementById("circle-12").style.backgroundColor;
        let bt3 = document.getElementById("circle-13").style.backgroundColor;
        let bt4 = document.getElementById("circle-14").style.backgroundColor;
        let bt5 = document.getElementById("circle-15").style.backgroundColor;
    

    if(bt1 && bt1 === bt2 && bt2 === bt3&& bt3 === bt4 && bt4) {
        return bt1;
    } 
     else if(bt2 && bt2 === bt3&& bt3 === bt4 && bt4 === bt5 && bt5){
        return bt2;
     }
     return '';

     return bt1.innerText === bt2.innerText === bt3.innerText === bt4.innerText || 
     bt2.innerText === bt3.innerText === bt4.innerText === bt5.innerText;
    }

    function checkColumn1() {
        let bt1 = document.getElementById("circle-1").style.backgroundColor;
        let bt2 = document.getElementById("circle-6").style.backgroundColor;
        let bt3 = document.getElementById("circle-11").style.backgroundColor;
        let bt4 = document.getElementById("circle-16").style.backgroundColor;
        let bt5 = document.getElementById("circle-21").style.backgroundColor;
    

    if(bt1 && bt1 === bt2 && bt2 === bt3&& bt3 === bt4 && bt4) {
        return bt1;
    } 
     else if(bt2 && bt2 === bt3&& bt3 === bt4 && bt4 === bt5 && bt5){
        return bt2;
     }
     return '';

     return bt1.innerText === bt2.innerText === bt3.innerText === bt4.innerText || 
     bt2.innerText === bt3.innerText === bt4.innerText === bt5.innerText;
    }


    function checkColumn2() {
        let bt1 = document.getElementById("circle-2").style.backgroundColor;
        let bt2 = document.getElementById("circle-7").style.backgroundColor;
        let bt3 = document.getElementById("circle-12").style.backgroundColor;
        let bt4 = document.getElementById("circle-17").style.backgroundColor;
        let bt5 = document.getElementById("circle-22").style.backgroundColor;
    

    if(bt1 && bt1 === bt2 && bt2 === bt3&& bt3 === bt4 && bt4) {
        return bt1;
    } 
     else if(bt2 && bt2 === bt3&& bt3 === bt4 && bt4 === bt5 && bt5){
        return bt2;
     }
     return '';

     return bt1.innerText === bt2.innerText === bt3.innerText === bt4.innerText || 
     bt2.innerText === bt3.innerText === bt4.innerText === bt5.innerText;
    }

    function checkColumn3() {
        let bt1 = document.getElementById("circle-3").style.backgroundColor;
        let bt2 = document.getElementById("circle-8").style.backgroundColor;
        let bt3 = document.getElementById("circle-13").style.backgroundColor;
        let bt4 = document.getElementById("circle-18").style.backgroundColor;
        let bt5 = document.getElementById("circle-23").style.backgroundColor;
    

    if(bt1 && bt1 === bt2 && bt2 === bt3&& bt3 === bt4 && bt4) {
        return bt1;
    } 
     else if(bt2 && bt2 === bt3&& bt3 === bt4 && bt4 === bt5 && bt5){
        return bt2;
     }
     return '';

     return bt1.innerText === bt2.innerText === bt3.innerText === bt4.innerText || 
     bt2.innerText === bt3.innerText === bt4.innerText === bt5.innerText;
    }

    function checkColumn4() {
        let bt1 = document.getElementById("circle-4").style.backgroundColor;
        let bt2 = document.getElementById("circle-9").style.backgroundColor;
        let bt3 = document.getElementById("circle-14").style.backgroundColor;
        let bt4 = document.getElementById("circle-19").style.backgroundColor;
        let bt5 = document.getElementById("circle-24").style.backgroundColor;
    

    if(bt1 && bt1 === bt2 && bt2 === bt3&& bt3 === bt4 && bt4) {
        return bt1;
    } 
     else if(bt2 && bt2 === bt3&& bt3 === bt4 && bt4 === bt5 && bt5){
        return bt2;
     }
     return '';

     return bt1.innerText === bt2.innerText === bt3.innerText === bt4.innerText || 
     bt2.innerText === bt3.innerText === bt4.innerText === bt5.innerText;
    }

    function checkColumn5() {
        let bt1 = document.getElementById("circle-5").style.backgroundColor;
        let bt2 = document.getElementById("circle-10").style.backgroundColor;
        let bt3 = document.getElementById("circle-15").style.backgroundColor;
        let bt4 = document.getElementById("circle-20").style.backgroundColor;
        let bt5 = document.getElementById("circle-25").style.backgroundColor;
    

    if(bt1 && bt1 === bt2 && bt2 === bt3&& bt3 === bt4 && bt4) {
        return bt1;
    } 
     else if(bt2 && bt2 === bt3&& bt3 === bt4 && bt4 === bt5 && bt5){
        return bt2;
     }
     return '';

     return bt1.innerText === bt2.innerText === bt3.innerText === bt4.innerText || 
     bt2.innerText === bt3.innerText === bt4.innerText === bt5.innerText;
    }

    function checkDiagonal1() {
        let bt1 = document.getElementById("circle-1").style.backgroundColor;
        let bt2 = document.getElementById("circle-7").style.backgroundColor;
        let bt3 = document.getElementById("circle-13").style.backgroundColor;
        let bt4 = document.getElementById("circle-19").style.backgroundColor;
        let bt5 = document.getElementById("circle-25").style.backgroundColor;
    

    if(bt1 && bt1 === bt2 && bt2 === bt3&& bt3 === bt4 && bt4) {
        return bt1;
    } 
     else if(bt2 && bt2 === bt3&& bt3 === bt4 && bt4 === bt5 && bt5){
        return bt2;
     }
     return '';

     return bt1.innerText === bt2.innerText === bt3.innerText === bt4.innerText || 
     bt2.innerText === bt3.innerText === bt4.innerText === bt5.innerText;
    }

    function checkDiagonal2() {
        let bt1 = document.getElementById("circle-5").style.backgroundColor;
        let bt2 = document.getElementById("circle-9").style.backgroundColor;
        let bt3 = document.getElementById("circle-13").style.backgroundColor;
        let bt4 = document.getElementById("circle-17").style.backgroundColor;
        let bt5 = document.getElementById("circle-21").style.backgroundColor;
    

    if(bt1 && bt1 === bt2 && bt2 === bt3&& bt3 === bt4 && bt4) {
        return bt1;
    } 
     else if(bt2 && bt2 === bt3&& bt3 === bt4 && bt4 === bt5 && bt5){
        return bt2;
     }
     return '';

     return bt1.innerText === bt2.innerText === bt3.innerText === bt4.innerText || 
     bt2.innerText === bt3.innerText === bt4.innerText === bt5.innerText;
    }

    function checkDiagonal3() {
        let bt1 = document.getElementById("circle-2").style.backgroundColor;
        let bt2 = document.getElementById("circle-8").style.backgroundColor;
        let bt3 = document.getElementById("circle-14").style.backgroundColor;
        let bt4 = document.getElementById("circle-20").style.backgroundColor;
       
    

    if(bt1 && bt1 === bt2 && bt2 === bt3&& bt3 === bt4 && bt4) {
        return bt1;
    } 

     return '';

     return bt1.innerText === bt2.innerText === bt3.innerText === bt4.innerText || 
     bt2.innerText === bt3.innerText === bt4.innerText;
    }

    function checkDiagonal4() {
        let bt1 = document.getElementById("circle-6").style.backgroundColor;
        let bt2 = document.getElementById("circle-12").style.backgroundColor;
        let bt3 = document.getElementById("circle-18").style.backgroundColor;
        let bt4 = document.getElementById("circle-24").style.backgroundColor;
       
    

    if(bt1 && bt1 === bt2 && bt2 === bt3&& bt3 === bt4 && bt4) {
        return bt1;
    } 

     return '';

     return bt1.innerText === bt2.innerText === bt3.innerText === bt4.innerText || 
     bt2.innerText === bt3.innerText === bt4.innerText;
    }

    function checkDiagonal5() {
        let bt1 = document.getElementById("circle-4").style.backgroundColor;
        let bt2 = document.getElementById("circle-8").style.backgroundColor;
        let bt3 = document.getElementById("circle-12").style.backgroundColor;
        let bt4 = document.getElementById("circle-16").style.backgroundColor;
       
    

    if(bt1 && bt1 === bt2 && bt2 === bt3&& bt3 === bt4 && bt4) {
        return bt1;
    } 

     return '';

     return bt1.innerText === bt2.innerText === bt3.innerText === bt4.innerText || 
     bt2.innerText === bt3.innerText === bt4.innerText;
    }

    function checkDiagonal6() {
        let bt1 = document.getElementById("circle-10").style.backgroundColor;
        let bt2 = document.getElementById("circle-14").style.backgroundColor;
        let bt3 = document.getElementById("circle-18").style.backgroundColor;
        let bt4 = document.getElementById("circle-22").style.backgroundColor;
    

    if(bt1 && bt1 === bt2 && bt2 === bt3&& bt3 === bt4 && bt4) {
        return bt1;
    } 

     return '';

     return bt1.innerText === bt2.innerText === bt3.innerText === bt4.innerText || 
     bt2.innerText === bt3.innerText === bt4.innerText;
    }




    function reset() {
        gameOver = false;
    
        isRedTurn = true; 
    
        for( i =1; i < 26; i++) {
            let id_name = "circle-" + i;
    
            let bt1 = document.getElementById(id_name).style.backgroundColor= '';
        }
        let topText = document.getElementById("top-text");
        topText.innerText = "Turn: ";
        let mySpan = document.createElement("span");
        mySpan.id = "turn";
        mySpan.innerText = "Red";
        topText.appendChild(mySpan);
    }