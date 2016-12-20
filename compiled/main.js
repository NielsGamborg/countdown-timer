var body = document.querySelector("body");
var countdownTimerDiv = document.querySelector("#timer");
var quick5 = document.querySelector(".box1");
var quick10 = document.querySelector(".box2");
var focus30 = document.querySelector(".box3");
var focus60 = document.querySelector(".box4");
var tabletennis = document.querySelector(".box5");
var other = document.querySelector(".box6");
var customtext = document.querySelector("#customtext");
var customlength = document.querySelector("#customlength");
var runningTimer;
function timer(seconds) {
    var now = Date.now();
    var then = now + seconds * 1000;
    displayTimeLeft(seconds);
    var timerInterval = setInterval(function () {
        var timeLeft = Math.round((then - Date.now()) / 1000);
        displayTimeLeft(timeLeft);
        if (timeLeft === 0) {
            clearInterval(timerInterval);
            createjs.Sound.play("bell");
            body.style.backgroundColor = "green";
            return;
        }
    }, 1000);
    return timerInterval;
}
function displayTimeLeft(seconds) {
    var minutes = (seconds - (seconds % 60)) / 60;
    var remainderSeconds = seconds % 60;
    var display = minutes + ":" + (remainderSeconds < 10 ? '0' : '') + remainderSeconds;
    document.title = display;
    countdownTimerDiv.textContent = display;
}
function registerTimer(seconds) {
    body.style.backgroundColor = "white";
    clearInterval(runningTimer);
    runningTimer = timer(seconds);
}
quick5.addEventListener('click', function () { return registerTimer(5 * 60); });
quick10.addEventListener('click', function () { return registerTimer(10 * 60); });
focus30.addEventListener('click', function () { return registerTimer(30 * 60); });
focus60.addEventListener('click', function () { return registerTimer(60 * 60); });
tabletennis.addEventListener('click', function () { return registerTimer(15 * 60); });
other.addEventListener('mouseover', function () {
    customlength.style.display = "inline";
    customtext.style.display = "none";
});
other.addEventListener('mouseleave', function () {
    customlength.style.display = "none";
    customtext.style.display = "inline";
});
customlength.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        registerTimer(parseInt(customlength.value) * 60);
    }
});
createjs.Sound.registerSound("bell.mp3", "bell");
