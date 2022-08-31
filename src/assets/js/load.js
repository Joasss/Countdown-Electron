function onLoad() {
    console.log("Body loaded!")
    const name = localStorage.getItem("name");
    const desc = localStorage.getItem("desc");
    const date = localStorage.getItem("date");
    if (!name || !desc || !date) return;
    
    const cd = document.getElementById("countdown");
    const input = document.getElementById("input");

    cd.classList.toggle("hidden");
    input.classList.toggle("hidden");


    const nameDocument = document.getElementById("name-cd");
    const descDocument = document.getElementById("desc-cd");
    nameDocument.innerHTML = name;
    descDocument.innerHTML = desc;
}