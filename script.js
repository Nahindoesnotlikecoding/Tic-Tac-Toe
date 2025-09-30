let gameStatus = document.querySelector(".game-status");

let count = 0;
let arr = [
  [9, 9, 9],
  [9, 9, 9],
  [9, 9, 9],
];
let isCross = false;
let winnerFound = false;

let box11 = document.querySelector(".box11");
let box12 = document.querySelector(".box12");
let box13 = document.querySelector(".box13");
let box21 = document.querySelector(".box21");
let box22 = document.querySelector(".box22");
let box23 = document.querySelector(".box23");
let box31 = document.querySelector(".box31");
let box32 = document.querySelector(".box32");
let box33 = document.querySelector(".box33");

// Reset the game
let resetGame = () => {
  gameStatus.classList.remove("win-game-status", "draw-game-status");
  gameStatus.innerText = "Tic Tac Toe!"
  winnerFound = false;
  count = 0;
  isCross = false;
  arr = [
    [9, 9, 9],
    [9, 9, 9],
    [9, 9, 9],
  ];

  const boxes = [box11, box12, box13, box21, box22, box23, box31, box32, box33];
  boxes.forEach((box) => {
    box.style.backgroundImage = "";
    box.style.backgroundColor = "";
  });
};

gameStatus.addEventListener("click", resetGame);


// winning animation
let flashWins = () => {
  gameStatus.classList.add("win-game-status");
};

// drawing animation
let flashDraws = () => {
  gameStatus.classList.add("draw-game-status");
};



// games logic
let gameLogic = () => {
  if (count >= 5) {
    // 1st logic
    if (arr[0][0] == 0 && arr[0][1] == 0 && arr[0][2] == 0) {
      gameStatus.innerText = "Congrats! 0 wins the game. Reset?";
      winnerFound = true;
      flashWins();
      return;
    } else if (arr[0][0] == 1 && arr[0][1] == 1 && arr[0][2] == 1) {
      gameStatus.innerText = "Congrats! X wins the game. Reset?";
      winnerFound = true;
      flashWins();
      return;
    }

    // 2nd logic
    else if (arr[1][0] == 0 && arr[1][1] == 0 && arr[1][2] == 0) {
      gameStatus.innerText = "Congrats! 0 wins the game. Reset?";
      winnerFound = true;
      flashWins();
      return;
    } else if (arr[1][0] == 1 && arr[1][1] == 1 && arr[1][2] == 1) {
      gameStatus.innerText = "Congrats! X wins the game. Reset?";
      winnerFound = true;
      flashWins();
      return;
    }

    // 3rd logic
    else if (arr[2][0] == 0 && arr[2][1] == 0 && arr[2][2] == 0) {
      gameStatus.innerText = "Congrats! 0 wins the game. Reset?";
      winnerFound = true;
      flashWins();
      return;
    } else if (arr[2][0] == 1 && arr[2][1] == 1 && arr[2][2] == 1) {
      gameStatus.innerText = "Congrats! X wins the game. Reset?";
      winnerFound = true;
      flashWins();
      return;
    }

    // 4th logic
    else if (arr[0][0] == 0 && arr[1][0] == 0 && arr[2][0] == 0) {
      gameStatus.innerText = "Congrats! 0 wins the game. Reset?";
      winnerFound = true;
      flashWins();
      return;
    } else if (arr[0][0] == 1 && arr[1][0] == 1 && arr[2][0] == 1) {
      gameStatus.innerText = "Congrats! X wins the game. Reset?";
      winnerFound = true;
      flashWins();
      return;
    }

    // 5th logic
    else if (arr[0][1] == 0 && arr[1][1] == 0 && arr[2][1] == 0) {
      gameStatus.innerText = "Congrats! 0 wins the game. Reset?";
      winnerFound = true;
      flashWins();
      return;
    } else if (arr[0][1] == 1 && arr[1][1] == 1 && arr[2][1] == 1) {
      gameStatus.innerText = "Congrats! X wins the game. Reset?";
      winnerFound = true;
      flashWins();
      return;
    }

    // 6th logic
    else if (arr[0][2] == 0 && arr[1][2] == 0 && arr[2][2] == 0) {
      gameStatus.innerText = "Congrats! 0 wins the game. Reset?";
      winnerFound = true;
      flashWins();
      return;
    } else if (arr[0][2] == 1 && arr[1][2] == 1 && arr[2][2] == 1) {
      gameStatus.innerText = "Congrats! X wins the game. Reset?";
      winnerFound = true;
      flashWins();
      return;
    }

    // 7th logic
    else if (arr[0][0] == 0 && arr[1][1] == 0 && arr[2][2] == 0) {
      gameStatus.innerText = "Congrats! 0 wins the game. Reset?";
      winnerFound = true;
      flashWins();
      return;
    } else if (arr[0][0] == 1 && arr[1][1] == 1 && arr[2][2] == 1) {
      gameStatus.innerText = "Congrats! X wins the game. Reset?";
      winnerFound = true;
      flashWins();
      return;
    }
    // 8th logic
    else if (arr[0][2] == 0 && arr[1][1] == 0 && arr[2][0] == 0) {
      gameStatus.innerText = "Congrats! 0 wins the game. Reset?";
      winnerFound = true;
      flashWins();
      return;
    } else if (arr[0][2] == 1 && arr[1][1] == 1 && arr[2][0] == 1) {
      gameStatus.innerText = "Congrats! X wins the game. Reset?";
      winnerFound = true;
      flashWins();
      return;
    } else if (count == 9 && winnerFound == false) {
      gameStatus.innerText = "The game is drawn! Reset?";
      flashDraws();
      return;
    }
  }
};



// box number 1
box11.addEventListener("click", () => {
  if (winnerFound) return;
  if (box11.style.backgroundImage) return;
  if (isCross) {
    box11.style.backgroundImage = "url('X.png')";
    arr[0][0] = 1;
  } else {
    box11.style.backgroundImage = "url('O.png')";
    arr[0][0] = 0;
  }

  box11.style.backgroundSize = "cover";
  isCross = !isCross;
  count++;
  gameLogic();
});

// box number 2
box12.addEventListener("click", () => {
  if (winnerFound) return;
  if (box12.style.backgroundImage) return;
  if (isCross) {
    box12.style.backgroundImage = "url('X.png')";
    arr[0][1] = 1;
  } else {
    box12.style.backgroundImage = "url('O.png')";
    arr[0][1] = 0;
  }

  box12.style.backgroundSize = "cover";
  isCross = !isCross;
  count++;
  gameLogic();
});

// box number 3
box13.addEventListener("click", () => {
  if (winnerFound) return;
  if (box13.style.backgroundImage) return;
  if (isCross) {
    box13.style.backgroundImage = "url('X.png')";
    arr[0][2] = 1;
  } else {
    box13.style.backgroundImage = "url('O.png')";
    arr[0][2] = 0;
  }

  box13.style.backgroundSize = "cover";
  isCross = !isCross;
  count++;
  gameLogic();
});

// box number 4
box21.addEventListener("click", () => {
  if (winnerFound) return;
  if (box21.style.backgroundImage) return;
  if (isCross) {
    box21.style.backgroundImage = "url('X.png')";
    arr[1][0] = 1;
  } else {
    box21.style.backgroundImage = "url('O.png')";
    arr[1][0] = 0;
  }

  box21.style.backgroundSize = "cover";
  isCross = !isCross;
  count++;
  gameLogic();
});

// box number 5
box22.addEventListener("click", () => {
  if (winnerFound) return;
  if (box22.style.backgroundImage) return;
  if (isCross) {
    box22.style.backgroundImage = "url('X.png')";
    arr[1][1] = 1;
  } else {
    box22.style.backgroundImage = "url('O.png')";
    arr[1][1] = 0;
  }

  box22.style.backgroundSize = "cover";
  isCross = !isCross;
  count++;
  gameLogic();
});

// box number 6
box23.addEventListener("click", () => {
  if (winnerFound) return;
  if (box23.style.backgroundImage) return;
  if (isCross) {
    box23.style.backgroundImage = "url('X.png')";
    arr[1][2] = 1;
  } else {
    box23.style.backgroundImage = "url('O.png')";
    arr[1][2] = 0;
  }

  box23.style.backgroundSize = "cover";
  isCross = !isCross;
  count++;
  gameLogic();
});

// box number 7
box31.addEventListener("click", () => {
  if (winnerFound) return;
  if (box31.style.backgroundImage) return;
  if (isCross) {
    box31.style.backgroundImage = "url('X.png')";
    arr[2][0] = 1;
  } else {
    box31.style.backgroundImage = "url('O.png')";
    arr[2][0] = 0;
  }

  box31.style.backgroundSize = "cover";
  isCross = !isCross;
  count++;
  gameLogic();
});

// box number 8
box32.addEventListener("click", () => {
  if (winnerFound) return;
  if (box32.style.backgroundImage) return;
  if (isCross) {
    box32.style.backgroundImage = "url('X.png')";
    arr[2][1] = 1;
  } else {
    box32.style.backgroundImage = "url('O.png')";
    arr[2][1] = 0;
  }

  box32.style.backgroundSize = "cover";
  isCross = !isCross;
  count++;
  gameLogic();
});

// box number 9
box33.addEventListener("click", () => {
  if (winnerFound) return;
  if (box33.style.backgroundImage) return;
  if (isCross) {
    box33.style.backgroundImage = "url('X.png')";
    arr[2][2] = 1;
  } else {
    box33.style.backgroundImage = "url('O.png')";
    arr[2][2] = 0;
  }

  box33.style.backgroundSize = "cover";
  isCross = !isCross;
  count++;
  gameLogic();
});


