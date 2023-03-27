// Variables globales
let cartas = [];
let historial = [];

// Función para generar cartas nob aleatorias
function generarCartas(numCartas) {
  const palos = ['Oros', 'Copas', 'Espadas', 'Bastos'];
  const numeros = ['As', '2', '3', '4', '5', '6', '7', 'Sota', 'Caballo', 'Rey'];
  for (let i = 0; i < numCartas; i++) {
    const palo = palos[Math.floor(Math.random() * palos.length)];
    const numero = numeros[Math.floor(Math.random() * numeros.length)];
    cartas.push({ numero, palo });
  }
  mostrarCartas();
}

// Función para crear una carta nob con el número, palo y escudo dados
function crearCartaNob(numero, palo) {
  // Crear elementos de la carta
  const divCarta = document.createElement('div');
  divCarta.classList.add('carta');

  const divNumero = document.createElement('div');
  divNumero.classList.add('numero');
  divNumero.textContent = numero;

  const divPalo = document.createElement('div');
  divPalo.classList.add('palo');
  divPalo.textContent = palo;

  const divEscudo = document.createElement('div');
  divEscudo.classList.add('escudo');
  const divEscudoTop = document.createElement('div');
  divEscudoTop.classList.add('escudo-top');
  const divEscudoBottom = document.createElement('div');
  divEscudoBottom.classList.add('escudo-bottom');
  divEscudo.appendChild(divEscudoTop);
  divEscudo.appendChild(divEscudoBottom);

  // Agregar elementos al DOM
  divCarta.appendChild(divNumero);
  divCarta.appendChild(divPalo);
  divCarta.appendChild(divEscudo);
  document.getElementById('contenedor-cartas').appendChild(divCarta);
}

// Función para mostrar las cartas generadas
function mostrarCartas() {
  const divCartas = document.getElementById('contenedor-cartas');
  divCartas.innerHTML = '';
  for (let carta of cartas) {
    crearCartaNob(carta.numero, carta.palo);
  }
}

// Función para ordenar las cartas usando bubble sort
function ordenarCartas() {
  historial = []; // Limpiamos el historial
  for (let i = 0; i < cartas.length - 1; i++) {
    for (let j = 0; j < cartas.length - i - 1; j++) {
      if (cartas[j].numero > cartas[j + 1].numero) {
        // Intercambiar cartas
        [cartas[j], cartas[j + 1]] = [cartas[j + 1], cartas[j]];
        historial.push([...cartas]); // Guardamos una copia de las cartas en el historial
      }
    }
  }
  mostrarCartas();
  mostrarHistorial();
}

// Función para mostrar el historial de cambios de ordenamiento
// Función para mostrar el historial de cambios de ordenamiento
function mostrarHistorial() {
  const divHistorial = document.getElementById('historial');
  divHistorial.innerHTML = '';
  for (let i = 0; i < historial.length; i++) {
    const divCambio = document.createElement('div');
    divCambio.classList.add('cambio');
    for (let j = 0; j < historial[i].length; j++) {
      const divCarta = document.createElement('div');
      divCarta.classList.add('carta');
      const divNumero = document.createElement('div');
      divNumero.classList.add('numero');
      divNumero.textContent = historial[i][j].numero;
      const divPalo = document.createElement('div');
      divPalo.classList.add('palo');
      divPalo.textContent = historial[i][j].palo;
      const divEscudo = document.createElement('div');
      divEscudo.classList.add('escudo');
      const divEscudoTop = document.createElement('div');
      divEscudoTop.classList.add('escudo-top');
      const divEscudoBottom = document.createElement('div');
      divEscudoBottom.classList.add('escudo-bottom');
      divEscudo.appendChild(divEscudoTop);
      divEscudo.appendChild(divEscudoBottom);
      divCarta.appendChild(divNumero);
      divCarta.appendChild(divPalo);
      divCarta.appendChild(divEscudo);
      divCambio.appendChild(divCarta);
    }
    divHistorial.appendChild(divCambio);
  }
}
// Agregar evento click al botón de generar cartas
document.getElementById('generar-cartas').addEventListener('click', () => {
  const numCartas = document.getElementById('num-cartas').value;
  if (numCartas === '') {
    alert('Ingrese la cantidad de cartas a generar.');
  } else {
    cartas = []; // Limpiar el arreglo de cartas
    generarCartas(parseInt(numCartas));
  }
});
// Agregar evento click al botón de ordenar cartas
document.getElementById('ordenar-cartas').addEventListener('click', () => {
  if (cartas.length === 0) {
    alert('Primero genere las cartas.');
  } else {
    ordenarCartas();
  }
});
