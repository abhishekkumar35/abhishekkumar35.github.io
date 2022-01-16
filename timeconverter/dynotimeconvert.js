let hoursEl = document.getElementById('hoursInput');
let minutesEl = document.getElementById("minutesInput");
let buttonEl = document.getElementById("convertBtn");
let errorMsgEl = document.getElementById("errorMsg");
let timeInSecondsEl = document.getElementById("timeInSeconds");

buttonEl.addEventListener("click", function() {
    errorMsgEl.textContent = "";
    timeInSecondsEl.textContent = "";
    if (hoursEl.value === "") {
        errorMsgEl.textContent = "Please enter a valid number of hours";
        errorMsgEl.classList.add("error-msg");
    } else if (minutesEl.value === "") {
        errorMsgEl.textContent = "Please enter a valid number of minutes";
        errorMsgEl.classList.add("error-msg");
    } else {
        let hours = parseInt(hoursEl.value);
        let mins = parseInt(minutesEl.value);
        timeInSecondsEl.textContent = hours * 3600 + mins * 60 + "s";
        timeInSecondsEl.classList.add("in-seconds", "d-flex", "flex-column", "justify-content-center");
    }

});