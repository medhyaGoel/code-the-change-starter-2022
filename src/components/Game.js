import React, { useState } from "react";
import Board from "./Board";
import Square from './Square';
import { calculateWinner } from "../calculate_win";

const Game = () => {
  // Set up states and functions: position of Xs and Os on board,
  // step number, whether X is next, is there a win or tie, etc.
  const [xIsNext, setXisNext] = useState(true);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [stepNumber, setStepNumber] = useState(0);

  let currWinner = calculateWinner(board);
  let nextPlayer = xIsNext ? 'X' : 'O';

  const handleClick = (id) => {
    if(currWinner === null && board[id] === null ){
      const boardReal = board.slice();
      boardReal[id] = nextPlayer;
      setBoard(boardReal);
      setXisNext(!xIsNext);
      nextPlayer = xIsNext ? 'X' : 'O';
      setStepNumber(stepNumber + 1);
    } else
    {
      console.log("Hi There, I hit else");
    }
    return;
  };

  const jumpToStart = () => {
    setStepNumber(0);
    setXisNext(true);
    const boardTest = [null,null,null,null,null,null,null,null,null];
    setBoard(boardTest);
    console.log("Clearing board");
  };

  const result = () => {
    if(currWinner !== null && currWinner !== 'T'){
      return "Winner: " + currWinner;
    } else if(stepNumber >= 9){
      return "Tie Game.";
    } else {
      return "Next Player: " + nextPlayer; 
    }
  };
  
  return (
    //Render the board here along with the title, game status,
    //and 'Go to Start' button.
    <div>
      <h1>Tic Tac Toe</h1>
      <Board onClick = {(id) => handleClick(id)} boardP={board}  />  
      <div>
        <button onClick = {() => jumpToStart()}> 
          Go to Start 
        </button>
        <h2> 
          {result()} 
        </h2>
      </div>
    </div>
  );
};


export default Game;
