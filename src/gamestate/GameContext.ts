import React from "react";
import { GameState, initialGameState } from "./GameState";
import { GameActions } from "./GameActions";

export const GameContext = React.createContext<{
  state: GameState;
  dispatch: React.Dispatch<GameActions>;
}>({
  state: initialGameState,
  dispatch: () => undefined,
});
