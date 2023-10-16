var isRedTurn = true;
var gameOver = false;
let grayColor = "rgb(141, 141, 161)";

function handleClick(element) {
    if(!gameOver) {
        if(!element.children[0].innerText) {
            
    
        if(isRedTurn) {
            
            document.getElementById("turn").innerText = "YELLOW";
          //  element.style.backgroundColor = "RED";

        }
        else {
        
            document.getElementById("turn").innerText = "RED";
         //   element.style.backgroundColor = "YELLOW"
        }

        let columnNumber = Number(element.id.split("-")[1]) % 7
        dropInColumn(columnNumber);

        checkVictory();
        isRedTurn = !isRedTurn;
    }
}
}
       function dropInColumn(columnNumber) {
        if(columnNumber === 0) {
            columnNumber = 7;
        }
        let circleConstant = "circle-";
        let currentColumnId = circleConstant + columnNumber;
        let el = document.getElementById(currentColumnId)

        while(el.style.backgroundColor != "red" && el.style.backgroundColor != "yellow" && columnNumber <= 42) {
            if(isRedTurn) {
                el.style.backgroundColor = "red";
            } else {
                el.style.backgroundColor = "yellow";
            }
            if(columnNumber > 7) {
                document.getElementById("circle-" + (columnNumber-7)).style.backgroundColor = grayColor;
            }

            columnNumber += 7; 
            if(columnNumber > 42) {
                break;
            }
            el = document.getElementById(circleConstant + columnNumber);
        }
       }

        
    

    function checkVictory() {
         //let winner = checkRow1() // ||
        //  checkRow2() ||
        // checkRow3() ||
        // checkRow4() ||
        // checkRow5()||
        // checkRow6() ||
        //  checkColumn1() || 
        //  checkColumn2() ||
        //   checkColumn3() ||
        //   checkColumn4() ||
        //   checkColumn5()||
        //   checkColumn6() ||
        //   checkColumn7() ||
         checkDiagonal1() || 
         checkDiagonal2() ||
         checkDiagonal3() ||
         checkDiagonal4() ||
          checkDiagonal5() ||
        checkDiagonal6() ||
        checkDiagonal7() ||
        checkDiagonal8() ||
        checkDiagonal9() ||
        checkDiagonal10() ||
        checkDiagonal11() ||
        checkDiagonal12();
        let winner = null;
        for (let i = 1; i < 7; i++) {
            winner ||= checkRow(i);
        }
        for (let i = 1; i < 8; i++) {
            winner ||= checkColumn(i);
        }
        for (let i = 1; i < 13; i++) {
            winner ||= checkDiagonal(i);
        }


    if(winner) {
        let topText = document.getElementById("top-text");
        topText.innerText  = "Victory! The Winner Is: " + winner;
        gameOver = true;
    }
    }
    function checkRow(rowNumber) {
        rowNumber -= 1;
        let startingCircle = rowNumber * 7;
        const circleConst = "circle-";
        let bt1 = document.getElementById(circleConst + (startingCircle + 1)).style.backgroundColor;
        let bt2 = document.getElementById(circleConst + (startingCircle + 2)).style.backgroundColor;
        let bt3 = document.getElementById(circleConst + (startingCircle + 3)).style.backgroundColor;
        let bt4 = document.getElementById(circleConst + (startingCircle + 4)).style.backgroundColor;
        let bt5 = document.getElementById(circleConst + (startingCircle + 5)).style.backgroundColor;
        let bt6 = document.getElementById(circleConst + (startingCircle + 6)).style.backgroundColor;
        let bt7 = document.getElementById(circleConst + (startingCircle + 7)).style.backgroundColor; 

      

        if(bt1 && bt1 != grayColor  && bt1 === bt2 && bt2 === bt3&& bt3 === bt4 && bt4) {
            return bt1;
        } 
        else if(bt2 && bt2 != grayColor && bt2 === bt3&& bt3 === bt4 && bt4 === bt5 && bt5){
            return bt2;
        }
        else if(bt3 && bt3 != grayColor && bt3 === bt4 && bt4 === bt5 && bt5 === bt6 && bt6) {
            return bt3;
        }
        else if(bt4 && bt4 != grayColor && bt4 === bt5 && bt5 === bt6 && bt6 === bt7 && bt7) {
            return bt4;
        }
        return '';

    }

    function checkColumn(columnNumber) {

        columnNumber -= 1
        let startingCircle = columnNumber  ;
        const circleConst = "circle-";
        let bt1 = document.getElementById(circleConst + (startingCircle + 1)).style.backgroundColor;
        let bt2 = document.getElementById(circleConst + (startingCircle + 7)).style.backgroundColor;
        let bt3 = document.getElementById(circleConst + (startingCircle + 14)).style.backgroundColor;
        let bt4 = document.getElementById(circleConst + (startingCircle + 21)).style.backgroundColor;
        let bt5 = document.getElementById(circleConst + (startingCircle + 28)).style.backgroundColor;
        let bt6 = document.getElementById(circleConst + (startingCircle + 35)).style.backgroundColor;
      
      

        if(bt1 && bt1 != grayColor  && bt1 === bt2 && bt2 === bt3&& bt3 === bt4 && bt4) {
            return bt1;
        } 
        else if(bt2 && bt2 != grayColor && bt2 === bt3&& bt3 === bt4 && bt4 === bt5 && bt5){
            return bt2;
        }
        else if(bt3 && bt3 != grayColor && bt3 === bt4 && bt4 === bt5 && bt5 === bt6 && bt6) {
            return bt3;
        }
        else if(bt4 && bt4 != grayColor && bt4 === bt5 && bt5 === bt6 && bt6 === bt7 && bt7) {
            return bt4;
        } 
       
        return '';

    }
    function checkDiagonal(diagonalNumber) {

        diagonalNumber += 8
        let startingCircle = diagonalNumber;
        const circleConst = "circle-";
        let bt1 = document.getElementById(circleConst + (startingCircle + 1)).style.backgroundColor;
        let bt2 = document.getElementById(circleConst + (startingCircle + 2)).style.backgroundColor;
        let bt3 = document.getElementById(circleConst + (startingCircle + 3)).style.backgroundColor;
        let bt4 = document.getElementById(circleConst + (startingCircle + 4)).style.backgroundColor;
        let bt5 = document.getElementById(circleConst + (startingCircle + 5)).style.backgroundColor;
        let bt6 = document.getElementById(circleConst + (startingCircle + 6)).style.backgroundColor;
        let bt7 = document.getElementById(circleConst + (startingCircle + 7)).style.backgroundColor; 
        let bt8 = document.getElementById(circleConst + (startingCircle + 8)).style.backgroundColor; 
    

        if(bt1 && bt1 != grayColor  && bt1 === bt2 && bt2 === bt3&& bt3 === bt4 && bt4) {
            return bt1;
        } 
        else if(bt2 && bt2 != grayColor && bt2 === bt3&& bt3 === bt4 && bt4 === bt5 && bt5){
            return bt2;
        }
        else if(bt3 && bt3 != grayColor && bt3 === bt4 && bt4 === bt5 && bt5 === bt6 && bt6) {
            return bt3;
        }
        else if(bt4 && bt4 != grayColor && bt4 === bt5 && bt5 === bt6 && bt6 === bt7 && bt7) {
            return bt4;
        } 
        else if(bt5 && bt5 != grayColor && bt5 === bt6 && bt6 === bt7&& bt7 === bt8 && bt8) {
            return bt5;
        }
        return '';

    }

   


    function checkDiagonal1() {
        let bt1 = document.getElementById("circle-1").style.backgroundColor;
        let bt2 = document.getElementById("circle-9").style.backgroundColor;
        let bt3 = document.getElementById("circle-17").style.backgroundColor;
        let bt4 = document.getElementById("circle-25").style.backgroundColor;
        let bt5 = document.getElementById("circle-33").style.backgroundColor;
        let bt6 = document.getElementById("circle-41").style.backgroundColor;
        

    if(bt1 && bt1 === bt2 && bt2 === bt3&& bt3 === bt4 && bt4) {
        return bt1;
    } 
     else if(bt2 && bt2 === bt3&& bt3 === bt4 && bt4 === bt5 && bt5){
        return bt2;
     }
     else if(bt3 && bt3 === bt4 && bt4 === bt5 && bt5 === bt6 && bt6) {
        return bt3;
     }
     return '';

     return bt1.innerText === bt2.innerText === bt3.innerText === bt4.innerText || 
     bt2.innerText === bt3.innerText === bt4.innerText === bt5.innerText;
    }

    function checkDiagonal2() {
        let bt1 = document.getElementById("circle-2").style.backgroundColor;
        let bt2 = document.getElementById("circle-10").style.backgroundColor;
        let bt3 = document.getElementById("circle-18").style.backgroundColor;
        let bt4 = document.getElementById("circle-26").style.backgroundColor;
        let bt5 = document.getElementById("circle-34").style.backgroundColor;
        let bt6 = document.getElementById("circle-42").style.backgroundColor;
        

    if(bt1 && bt1 === bt2 && bt2 === bt3&& bt3 === bt4 && bt4) {
        return bt1;
    } 
     else if(bt2 && bt2 === bt3&& bt3 === bt4 && bt4 === bt5 && bt5){
        return bt2;
     }
     else if(bt3 && bt3 === bt4 && bt4 === bt5 && bt5 === bt6 && bt6) {
        return bt3;
     }
     return '';

     return bt1.innerText === bt2.innerText === bt3.innerText === bt4.innerText || 
     bt2.innerText === bt3.innerText === bt4.innerText === bt5.innerText;
    }


    function checkDiagonal3() {
        let bt1 = document.getElementById("circle-8").style.backgroundColor;
        let bt2 = document.getElementById("circle-16").style.backgroundColor;
        let bt3 = document.getElementById("circle-24").style.backgroundColor;
        let bt4 = document.getElementById("circle-32").style.backgroundColor;
        let bt5 = document.getElementById("circle-40").style.backgroundColor;
   
        

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

    function checkDiagonal4() {
        let bt1 = document.getElementById("circle-15").style.backgroundColor;
        let bt2 = document.getElementById("circle-23").style.backgroundColor;
        let bt3 = document.getElementById("circle-31").style.backgroundColor;
        let bt4 = document.getElementById("circle-39").style.backgroundColor;
     
       
    

    if(bt1 && bt1 === bt2 && bt2 === bt3&& bt3 === bt4 && bt4) {
        return bt1;
    } 
   

     return '';

     return bt1.innerText === bt2.innerText === bt3.innerText === bt4.innerText || 
     bt2.innerText === bt3.innerText === bt4.innerText;
    }

    function checkDiagonal5() {
        let bt1 = document.getElementById("circle-3").style.backgroundColor;
        let bt2 = document.getElementById("circle-11").style.backgroundColor;
        let bt3 = document.getElementById("circle-19").style.backgroundColor;
        let bt4 = document.getElementById("circle-27").style.backgroundColor;
        let bt5 = document.getElementById("circle-35").style.backgroundColor;
       
    

    if(bt1 && bt1 === bt2 && bt2 === bt3&& bt3 === bt4 && bt4) {
        return bt1;
    } 
    else if(bt2 && bt2 === bt3 && bt3 === bt4 && bt4 === bt5&& bt5) {
        return bt2;
    }

     return '';

     return bt1.innerText === bt2.innerText === bt3.innerText === bt4.innerText || 
     bt2.innerText === bt3.innerText === bt4.innerText;
    }

    function checkDiagonal6() {
        let bt1 = document.getElementById("circle-4").style.backgroundColor;
        let bt2 = document.getElementById("circle-12").style.backgroundColor;
        let bt3 = document.getElementById("circle-20").style.backgroundColor;
        let bt4 = document.getElementById("circle-28").style.backgroundColor;
        

    if(bt1 && bt1 === bt2 && bt2 === bt3&& bt3 === bt4 && bt4) {
        return bt1;
    } 

     return '';

     return bt1.innerText === bt2.innerText === bt3.innerText === bt4.innerText || 
     bt2.innerText === bt3.innerText === bt4.innerText;
    }







    function checkDiagonal7() {
        let bt1 = document.getElementById("circle-1").style.backgroundColor;
        let bt2 = document.getElementById("circle-9").style.backgroundColor;
        let bt3 = document.getElementById("circle-17").style.backgroundColor;
        let bt4 = document.getElementById("circle-25").style.backgroundColor;
        let bt5 = document.getElementById("circle-33").style.backgroundColor;
        let bt6 = document.getElementById("circle-41").style.backgroundColor;
        

    if(bt1 && bt1 === bt2 && bt2 === bt3&& bt3 === bt4 && bt4) {
        return bt1;
    } 
     else if(bt2 && bt2 === bt3&& bt3 === bt4 && bt4 === bt5 && bt5){
        return bt2;
     }
     else if(bt3 && bt3 === bt4 && bt4 === bt5 && bt5 === bt6 && bt6) {
        return bt3;
     }
     return '';

     return bt1.innerText === bt2.innerText === bt3.innerText === bt4.innerText || 
     bt2.innerText === bt3.innerText === bt4.innerText === bt5.innerText;
    }

    function checkDiagonal8() {
        let bt1 = document.getElementById("circle-2").style.backgroundColor;
        let bt2 = document.getElementById("circle-10").style.backgroundColor;
        let bt3 = document.getElementById("circle-18").style.backgroundColor;
        let bt4 = document.getElementById("circle-26").style.backgroundColor;
        let bt5 = document.getElementById("circle-34").style.backgroundColor;
        let bt6 = document.getElementById("circle-42").style.backgroundColor;
        

    if(bt1 && bt1 === bt2 && bt2 === bt3&& bt3 === bt4 && bt4) {
        return bt1;
    } 
     else if(bt2 && bt2 === bt3&& bt3 === bt4 && bt4 === bt5 && bt5){
        return bt2;
     }
     else if(bt3 && bt3 === bt4 && bt4 === bt5 && bt5 === bt6 && bt6) {
        return bt3;
     }
     return '';

     return bt1.innerText === bt2.innerText === bt3.innerText === bt4.innerText || 
     bt2.innerText === bt3.innerText === bt4.innerText === bt5.innerText;
    }


    function checkDiagonal9() {
        let bt1 = document.getElementById("circle-8").style.backgroundColor;
        let bt2 = document.getElementById("circle-16").style.backgroundColor;
        let bt3 = document.getElementById("circle-24").style.backgroundColor;
        let bt4 = document.getElementById("circle-32").style.backgroundColor;
        let bt5 = document.getElementById("circle-40").style.backgroundColor;
   
        

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

    function checkDiagonal10() {
        let bt1 = document.getElementById("circle-15").style.backgroundColor;
        let bt2 = document.getElementById("circle-23").style.backgroundColor;
        let bt3 = document.getElementById("circle-31").style.backgroundColor;
        let bt4 = document.getElementById("circle-39").style.backgroundColor;
     
       
    

    if(bt1 && bt1 === bt2 && bt2 === bt3&& bt3 === bt4 && bt4) {
        return bt1;
    } 
   

     return '';

     return bt1.innerText === bt2.innerText === bt3.innerText === bt4.innerText || 
     bt2.innerText === bt3.innerText === bt4.innerText;
    }

    function checkDiagonal11() {
        let bt1 = document.getElementById("circle-3").style.backgroundColor;
        let bt2 = document.getElementById("circle-11").style.backgroundColor;
        let bt3 = document.getElementById("circle-19").style.backgroundColor;
        let bt4 = document.getElementById("circle-27").style.backgroundColor;
        let bt5 = document.getElementByid8("circle-35").style.backgroundColor;
       
    

    if(bt1 && bt1 === bt2 && bt2 === bt3&& bt3 === bt4 && bt4) {
        return bt1;
    } 
    else if(bt2 && bt2 === bt3 && bt3 === bt4 && bt4 === bt5&& bt5) {
        return bt2;
    }

     return '';

     return bt1.innerText === bt2.innerText === bt3.innerText === bt4.innerText || 
     bt2.innerText === bt3.innerText === bt4.innerText;
    }

    function checkDiagonal12() {
        let bt1 = document.getElementById("circle-4").style.backgroundColor;
        let bt2 = document.getElementById("circle-12").style.backgroundColor;
        let bt3 = document.getElementById("circle-20").style.backgroundColor;
        let bt4 = document.getElementById("circle-28").style.backgroundColor;
        

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
    
        for( i =1; i < 43; i++) {
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