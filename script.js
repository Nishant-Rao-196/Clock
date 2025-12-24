const hourHand = document.getElementById("hour");
const minuteHand = document.getElementById("minute");
const secondHand = document.getElementById("second");

function runClock() {
    const now = new Date();

    const sec = now.getSeconds();
    const min = now.getMinutes();
    const hr  = now.getHours() % 12;

    const secDeg = sec * 6;
    const minDeg = min * 6 + sec * 0.1;
    const hrDeg  = hr * 30 + min * 0.5;

    secondHand.style.transform =
        `translateX(-50%) rotate(${secDeg}deg)`;
    minuteHand.style.transform =
        `translateX(-50%) rotate(${minDeg}deg)`;
    hourHand.style.transform =
        `translateX(-50%) rotate(${hrDeg}deg)`;
}

setInterval(runClock, 1000);
runClock();
