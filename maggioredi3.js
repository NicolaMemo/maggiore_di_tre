// Definisci una funzione chiamata max_of_three che prende tre parametri: x, y e z
function max_of_three(x, y, z) {
  // Inizializza una variabile max_val con il valore 0
  let max_val = 0;

  // Verifica se x è maggiore di y
  if (x > y) {
    // Se vero, assegna il valore di x a max_val
    max_val = x;
  } else {
    // Se falso, assegna il valore di y a max_val
    max_val = y;
  }

  // Verifica se z è maggiore di max_val
  if (z > max_val) {
    // Se vero, aggiorna max_val al valore di z
    max_val = z;
  }

  // Restituisci il valore finale di max_val
  return max_val;
}

// Stampa il risultato di chiamare max_of_three con gli argomenti 1, 0, 1 sulla console
console.log("Risultato di max_of_three(1, 0, 1):", max_of_three(1, 0, 1));

// Stampa il risultato di chiamare max_of_three con gli argomenti 0, -10, -20 sulla console
console.log("Risultato di max_of_three(0, -10, -20):", max_of_three(0, -10, -20));

// Stampa il risultato di chiamare max_of_three con gli argomenti 1000, 510, 440 sulla console
console.log("Risultato di max_of_three(1000, 510, 440):", max_of_three(1000, 510, 440));
