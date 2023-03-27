// Define variables
const numCardsInput = document.getElementById("numCards");
const drawCardsButton = document.getElementById("drawCards");
const sortCardsButton = document.getElementById("sortCards");
const cardListDiv = document.getElementById("cardList");
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
  const historyLog = document.getElementById("historyLog");
  historyLog.innerHTML = "";
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (sortedList[j].value > sortedList[j + 1].value) {
        let temp = sortedList[j];
        sortedList[j] = sortedList[j + 1];
        sortedList[j + 1] = temp;
        let stepDiv = document.createElement("div");
        stepDiv.classList.add("step");

        // Create elements for the first card in the step
        let card1Div = document.createElement("div");
        card1Div.classList.add("card");
        let valueSpan1 = document.createElement("span");
        valueSpan1.classList.add("value");
        valueSpan1.innerText = sortedList[j].value;
        let suitSpan1 = document.createElement("span");
        suitSpan1.classList.add("suit");
        suitSpan1.innerText = sortedList[j].suit;
        card1Div.appendChild(valueSpan1);
        card1Div.appendChild(suitSpan1);
        stepDiv.appendChild(card1Div);

        // Add a separator between the two cards
        let separatorSpan = document.createElement("span");
        separatorSpan.classList.add("separator");
      
        stepDiv.appendChild(separatorSpan);

        // Create elements for the second card in the step
        let card2Div = document.createElement("div");
        card2Div.classList.add("card");
        let valueSpan2 = document.createElement("span");
        valueSpan2.classList.add("value");
        valueSpan2.innerText = sortedList[j + 1].value;
        let suitSpan2 = document.createElement("span");
        suitSpan2.classList.add("suit");
        suitSpan2.innerText = sortedList[j + 1].suit;
        card2Div.appendChild(valueSpan2);
        card2Div.appendChild(suitSpan2);
        stepDiv.appendChild(card2Div);

        historyLog.appendChild(stepDiv);
      }
    }
  }

  // Update card list with sorted list
  cardList = sortedList;

  // Clear the card list div before adding sorted cards
  cardListDiv.innerHTML = "";

  // Loop through the sorted cards and create elements for each one
  for (let i = 0; i < cardList.length; i++) {
    let card = sortedList[i];
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
