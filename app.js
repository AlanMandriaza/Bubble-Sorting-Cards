const valores = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

const pintas = [
  { simbolo: '♦', color: 'red' },
  { simbolo: '♥', color: 'red' },
  { simbolo: '♠', color: 'black' },
  { simbolo: '♣', color: 'black' }
];

const containerElement = document.querySelector('#container');
const buttonElement = document.getElementById('buttonElement');
const historialContainer = document.getElementById('historialContainer');
buttonElement.addEventListener('click', function () {
  const cantidad = parseInt(document.getElementById('inputc').value);

  containerElement.innerHTML = '';

  for (let i = 0; i < cantidad; i++) {
    const cartaElement = crearCarta(pintas, valores);
    containerElement.appendChild(cartaElement);
  }
});

function crearCarta(pintas, valores) {
  const cartaElement = document.createElement('div');
  cartaElement.classList.add('row', 'card');

  const pintaAleatoria = pintas[Math.floor(Math.random() * pintas.length)];
  const valorAleatorio = valores[Math.floor(Math.random() * valores.length)];

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

  cartaElement.appendChild(arribaElement);
  cartaElement.appendChild(centroElement);
  cartaElement.appendChild(abajoElement);

  return cartaElement;
}

const sortButton = document.getElementById('sortButton');
sortButton.addEventListener('click', async function () {
  const cartasGeneradas = Array.from(containerElement.children);

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
        await new Promise(resolve => setTimeout(resolve, 100));
        containerElement.innerHTML = '';
        cartasGeneradas.forEach(function (carta) {
          containerElement.appendChild(carta);
        });

        // Actualizar historial
        const intercambioContainer = document.createElement('div');
        intercambioContainer.classList.add('intercambio');
        intercambioContainer.appendChild(clonarCarta(cartaActual));
        intercambioContainer.appendChild(clonarCarta(cartaSiguiente));
        historialContainer.appendChild(intercambioContainer);
      }
    }
  }
});

function clonarCarta(carta) {
  const cartaClonada = carta.cloneNode(true);
  cartaClonada.classList.add('clon');
  return cartaClonada;
}
