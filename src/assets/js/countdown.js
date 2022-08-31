function getData(form) {
    
    const name = form.name.value;
    const description = form.desc.value;
    const date = form.date.value;
    if (!name || !description || !date) return;

    localStorage.setItem("name", name);
    localStorage.setItem("desc", description);
    localStorage.setItem("date", date);

    const cd = document.getElementById("cd");
    const input = document.getElementById("input");

    cd.classList.toggle("hidden");
    input.classList.toggle("hidden");
}

function reset() {
    localStorage.clear();
    
    window.location.reload();
}