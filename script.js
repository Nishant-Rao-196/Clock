const hourHand = document.getElementById("hour");
const minuteHand = document.getElementById("minute");
const secondHand = document.getElementById("second");

function updateClock() {
    const now = new Date();

    const second = now.getSeconds();
    const minute = now.getMinutes();
    const hour = now.getHours() % 12;

    const secondDeg = second * 6;
    const minuteDeg = minute * 6 + second * 0.1;
    const hourDeg = hour * 30 + minute * 0.5;

    hourHand.style.transform =
        `translateX(-50%) rotate(${hourDeg}deg)`;
    minuteHand.style.transform =
        `translateX(-50%) rotate(${minuteDeg}deg)`;
    secondHand.style.transform =
        `translateX(-50%) rotate(${secondDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock(); 
