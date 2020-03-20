const cards = document.querySelectorAll(".card");
const boards = document.querySelectorAll(".board");

let draggedCard = null;

// Loop through all the cards
for (let i = 0; i < cards.length; i++) {
  // Get the current card in the array
  const card = cards[i];

  // Event listener for drag start
  card.addEventListener("dragstart", function() {
    draggedCard = card;
    setTimeout(function() {
      // Hide card
      card.style.display = "none";
    }, 0);
  });

  // Event listener for drag stop
  card.addEventListener("dragend", function() {
    setTimeout(function() {
      // Show card
      draggedCard.style.display = "block";
      draggedCard = null;
    }, 0);
  });

  //  Loop through all the boards
  for (let j = 0; j < cards.length; j++) {
    const board = boards[j];

    // Event listeners:
    // Add card to board
    // Change background color of board
    board.addEventListener("dragover", function(e) {
      e.preventDefault();
    });

    board.addEventListener("dragenter", function(e) {
      e.preventDefault();
      this.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    });

    board.addEventListener("dragleave", function() {
      this.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    });

    board.addEventListener("drop", function() {
      console.log("drop");
      this.append(draggedCard);
      this.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    });
  }
}
