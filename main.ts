const countdownTimerDiv = document.querySelector("#countdowntimer");

function timer(seconds: number) {
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    
    const timerInterval = setInterval(() => {
        let timeLeft = Math.round((then - Date.now()) / 1000);
        displayTimeLeft(timeLeft);

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            return;
        }
    }, 1000);
}

function displayTimeLeft(seconds: number) {
    const minutes = (seconds - (seconds % 60)) / 60;
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`
    document.title = display;

    if (countdownTimerDiv !== null)
        countdownTimerDiv.textContent = display;
}
