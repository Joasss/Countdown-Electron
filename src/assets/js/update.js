function updateCountdown() {
    const name = localStorage.getItem("name");
    const desc = localStorage.getItem("desc");
    const date = localStorage.getItem("date");
    if (!name || !desc || !date) return;    

    const nDoc = document.getElementById("name-cd");
    const dDoc = document.getElementById("desc-cd");
    const cDoc = document.getElementById("cd");
    nDoc.innerHTML = name;
    dDoc.innerHTML = desc;
    cDoc.innerHTML = date;
}