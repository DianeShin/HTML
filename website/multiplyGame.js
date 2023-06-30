function checkAnswer() {
    let number1 = Number(document.getElementById("number1").textContent);
    let number2 = Number(document.getElementById("number2").textContent);
    let answer = Number(document.getElementById("answer").value);
    if (answer == number1 * number2) return true;
    else return false;
}

function printResult(){
    let answer = checkAnswer();
    if (answer == true) document.getElementById("result").textContent = "Correct";
    else document.getElementById("result").textContent = "Wrong";
}

function generateQuestion(){
    let number1 = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
    let number2 = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
    document.getElementById("number1").textContent = number1;
    document.getElementById("number2").textContent = number2;
    document.getElementById("answer").value = "";
    document.getElementById("result").textContent = "";
}