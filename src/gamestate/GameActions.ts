import { Player, Status } from "./GameState";
// import { useContext} from 'react';
// import { GameContext } from './GameContext';
import { addPlayer } from "./GameReducer";

// const { dispatch } = useContext(GameContext);

export enum ActionType {
  AddPlayer,
  SetPlayerValue,
  ResetGame,
}

export interface AddPlayer {
  type: ActionType.AddPlayer;
  payload: Player;
}

export interface SetPlayerValue {
  type: ActionType.SetPlayerValue;
  payload: { id: number; value: number };
}

export interface ResetGame {
  type: ActionType.ResetGame;
}

// This is my go between test so there is a function that calls Axios, and then dispatches to state.  I don't think the reducer is a place for axios
export const AddPlayerAxios = async (dispatch: (arg0: AddPlayer) => void) => {
  // try {
  // do fetch
  // await axios
  //   .get(`https://jsonplaceholder.typicode.com/users/1`)
  //   .then(res => {
  // const axiosResult : Player = {name: "name", id: 123, status:  Status.Finished};

  const player: Player = {
    id: +new Date(),
    name: "Marvin",
    status: Status.NotStarted,
  };
  dispatch(addPlayer(player));
  // set user info
  // dispatch({
  //   type: "SET_USER",
  //   payload: axiosResult
  // });
  // }
  // catch(error) => {
  //   const result = error;

  //   // set error if has any
  //   dispatch({
  //     type: "SET_ERROR",
  //     payload: {
  //       error: true,
  //       message: result
  //     }
  //   });
};

export type GameActions = AddPlayer | SetPlayerValue | ResetGame;
