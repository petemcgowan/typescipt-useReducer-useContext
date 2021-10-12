import { useContext } from 'react';
import { GameContext } from '../../gamestate/GameContext';
import { Player, Status } from '../../gamestate/GameState';
import { setPlayerValue } from '../../gamestate/GameReducer';
import './Players.css';

export const Players = () => {
  const { state, dispatch } = useContext(GameContext);
  const playPlayer = (id: number) => {
    const randomValue = Math.floor(Math.random() * 100);
    dispatch(setPlayerValue(id, randomValue));
  };
  return (
    <div>
      <h4>Players Status</h4>
      <div className='PlayersContainer'>
        {state.players.map((player: Player) => (
          <div key={player.id} className='Player'>
            <label>Name: {player.name}</label>
            <label>Status : {player.status}</label>
            <label>Card Value: {player.value}</label>
            <button
              disabled={player.status !== Status.NotStarted}
              onClick={() => playPlayer(player.id)}
            >
              Play
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
