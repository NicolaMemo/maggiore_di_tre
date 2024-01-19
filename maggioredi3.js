// Definisci una funzione chiamata maggiore_dei_tre che prende tre parametri: x, y e z
function maggiore_dei_tre(x, y, z) {
  // Inizializza una variabile massimo_valore con il valore 0
  let massimo_valore = 0;

  // Verifica se x è maggiore di y
  if (x > y) {
    // Se vero, assegna il valore di x a massimo_valore
    massimo_valore = x;
  } else {
    // Se falso, assegna il valore di y a massimo_valore
    massimo_valore = y;
  }

  // Verifica se z è maggiore di massimo_valore
  if (z > massimo_valore) {
    // Se vero, aggiorna massimo_valore al valore di z
    massimo_valore = z;
  }

  // Restituisci il valore finale di massimo_valore
  return massimo_valore;
}

// Stampa il risultato di chiamare maggiore_dei_tre con gli argomenti 1, 0, 1 sulla console
console.log("Risultato di maggiore_dei_tre(1, 0, 1):", maggiore_dei_tre(1, 0, 1));

// Stampa il risultato di chiamare maggiore_dei_tre con gli argomenti 0, -10, -20 sulla console
console.log("Risultato di maggiore_dei_tre(0, -10, -20):", maggiore_dei_tre(0, -10, -20));

// Stampa il risultato di chiamare maggiore_dei_tre con gli argomenti 1000, 510, 440 sulla console
console.log("Risultato di maggiore_dei_tre(1000, 510, 440):", maggiore_dei_tre(1000, 510, 440));
