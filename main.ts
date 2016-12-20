const countdownTimerDiv = document.querySelector("#timer");
const quick5 = document.querySelector(".box1");
const quick10 = document.querySelector(".box2");
const focus30 = document.querySelector(".box3");
const focus60 = document.querySelector(".box4");
const tabletennis = document.querySelector(".box5");
const other = document.querySelector(".box6");
const customtext = document.querySelector("#customtext");
const customlength = document.querySelector("#customlength");

declare var createjs: any;
let runningTimer: number;

function timer(seconds: number) {
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    
    const timerInterval = setInterval(() => {
        let timeLeft = Math.round((then - Date.now()) / 1000);
        displayTimeLeft(timeLeft);

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            createjs.Sound.play("bell");
            
            return;
        }
    }, 1000);

    return timerInterval;
}

function displayTimeLeft(seconds: number) {
    const minutes = (seconds - (seconds % 60)) / 60;
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`
    document.title = display;
    countdownTimerDiv.textContent = display;
}

function registerTimer(seconds: number) {
    clearInterval(runningTimer)
    runningTimer = timer(seconds)
}

quick5.addEventListener('click', () => registerTimer(5 * 60));
quick10.addEventListener('click', () => registerTimer(10 * 60));
focus30.addEventListener('click', () => registerTimer(30 * 60));
focus60.addEventListener('click', () => registerTimer(60 * 60));
tabletennis.addEventListener('click', () => registerTimer(15 * 60));

other.addEventListener('mouseover', () => {
    (<HTMLElement> customlength).style.display = "inline";
    (<HTMLElement> customtext).style.display = "none";
});

other.addEventListener('mouseleave', () => {
    (<HTMLElement> customlength).style.display = "none";
    (<HTMLElement> customtext).style.display = "inline";
})

customlength.addEventListener('keyup', (event: Event) => {
    if ((<KeyboardEvent>event).keyCode === 13) {
        registerTimer(
        parseInt((<HTMLInputElement>customlength).value) * 60
        );
    }
})

createjs.Sound.registerSound("bell.mp3", "bell");
