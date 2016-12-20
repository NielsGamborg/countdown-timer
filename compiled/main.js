var countdownTimerDiv = document.querySelector("#countdowntimer");
function timer(seconds) {
    var now = Date.now();
    var then = now + seconds * 1000;
    displayTimeLeft(seconds);
    var timerInterval = setInterval(function () {
        var timeLeft = Math.round((then - Date.now()) / 1000);
        displayTimeLeft(timeLeft);
        if (timeLeft === 0) {
            clearInterval(timerInterval);
            return;
        }
    }, 1000);
}
function displayTimeLeft(seconds) {
    var minutes = (seconds - (seconds % 60)) / 60;
    var remainderSeconds = seconds % 60;
    var display = minutes + ":" + (remainderSeconds < 10 ? '0' : '') + remainderSeconds;
    document.title = display;
    if (countdownTimerDiv !== null)
        countdownTimerDiv.textContent = display;
}
