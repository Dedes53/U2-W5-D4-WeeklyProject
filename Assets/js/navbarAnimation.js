
const navbar = document.getElementById("navbar");

const hero = document.getElementById("hero");

const nabBtn= document.getElementById("getStarted");


// creiamo un IntersectionObserver
// serve a capire quando un elemento entra o esce dalla viewport
const observer = new IntersectionObserver(
  ([entry]) => {
    // entry rappresenta lo stato della hero rispetto alla viewport

    // se la hero NON è più visibile (scroll oltre la hero)
    if (!entry.isIntersecting) {
      // aggiungiamo la classe che rende la navbar bianca
      navbar.classList.add("is-white");
    } else {
      // se la hero è visibile, torniamo allo stato iniziale
      navbar.classList.remove("is-white");
    }
  },
  {
    root: null,       // null = viewport del browser
    threshold: 0,     // scatta appena l'elemento entra/esce
    // rootMargin: "-80px 0px 0px 0px" // opzionale
  }
);

// diciamo all'observer quale elemento osservare
observer.observe(hero);
