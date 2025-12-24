
let hands = document.getElementsByTagName('img');

let hour = new Date().getHours();
let minute = new Date().getMinutes();
let second = new Date().getSeconds();


hands[2].style.transform = `rotate(${second * 6}deg)`;
hands[1].style.transform = `rotate(${minute * 6}deg)`;
hands[0].style.transform = `rotate(${hour * 30 + minute * 0.5}deg)`;

setInterval(() => {
    second++;

    if (second === 60) {
        second = 0;
        minute++;
    }

    if (minute === 60) {
        minute = 0;
        hour++;
    }

    if (hour === 12) {
        hour = 0;
    }

    hands[2].style.transform = `rotate(${second * 6}deg)`;
    hands[1].style.transform = `rotate(${minute * 6}deg)`;
    hands[0].style.transform = `rotate(${hour * 30 + minute * 0.5}deg)`;

}, 1000);

