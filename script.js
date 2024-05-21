let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');
let lapBtn = document.getElementById('lap');
let lapList = document.getElementById('lapList');

let hour = 0;
let minute = 0;
let second = 0;
let count = 0;
let timer = false;
let lapCount = 1;

let interval; // Variable to hold setInterval

lapBtn.addEventListener('click', function () {
    if (timer) {
        let lapTime = `${pad(hour)}:${pad(minute)}:${pad(second)}:${pad(count)}`;
        let lapItem = document.createElement('li');
        lapItem.textContent = `Lap ${lapCount}: ${lapTime}`;
        lapList.appendChild(lapItem);
        lapCount++;
    }
});

startBtn.addEventListener('click', function () {
    if (!timer) {
        timer = true;
        interval = setInterval(stopWatch, 10);
    }
});

stopBtn.addEventListener('click', function () {
    timer = false;
    clearInterval(interval);
});

resetBtn.addEventListener('click', function () {
    timer = false;
    clearInterval(interval);
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    lapCount = 1;
    document.getElementById('hr').textContent = "00";
    document.getElementById('min').textContent = "00";
    document.getElementById('sec').textContent = "00";
    document.getElementById('count').textContent = "00";
    lapList.innerHTML = ""; // Clear lap list
});

function stopWatch() {
    count++;
    if (count == 100) {
        second++;
        count = 0;
    }
    if (second == 60) {
        minute++;
        second = 0;
    }
    if (minute == 60) {
        hour++;
        minute = 0;
        second = 0;
    }
    document.getElementById('hr').textContent = pad(hour);
    document.getElementById('min').textContent = pad(minute);
    document.getElementById('sec').textContent = pad(second);
    document.getElementById('count').textContent = pad(count);
}

function pad(num) {
    return num < 10 ? "0" + num : num;
}
