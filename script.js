"use strict";
let turn = document.getElementById("turn");
let row1 = document.getElementById("1");
let row2 = document.getElementById("2");
let row3 = document.getElementById("3");
let row4 = document.getElementById("4");
let row5 = document.getElementById("5");
let row6 = document.getElementById("6");
let row7 = document.getElementById("7");
let row8 = document.getElementById("8");
let row9 = document.getElementById("9");
const playerclicks = document.querySelectorAll(".row");
let result = document.getElementById("result");
let tryagain = document.getElementById("try");
tryagain.addEventListener("click", (e) => {
  result.innerHTML = "";
  player.value = "";
  row1.disabled = false;
  row2.disabled = false;
  row3.disabled = false;
  row4.disabled = false;
  row5.disabled = false;
  row6.disabled = false;
  row7.disabled = false;
  row8.disabled = false;
  row9.disabled = false;
  row1.value = "";
  row2.value = "";
  row3.value = "";
  row4.value = "";
  row5.value = "";
  row6.value = "";
  row7.value = "";
  row8.value = "";
  row9.value = "";
});
let x_turn = true,
  player;
playerclicks.forEach((playerclick) => {
  playerclick.addEventListener("click", (e) => {
    player = e.target;
    turn.innerText = "X - TURN (Player1 Turn)";
    if (x_turn === true) {
      player.value = "X";
      turn.innerText = "O - TURN (Player2 Turn)";
    } else {
      player.value = "O";
    }
    x_turn = !x_turn;
    checkWin();
  });
});
function checkWin() {
  if ((row1.value && row2.value && row3.value) !== "") {
    if (row1.value == "X" && row2.value == "X" && row3.value == "X") {
      result.innerHTML = "Player1 WON.... GAME OVER ...";
      row1.disabled = true;
      row2.disabled = true;
      row3.disabled = true;
      row4.disabled = true;
      row5.disabled = true;
      row6.disabled = true;
      row7.disabled = true;
      row8.disabled = true;
      row9.disabled = true;
    } else if (row1.value == "O" && row2.value == "O" && row3.value == "O") {
      result.innerHTML = "Player2 WON.... GAME OVER ...";
      row1.disabled = true;
      row2.disabled = true;
      row3.disabled = true;
      row4.disabled = true;
      row5.disabled = true;
      row6.disabled = true;
      row7.disabled = true;
      row8.disabled = true;
      row9.disabled = true;
    }
  }
  if ((row4.value && row5.value && row6.value) !== "") {
    if (row4.value == "X" && row5.value == "X" && row6.value == "X") {
      result.innerHTML = "Player1 WON.... GAME OVER ...";
      row1.disabled = true;
      row2.disabled = true;
      row3.disabled = true;
      row4.disabled = true;
      row5.disabled = true;
      row6.disabled = true;
      row7.disabled = true;
      row8.disabled = true;
      row9.disabled = true;
    } else if (row4.value == "O" && row5.value == "O" && row6.value == "O") {
      result.innerHTML = "Player2 WON.... GAME OVER ...";
      row1.disabled = true;
      row2.disabled = true;
      row3.disabled = true;
      row4.disabled = true;
      row5.disabled = true;
      row6.disabled = true;
      row7.disabled = true;
      row8.disabled = true;
      row9.disabled = true;
    }
  }
  if ((row7.value && row8.value && row9.value) !== "") {
    if (row7.value == "X" && row8.value == "X" && row9.value == "X") {
      result.innerHTML = "Player1 WON.... GAME OVER ...";
      row1.disabled = true;
      row2.disabled = true;
      row3.disabled = true;
      row4.disabled = true;
      row5.disabled = true;
      row6.disabled = true;
      row7.disabled = true;
      row8.disabled = true;
      row9.disabled = true;
    } else if (row7.value == "O" && row8.value == "O" && row9.value == "O") {
      result.innerHTML = "Player2 WON.... GAME OVER ...";
      row1.disabled = true;
      row2.disabled = true;
      row3.disabled = true;
      row4.disabled = true;
      row5.disabled = true;
      row6.disabled = true;
      row7.disabled = true;
      row8.disabled = true;
      row9.disabled = true;
    }
  }
  if ((row1.value && row4.value && row7.value) !== "") {
    if (row1.value == "X" && row4.value == "X" && row7.value == "X") {
      result.innerHTML = "Player1 WON.... GAME OVER ...";
      row1.disabled = true;
      row2.disabled = true;
      row3.disabled = true;
      row4.disabled = true;
      row5.disabled = true;
      row6.disabled = true;
      row7.disabled = true;
      row8.disabled = true;
      row9.disabled = true;
    } else if (row1.value == "O" && row4.value == "O" && row7.value == "O") {
      result.innerHTML = "Player2 WON.... GAME OVER ...";
      row1.disabled = true;
      row2.disabled = true;
      row3.disabled = true;
      row4.disabled = true;
      row5.disabled = true;
      row6.disabled = true;
      row7.disabled = true;
      row8.disabled = true;
      row9.disabled = true;
    }
  }
  if ((row2.value && row5.value && row8.value) !== "") {
    if (row2.value == "X" && row5.value == "X" && row8.value == "X") {
      result.innerHTML = "Player1 WON.... GAME OVER ...";
      row1.disabled = true;
      row2.disabled = true;
      row3.disabled = true;
      row4.disabled = true;
      row5.disabled = true;
      row6.disabled = true;
      row7.disabled = true;
      row8.disabled = true;
      row9.disabled = true;
    } else if (row2.value == "O" && row5.value == "O" && row8.value == "O") {
      result.innerHTML = "Player2 WON.... GAME OVER ...";
      row1.disabled = true;
      row2.disabled = true;
      row3.disabled = true;
      row4.disabled = true;
      row5.disabled = true;
      row6.disabled = true;
      row7.disabled = true;
      row8.disabled = true;
      row9.disabled = true;
    }
  }
  if ((row3.value && row6.value && row9.value) !== "") {
    if (row3.value == "X" && row6.value == "X" && row9.value == "X") {
      result.innerHTML = "Player1 WON.... GAME OVER ...";
      row1.disabled = true;
      row2.disabled = true;
      row3.disabled = true;
      row4.disabled = true;
      row5.disabled = true;
      row6.disabled = true;
      row7.disabled = true;
      row8.disabled = true;
      row9.disabled = true;
    } else if (row3.value == "O" && row6.value == "O" && row9.value == "O") {
      result.innerHTML = "Player2 WON.... GAME OVER ...";
      row1.disabled = true;
      row2.disabled = true;
      row3.disabled = true;
      row4.disabled = true;
      row5.disabled = true;
      row6.disabled = true;
      row7.disabled = true;
      row8.disabled = true;
      row9.disabled = true;
    }
  }
  if ((row9.value && row5.value && row1.value) !== "") {
    if (row9.value == "X" && row5.value == "X" && row1.value == "X") {
      result.innerHTML = "Player1 WON.... GAME OVER ...";
      row1.disabled = true;
      row2.disabled = true;
      row3.disabled = true;
      row4.disabled = true;
      row5.disabled = true;
      row6.disabled = true;
      row7.disabled = true;
      row8.disabled = true;
      row9.disabled = true;
    } else if (row1.value == "O" && row5.value == "O" && row9.value == "O") {
      result.innerHTML = "Player2 WON.... GAME OVER ...";
      row1.disabled = true;
      row2.disabled = true;
      row3.disabled = true;
      row4.disabled = true;
      row5.disabled = true;
      row6.disabled = true;
      row7.disabled = true;
      row8.disabled = true;
      row9.disabled = true;
    }
  }
  if ((row3.value && row5.value && row7.value) !== "") {
    if (row3.value == "X" && row5.value == "X" && row7.value == "X") {
      result.innerHTML = "Player1 WON.... GAME OVER ...";
      row1.disabled = true;
      row2.disabled = true;
      row3.disabled = true;
      row4.disabled = true;
      row5.disabled = true;
      row6.disabled = true;
      row7.disabled = true;
      row8.disabled = true;
      row9.disabled = true;
    } else if (row3.value == "O" && row5.value == "O" && row7.value == "O") {
      result.innerHTML = "Player2 WON.... GAME OVER ...";
      row1.disabled = true;
      row2.disabled = true;
      row3.disabled = true;
      row4.disabled = true;
      row5.disabled = true;
      row6.disabled = true;
      row7.disabled = true;
      row8.disabled = true;
      row9.disabled = true;
    }
  }
  if (
    (row1.value &&
      row2.value &&
      row3.value &&
      row4.value &&
      row5.value &&
      row6.value &&
      row7.value &&
      row8.value &&
      row9.value) != ""
  ) {
    result.innerHTML = "DRAW.... GAME OVER ...";
  }
}
