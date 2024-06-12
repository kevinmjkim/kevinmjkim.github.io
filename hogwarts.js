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
slytherinScore += 1;
}

function updateRavenClawScore(){
ravenClawScore += 1;
}

function updateHufflepuffScore() {
hufflepuffScore += 1;
}

function updateGryffindorScore() {
gryffindorScore += 1;
}

