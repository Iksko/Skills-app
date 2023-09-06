// const slideNavLinks = document.querySelectorAll('.slide-nav a');

// let currentSlideIndex = 0;

// function simulateClick(element) {
//     const event = new MouseEvent('click', {
//         bubbles: true,
//         cancelable: true,
//         view: window
//     });

//     element.dispatchEvent(event);
// }

// function setActiveLink(index) {
//     slideNavLinks.forEach((link, idx) => {
//         if (idx === index) {
//             link.classList.add('active');
//         } else {
//             link.classList.remove('active');
//         }
//     });
// }

// slideNavLinks.forEach(link => {
//     link.addEventListener('click', () => {
//         link.classList.add('active');
//     });
// });

// function autoClickNextSlide() {
//     simulateClick(slideNavLinks[currentSlideIndex]);

//     setActiveLink(currentSlideIndex);

//     currentSlideIndex = (currentSlideIndex + 1) % slideNavLinks.length;
// }

// setActiveLink(currentSlideIndex);
// setInterval(autoClickNextSlide, 5000);


//



// Vyber všechny prvky uvnitř slide-nav
const slideNavLinks = document.querySelectorAll('.slide-nav a');

// Aktuální index zobrazeného slidu
let currentSlideIndex = 0;

// Funkce pro simulaci automatického kliknutí na prvek
function simulateClick(element) {
    // Událost kliknutí
    const event = new MouseEvent('click', {
        bubbles: true, // Event se šíří nahoru po Document Object Modelu
        cancelable: true, // Event lze zrušit
        view: window // Event se odehrává ve okně prohlížeče
    });

     // Odeslání eventu na daný prvek
    element.dispatchEvent(event);
}

// Funkce pro hledání současného odkazu a přidání class 'active'
function setActiveLink(index) {
    slideNavLinks.forEach((link, idx) => {
        if (idx === index) {
            link.classList.add('active'); // Class 'active' styluje současný button k obrázku
        } else {
            link.classList.remove('active');
        }
    });
}

slideNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        setActiveLink(Array.from(slideNavLinks).indexOf(link));
    });
});

// Funkce pro automatické přepínání slidu každých 5000 ms, odebrání class 'active' z daného prvku a aktualizování dalšícho
function autoClickNextSlide() {
    slideNavLinks[currentSlideIndex].classList.remove('active'); // Odebere class 'active' z aktuálního odkazu
    
    simulateClick(slideNavLinks[currentSlideIndex]); // Automaticky klikne na aktuální odkaz

    setActiveLink(currentSlideIndex); // Nastaví aktivní odkaz

    currentSlideIndex = (currentSlideIndex + 1) % slideNavLinks.length; // Aktualizuje index aktuálního slidu pro další kliknutí
}

setActiveLink(currentSlideIndex); // Nastaví první odkaz jako aktivní - bílá tečka
setInterval(autoClickNextSlide, 5000); // Nastaví interval pro automatické přepínání slidů na 5000 ms



