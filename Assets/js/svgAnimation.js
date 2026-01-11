const svgPaths = document.querySelectorAll("#svg path"); // selezione dei path dell'svg
const pathArr = Array.from(svgPaths); // convertire la nodelist in un array per comodità di utilizzo

// check per vedere se l'array l'ho preso veramente
if (pathArr.length > 0) {
    console.log("array preso");
}
else {
    console.log("ma che cazzo");
}


// aggiungo un "reset" dell'animazione prima di farla partire (probabilmente non serve)
pathArr.forEach(letter => {
    letter.style.opacity = "1";
});


//animazione M
function lightRandomM() {
    // scegliamo una lettera a caso tra quelle visibili

    const M = pathArr[Math.floor(Math.random() * pathArr.length)];

    // spengo la lettera per poi riaccenderla dopo un determinato intervallo di tempo
    M.style.opacity = "0"
    setTimeout(() => {
        M.style.opacity = "1"

    }, 300);
}

// eseguiamo l'effetto a intervalli regolari
setInterval(lightRandomM, 50);

