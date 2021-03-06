import { initialState, JELLY_TETRIS } from "../reducers/tetrisReducer";

export const doPlayBgm = state => {
  const newState = { ...state };
  newState.isPlayBgm = true;
  return newState;
};

export const doPauseBgm = state => {
  const newState = { ...state };
  newState.isPlayBgm = false;
  return newState;
};

export const doReset = state => {
  localStorage.setItem(JELLY_TETRIS, "");
  return initialState(state);
};
