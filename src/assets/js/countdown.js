function getData(form) {
    console.log(form)
    
    const name = form.name.value;
    const description = form.desc.value;
    const date = form.date.value;

    const alert = document.getElementById('alert-box');
    if (!name || !description || !date) { alert.innerHTML = "<i class=\"fa-solid fa-circle-exclamation\"></i> Missing some required fields!";alert.style.display = 'block'; return; }

    localStorage.setItem("name", name);
    localStorage.setItem("desc", description);
    localStorage.setItem("date", date);

    const cd = document.getElementById("countdown");
    const input = document.getElementById("input");

    cd.classList.toggle("hidden");
    input.classList.toggle("hidden");
}

function reset() {
    localStorage.clear();
    
    window.location.reload();
}