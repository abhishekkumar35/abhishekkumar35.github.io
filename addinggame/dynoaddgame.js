function assignNumbers() {
    document.getElementById("firstNumber").textContent = Math.ceil(Math.random() * 100);
    document.getElementById("secondNumber").textContent = Math.ceil(Math.random() * 100);

    document.getElementById("gameResult").textContent = "";
    document.getElementById("userInput").value = "";
}

function checkAddition() {
    let x = parseInt(document.getElementById("firstNumber").textContent);
    let y = parseInt(document.getElementById("secondNumber").textContent);
    let z = parseInt(document.getElementById("userInput").value);

    if (x + y === z) {
        document.getElementById("gameResult").textContent = "Congratulation! You got it right";
        document.getElementById("gameResult").style.backgroundColor = "#028a0f"
    } else {
        document.getElementById("gameResult").textContent = "Please Try Again";
        document.getElementById("gameResult").style.backgroundColor = "#1e217c"

    }
}