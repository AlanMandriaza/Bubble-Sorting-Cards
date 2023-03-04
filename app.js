// Definir los valores de las cartas
const valores = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

// Definir las pintas de las cartas
const pintas = [
  { simbolo: '♦', color: 'red' },
  { simbolo: '♥', color: 'red' },
  { simbolo: '♠', color: 'black' },
  { simbolo: '♣', color: 'black' }
];
// Seleccionar una pinta y un valor al azar
const pintaAleatoria = pintas[Math.floor(Math.random() * pintas.length)];
const valorAleatorio = valores[Math.floor(Math.random() * valores.length)];

console.log(valorAleatorio);
console.log(pintaAleatoria.simbolo);
console.log(pintaAleatoria.color);
