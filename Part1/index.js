let board = [];

function play(clickedId) {
  const playerSpan = document.getElementById("player");
  let clickedElement = document.getElementById(clickedId);
  if (playerSpan.innerText === "X") {
    playerSpan.innerText = "O";
    clickedElement.innerText = "X";
    board[clickedId] = "X";
  } else {
    playerSpan.innerText = "X";
    clickedElement.innerText = "O";
    board[clickedId] = "O";
  }
  console.log('board',board)
  let topLeft = board[0];
  let topMiddle = board[1];
  let topRight = board[2];
  let middleLeft = board[3];
  let middleMiddle = board[4];
  let middleRight = board[5];
  let bottomLeft = board[6];
  let bottomMiddle = board[7];
  let bottomRight = board[8];

  if (topLeft !== undefined && topLeft === topMiddle && topLeft === topRight) {
    alert(`${topLeft} is the winner`);
  }
  if (
    middleLeft !== undefined &&
    middleLeft === middleMiddle &&
    middleLeft === middleRight
  ) {
    alert(`${middleLeft} is the winner`);
  }
  if (
    bottomLeft !== undefined &&
    bottomLeft === bottomMiddle &&
    bottomLeft === bottomRight
  ) {
    alert(`${bottomLeft} is the winner`);
  }
  if (
    topLeft !== undefined &&
    topLeft === middleLeft &&
    topLeft === bottomLeft
  ) {
    alert(`${topLeft} is the winner`);
  }
  if (
    topMiddle !== undefined &&
    topMiddle === middleMiddle &&
    topMiddle === bottomMiddle
  ) {
    alert(`${topMiddle} is the winner`);
  }
  if (
    topRight !== undefined &&
    topRight === middleRight &&
    topRight === bottomRight
  ) {
    alert(`${topRight} is the winner`);
  }
  if (
    topLeft !== undefined &&
    topLeft === middleMiddle &&
    topLeft === bottomRight
  ) {
    alert(`${topLeft} is the winner`);
  }
  if (
    bottomLeft !== undefined &&
    bottomLeft === middleMiddle &&
    bottomLeft === topRight
  ) {
    alert(`${bottomLeft} is the winner`);
  }

    let boardFull = true;
    for (let i = 0; i <= 8; i++) {
        // console.log(i,board[i])
      if (board[i] === undefined) {
        boardFull = false;
      }
    }
    if (boardFull === true) {
      alert("Cats game, there is no winner");
    }
    
}

//has won three in a row.
//creating a variable for each square

function reset() {
  for(let i =0; i <=8; i++){
      square = document.getElementById([i])
      square.innerText = ""
  }
  board = []
}
