const phrases = ["Bem-vindo ao meu Portfolio!", "Bem-vindo ao meu Portfolio!", "Bem-vindo ao meu Portfolio!"];
const typewriterElement = document.getElementById("typewriter");
let currentPhraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentPhrase = phrases[currentPhraseIndex];
    
    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typewriterElement.textContent = currentPhrase.substring(0, charIndex);
    
    if (charIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(type, 1000); // Um tempo antes de deletar
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length; // Vai para outra frase
        setTimeout(type, 500); 
    } else {
        setTimeout(type, isDeleting ? 50 : 100); // Velocidade de digitação
    }
}

// Inicia a animação
type();


// Mudar tema
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }




