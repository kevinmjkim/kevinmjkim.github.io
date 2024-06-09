var questionNum = 1;
var slytherinScore = 0;
var ravenClawScore = 0;
var gryffindorScore = 0;
var hufflepuffScore = 0;

function updateQuestionNum(){
let qNum = document.getElementById("q-num");
qNum.innerText = questionNum;


}

function updateSlytherinScore(){
slytherinScore += 1
}

function updateRavenClawScore(){
ravenClawScore += 2
}

function updateHufflepuffScore() {
hufflepuffScore += 3
}

function updateGryffindorScore() {
gryffindorScore += 4
}

