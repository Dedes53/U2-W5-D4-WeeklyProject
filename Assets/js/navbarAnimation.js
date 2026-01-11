
const navbar = document.getElementById("navbar");

const hero = document.getElementById("hero");

const navBtn= document.getElementById("getStarted");


/*
Altro metodo trovato facendo ricerche. Non sapendo se vada bene o meno ai fini del compito lo lscio commentato.
Su internet viene dato come più moderno e poerformante


// IntersectionObserver serve a capire quando un elemento entra o esce dalla schermata
const observer = new IntersectionObserver(
  ([entry]) => {
    // entry => stato della hero rispetto alla viewport

    // condizione per determinare se la hero è visibile o no  
    if (!entry.isIntersecting) {
      // caso in cui la hero non sia più visibile => aggiungiamo la classe alla navbar
      navbar.classList.add("scrolled");
      navBtn.classList.add("scrolled");
    } else {
      // quandoi la hero si vede
      navbar.classList.remove("scrolled");
      navBtn.classList.remove("scrolled");
    }
  },
  {
    root: null,       // null = viewport del browser
    threshold: 0,     // scatta appena l'elemento entra/esce
    rootMargin: "-80px 0px 0px 0px" // mi migliora la precisione del cambio classe (dovrerbbe sottrarre qualcosa in altezza )
  }
);

// diciamo all'observer quale elemento osservare
observer.observe(hero); 
*/


// evento scroll della finestra
window.addEventListener("scroll", () => {

  // distanza di hero da inizio documento
  const heroBottom = hero.offsetTop + hero.offsetHeight;

  // posizione attuale dello scroll
  const scrollPosition = window.scrollY;

  // se superato la fine della hero => ...
  if (scrollPosition >= heroBottom) {
    
    navbar.classList.add("scrolled");
    navBtn.classList.add("scrolled");
  } else {
    
    navbar.classList.remove("scrolled");
    navBtn.classList.remove("scrolled");
  }
});