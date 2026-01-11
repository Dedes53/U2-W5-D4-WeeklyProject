const svgPaths = document.querySelectorAll("#svg path"); // selezione dei path dell'svg
const pathArr = Array.from(svgPaths); // Convertiamo la NodeList in un array per comodità di utilizzo

// check per vedere se l'array l'ho preso veramente
if (pathArr.length>0){
    console.log("array preso");
}
else{
    console.log("ma che cazzo");
}


// "reset" dell'animazione prima di farla partire
pathArr.forEach(letter => {
  letter.classList.remove("on");
});