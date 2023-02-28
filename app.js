// Definir los valores de las cartas
const valores = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

// Definir las pintas de las cartas
const pintas = [
  { simbolo: '♦', color: 'red' },
  { simbolo: '♥', color: 'red' },
  { simbolo: '♠', color: 'black' },
  { simbolo: '♣', color: 'black' }
];

// Obtener los elementos HTML
const containerElement = document.querySelector('#container');
const buttonElement = document.getElementById('buttonElement');


function crearCarta(pintas, valores) {
  // Crear un nuevo elemento de carta
  const cartaElement = document.createElement('div');
  cartaElement.classList.add('row', 'card');

  // Seleccionar una pinta y un valor al azar
  const pintaAleatoria = pintas[Math.floor(Math.random() * pintas.length)];
  const valorAleatorio = valores[Math.floor(Math.random() * valores.length)];

  // Crear los elementos para la carta
  const arribaElement = document.createElement('div');
  arribaElement.classList.add('col', 'arriba');
  arribaElement.textContent = pintaAleatoria.simbolo;
  arribaElement.style.color = pintaAleatoria.color;

  const centroElement = document.createElement('div');
  centroElement.classList.add('col', 'centro');
  centroElement.textContent = valorAleatorio;

  const abajoElement = document.createElement('div');
  abajoElement.classList.add('col', 'abajo');
  abajoElement.textContent = pintaAleatoria.simbolo;
  abajoElement.style.color = pintaAleatoria.color;

  // Agregar los elementos a la carta
  cartaElement.appendChild(arribaElement);
  cartaElement.appendChild(centroElement);
  cartaElement.appendChild(abajoElement);

  // Devolver el elemento de la carta
  return cartaElement;
}








////intento de multiplicar
const textarea = document.getElementById('inputc');
const boton = document.createElement('button');
boton.textContent = 'Enviar resultados';
document.body.appendChild(boton);

let cartaElement;
let cartasGeneradas = [];
let historial = [];

boton.addEventListener('click', function() {
  const cantidad = parseInt(textarea.value);

  for (let i = 0; i < cantidad; i++) {
    cartaElement = crearCarta(pintas, valores);
    cartasGeneradas.push(cartaElement);
   
  }

  // Mostrar todas las cartas en el contenedor
  containerElement.innerHTML = '';

  cartasGeneradas.forEach(function(carta) {
    containerElement.appendChild(carta);
  });

  historial.forEach(function(carta) {
    containerElement.appendChild(carta.cloneNode(true));
  });
  
});

//

// Agregar evento click al botón Sort
// Agregar evento click al botón Sort
const sortButton = document.getElementById('sortButton');
sortButton.addEventListener('click', function() {
  // Ordenar las cartas usando Bubble Sort
  for (let i = 0; i < cartasGeneradas.length; i++) {
    for (let j = 0; j < cartasGeneradas.length - 1; j++) {
      const cartaActual = cartasGeneradas[j];
      const cartaSiguiente = cartasGeneradas[j + 1];
      const valorActual = cartaActual.querySelector('.centro').textContent;
      const valorSiguiente = cartaSiguiente.querySelector('.centro').textContent;
      if (valores.indexOf(valorActual) > valores.indexOf(valorSiguiente)) {
        cartasGeneradas[j] = cartaSiguiente;
        cartasGeneradas[j + 1] = cartaActual;

        // Mostrar las cartas después de cada movimiento
        setTimeout(() => {
          containerElement.innerHTML = '';
          cartasGeneradas.forEach(function(carta) {
            containerElement.appendChild(carta);
          });
        }, 100);
      }
    }
  }

  // Mostrar las cartas ordenadas en el contenedor
  
  cartasGeneradas.forEach(function(carta) {
    containerElement.appendChild(carta);
  });
});
