let aboutBtn = document.getElementById("aboutButton");
let timeToVisitBtn = document.getElementById("timeToVisitButton");
let attractionsBtn = document.getElementById("attractionsButton");
let about = document.getElementById("aboutTab");
let time = document.getElementById("timeToVisitTab");
let attr = document.getElementById("attractionsTab");

time.classList.add("d-none");
attr.classList.add("d-none");

aboutBtn.onclick = function() {
    about.classList.add("d-block");
    aboutBtn.classList.add("selected-button");

    timeToVisitBtn.classList.remove("selected-button");
    attractionsBtn.classList.remove("selected-button");
    time.classList.add("d-none");
    time.classList.remove("d-block");
    attr.classList.add("d-none");
    attr.classList.remove("d-block");
}
timeToVisitBtn.onclick = function() {
    time.classList.add("d-block");
    timeToVisitBtn.classList.add("selected-button")

    aboutBtn.classList.remove("selected-button");
    attractionsBtn.classList.remove("selected-button");
    about.classList.add("d-none");
    about.classList.remove("d-block");
    attr.classList.remove("d-block");
    attr.classList.add("d-none");
}
attractionsBtn.onclick = function() {
    attr.classList.add("d-block");
    attractionsBtn.classList.add("selected-button");

    timeToVisitBtn.classList.remove("selected-button");
    aboutBtn.classList.remove("selected-button");
    time.classList.remove("d-block");
    about.classList.remove("d-block")
    about.classList.add("d-none");
    time.classList.add("d-none");

}










