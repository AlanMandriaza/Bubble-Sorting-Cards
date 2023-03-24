// Define variables
const numCardsInput = document.getElementById("numCards");
const drawCardsButton = document.getElementById("drawCards");
const sortCardsButton = document.getElementById("sortCards");
const cardListDiv = document.getElementById("cardList");
const logDiv = document.getElementById("log");
let cardList = [];

// Define functions
function generateRandomCards(numCards) {
  const suits = ["♥", "♦", "♣", "♠"];
  const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
  let cards = [];
     
  for (let i = 0; i < numCards; i++) {
    let suit = suits[Math.floor(Math.random() * suits.length)];
    let value = values[Math.floor(Math.random() * values.length)];
    let card = {
      suit: suit,
      value: value
    };
    cards.push(card);
  }

  return cards;
}


function drawCards() {
  // Get number of cards from input
  const numCards = parseInt(numCardsInput.value);

  // Generate random cards and display them
  cardList = generateRandomCards(numCards);

  // Clear the card list div before adding new cards
  cardListDiv.innerHTML = "";

  // Loop through the cards and create elements for each one
  for (let i = 0; i < cardList.length; i++) {
    let card = cardList[i];
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    cardDiv.innerHTML = `<span class="value">${card.value}</span><span class="suit">${card.suit}</span>`;
    cardListDiv.appendChild(cardDiv);
  }
}


function bubbleSort() {
  // Create a copy of the card list
  let sortedList = [...cardList];

  // Perform bubble sort and log each step
  let len = sortedList.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (sortedList[j].value > sortedList[j + 1].value) {
        let temp = sortedList[j];
        sortedList[j] = sortedList[j + 1];
        sortedList[j + 1] = temp;
        logDiv.innerHTML += sortedList.map(card => `${card.value} of ${card.suit}`).join(", ") + "<br>";
      }
    }
  }

  // Update card list with sorted list
  cardList = sortedList;

  // Clear the card list div before adding sorted cards
  cardListDiv.innerHTML = "";

  // Loop through the sorted cards and create elements for each one
  for (let i = 0; i < cardList.length; i++) {
    let card = cardList[i];
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    // Create elements for the value and suit of the card
    let valueSpan = document.createElement("span");
    valueSpan.classList.add("value");
    valueSpan.innerText = card.value;

    let suitSpan = document.createElement("span");
    suitSpan.classList.add("suit");
    suitSpan.innerText = card.suit;

    // Add the value and suit elements to the card element
    cardDiv.appendChild(valueSpan);
    cardDiv.appendChild(suitSpan);

    // Add the card element to the card list div
    cardListDiv.appendChild(cardDiv);
  }
}



// Attach event listeners
drawCardsButton.addEventListener("click", drawCards);
sortCardsButton.addEventListener("click", bubbleSort);
