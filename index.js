let homecount = 0;
let awaycount = 0;

let homePoints = document.getElementById("home");
let awayPoints = document.getElementById("away");
homePoints.textContent = homecount;
awayPoints.textContent = awaycount;

function homeadd1() {
    homecount += 1;
    homePoints.textContent = homecount;
}
function homeadd2() {
    homecount += 2;
    homePoints.textContent = homecount;
}
function homeadd3() {
    homecount += 3;
    homePoints.textContent = homecount;
}
function awayadd1() {
    awaycount += 1;
    awayPoints.textContent = awaycount;
}
function awayadd2() {
    awaycount += 2;
    awayPoints.textContent = awaycount;
}
function awayadd3() {
    awaycount += 3;
    awayPoints.textContent = awaycount;
}

function newGame() {
    homecount = 0;
    homePoints.textContent = homecount;
    awaycount = 0;
    awayPoints.textContent = awaycount;
}

