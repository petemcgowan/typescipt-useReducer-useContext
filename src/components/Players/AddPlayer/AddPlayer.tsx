import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { GameContext } from '../../../gamestate/GameContext';
import { addPlayer } from '../../../gamestate/GameReducer';
import { Player, Status } from '../../../gamestate/GameState';

export const AddPlayer = () => {
  const { dispatch } = useContext(GameContext);
  const [playerName, setPlayerName] = useState('');
  const handlePlayerNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPlayerName(event.target.value);
  };
  const handleSubmit = (event: FormEvent) => {
    const player: Player = {
      id: +new Date(),
      name: playerName,
      status: Status.NotStarted,
    };
    dispatch(addPlayer(player));
    setPlayerName('');
    event.preventDefault();
  };
  return (
    <>
      <h4>Add New Player</h4>
      <form onSubmit={handleSubmit}>
        <input
          value={playerName}
          type='text'
          onChange={handlePlayerNameChange}
        />
        <button type='submit' value='Submit' disabled={playerName === ''}>
          Add
        </button>
      </form>
    </>
  );
};
