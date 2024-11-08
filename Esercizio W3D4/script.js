// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
function cambiaH1() {
    document.querySelector('h1').textContent = 'Il Negozio Migliore di Smartphones';
}

// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina
function cambiaBackground() {
    document.body.style.backgroundColor ='#e0e0e0';
}

// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel footer in un altro, fittizio
function cambiaIndirizzo() {
    document.querySelector('footer p').textContent = 'Il Mio Negozio di Smartphones - Via Fittizia 456, Milano, Italia';
}

// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
function aggiungiClasseLink() {
    const links = document.querySelectorAll('table a');
    links.forEach(link => {
        link.classList.add('amazon-link');
    });
}

// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine
function toggleVisibilitaImmagini() {
    const immagini = document.querySelectorAll('table img');
    immagini.forEach(img => {
        img.classList.toggle('invisibile');
    });
}

// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata
function cambiaColorePrezzo() {
    const prezzi = document.querySelectorAll('table td:nth-child(4)');
    prezzi.forEach(prezzo => {
        prezzo.style.color = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    });
}
