function calculate() {
    let flag = 0;
    let billA = document.getElementById("billAmount").value;
    if (billA == "") {
        document.getElementById("errorMessage").textContent =
            "Please Enter a Valid Input";
        flag = 1;
    } else {
        billA = parseInt(billA);
    }
    let percentT = document.getElementById("percentageTip").value;
    console.log(percentT, typeof percentT);
    if (percentT == "") {
        document.getElementById("errorMessage").textContent =
            "Please Enter a Valid Input";
        flag = 1;
    } else {
        percentT = parseInt(percentT);
    }
    if (flag == 0) {
        let tipA = (percentT / 100) * billA;
        let T = billA + tipA;
        document.getElementById("tipAmount").value = tipA;
        document.getElementById("totalAmount").value = T;
    } else {
        document.getElementById("tipAmount").value = "";
        document.getElementById("totalAmount").value = "";
    }
    if (billA == "") {    // as filled percentT can change  paragraph text to empty, so cross checking again !
        document.getElementById("errorMessage").textContent =
            "Please Enter a Valid Input";
    }
}
