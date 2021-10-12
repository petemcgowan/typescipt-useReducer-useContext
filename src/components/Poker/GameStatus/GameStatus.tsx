import { useContext } from 'react';
import { GameContext } from '../../../gamestate/GameContext';
import { resetGame } from '../../../gamestate/GameReducer';
import { Status } from '../../../gamestate/GameState';
import './GameStatus.css';

export const GameStatus = () => {
  const { state, dispatch } = useContext(GameContext);
  return (
    <div className='GameStatus'>
      <div className='Status'>
        <h4>Game Status</h4>
        <label>{state.gameStatus}</label>
        <button onClick={() => dispatch(resetGame())}>Start New Game</button>
      </div>
      <div className='Winner'>
        {state.gameStatus === Status.InProgress && (
          <label>
            In Lead : {state.winner?.name} by {state.winner?.value}
          </label>
        )}
        {state.gameStatus === Status.Finished && (
          <label>
            Winner: {state.winner?.name} by {state.winner?.value}
          </label>
        )}
      </div>
    </div>
  );
};
