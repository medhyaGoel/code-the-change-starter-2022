import React from 'react';
import Square from "./Square";

const Board = (props) => {
  const gridBoard = props.boardP.map((x, index) => (
    <Square 
      key = {index}
      id = {index}
      value={x}
      onClick = {() => props.onClick(index)}
    />
  ));

  return (
    <div className="board">
        {gridBoard}
    </div>
  )
};


export default Board;
