import React, { useReducer } from 'react';
import { GameContext } from '../../gamestate/GameContext';
import { gameReducer } from '../../gamestate/GameReducer';
import { initialGameState } from '../../gamestate/GameState';
import { AddPlayer } from '../Players/AddPlayer/AddPlayer';
import { Players } from '../Players/Players';
import { PlayersList } from '../Players/PlayersList/PlayersList';
import { GameStatus } from './GameStatus/GameStatus';
import './Poker.css';

export const Poker = () => {
  const [state, dispatch] = useReducer(gameReducer, initialGameState);



  return (
    <GameContext.Provider value={{ state, dispatch }}>
      <div className='Header'>
        <header>
          <p>React useReducer and useContext example Poker App</p>
        </header>
      </div>
      <div className='ContentArea'>
        <div className='LeftPanel'>
          <PlayersList />
        </div>
        <div className='MainContentArea'>
          <Players />
        </div>
        <div className='RightPanel'>
          <GameStatus />
        </div>
      </div>
      <div className='Footer'>
        <AddPlayer />
      </div>
    </GameContext.Provider>
  );
};

export default Poker;
