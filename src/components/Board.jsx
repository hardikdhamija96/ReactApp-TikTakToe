import React, {useState} from 'react';
import Square from './Square';

const Board = () => {

    const [state,setState]=useState(Array(9).fill(null));

    const [isXTurn, setIsXTurn]= useState(true);

    const checkWinner = () =>{
        const winnerLogic = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

        for(let logic of winnerLogic){
            const[a,b,c]=logic;
            if(state[a]!==null && state[a]===state[b] && state[a]===state[c])
            {
                return state[a];
            }
        }
        return false;
    }

    const isWinner = checkWinner();

    const handleClick = (index)=>{
        if(state[index]===null)
        {
        const copyState = [...state];
        const isOTurn = !isXTurn;
        copyState[index] = isXTurn?"X":"0";
        setIsXTurn(isOTurn);
        setState(copyState);
        }
    }
  return (
    <div className="board-container">
      <h1 style={{ textAlign: "center", color: "rgb(33, 113, 113)", fontSize:"50px"}}>
        Tik Tak Toe
      </h1>
      {isWinner ? (
        <div className="gameWonText">
          <div>{isWinner} won the game</div>
          <button
            className="playAgainBtn"
            onClick={() => {
              setState(Array(9).fill(null));
            }}
          >
            Play Again
          </button>
        </div>
      ) : (
        <>
          <h2 style={{ textAlign: "center", color: "crimson" }}>
            Player {isXTurn ? "X" : "0"}'s Turn
          </h2>
          <div className="board-row">
            <Square onClick={() => handleClick(0)} value={state[0]} />
            <Square onClick={() => handleClick(1)} value={state[1]} />
            <Square onClick={() => handleClick(2)} value={state[2]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(3)} value={state[3]} />
            <Square onClick={() => handleClick(4)} value={state[4]} />
            <Square onClick={() => handleClick(5)} value={state[5]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(6)} value={state[6]} />
            <Square onClick={() => handleClick(7)} value={state[7]} />
            <Square onClick={() => handleClick(8)} value={state[8]} />
          </div>
        </>
      )}
    </div>
  );
}

export default Board