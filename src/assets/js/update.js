const moment = require("moment/moment");

function updateCountdown() {
    const name = localStorage.getItem("name");
    const desc = localStorage.getItem("desc");
    const date = localStorage.getItem("date");
    if (!name || !desc || !date) return;

    var countDownDate = new Date(date);
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const nDoc = document.getElementById("name-cd");
    const dDoc = document.getElementById("desc-cd");
    const cDoc = document.getElementById("cd");
    nDoc.innerHTML = name;
    dDoc.innerHTML = desc;
    cDoc.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
}