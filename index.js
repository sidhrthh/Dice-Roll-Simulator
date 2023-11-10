// Selecting HTML elements and storing them in variables
const buttonEl = document.querySelector("#roll-button");
const diceEl = document.querySelector("#dice");
const rollHistoryEl = document.querySelector("#roll-history");

// Array to store the roll history
let historyList = [];

// Function to simulate rolling a six-sided die
function rollDice() {
  // Generate a random number between 1 and 6
  const rollResult = Math.floor(Math.random() * 6) + 1;
  // Get the corresponding dice face HTML entity based on the roll result
  const diceFace = getDiceFace(rollResult);
  // Update the inner HTML of the dice element with the chosen dice face
  diceEl.innerHTML = diceFace;
  // Add the roll result to the roll history array
  historyList.push(rollResult);
  // Update the displayed roll history on the web page
  updateRollHistory();
}
// Function to update the roll history on the web page
function updateRollHistory() {
  // Clear the current content of the roll history element
  rollHistoryEl.innerHTML = "";
  // Loop through the roll history array
  for (let i = 0; i < historyList.length; i++) {
    // Create a list item element
    const listItem = document.createElement("li");
    // Set the inner HTML of the list item with the roll information
    listItem.innerHTML = ` Roll ${i + 1}: <span>${getDiceFace(
      historyList[i]
    )}</span>`;
    // Append the list item to the roll history element
    rollHistoryEl.appendChild(listItem);
  }
}
// Function to map roll results to corresponding dice faces
function getDiceFace(number) {}

function getDiceFace(rollResult) {
  // Use a switch statement to map each roll result to a specific dice face HTML entity
  switch (rollResult) {
    case 1: // Dice face for 1
      return "&#9856;";

    case 2: // Dice face for 2
      return "&#9857;";

    case 3: // Dice face for 3
      return "&#9858;";

    case 4: // Dice face for 4
      return "&#9859;";

    case 5: // Dice face for 5
      return "&#9860;";

    case 6: // Dice face for 6
      return "&#9861;";

    default:
      return "";
  }
}
// Event listener for the button click
buttonEl.addEventListener("click", function () {
  // Add a CSS class for a roll animation to the dice element
  diceEl.classList.add("roll-animation");
  // Set a timeout to remove the roll animation class after 1 seconds

  setTimeout(function () {
    diceEl.classList.remove("roll-animation");
  }, 1000);
  // Call the rollDice function to simulate a dice roll
  rollDice();
});
