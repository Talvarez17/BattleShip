import { getCurrentTime } from "./helpers";

export const columnLabel = "ABCDEFGHIJ";

export const NEW_OPPONENT = "NEW_OPPONENT";
export const NEW_MESSAGE = "NEW_MESSAGE";
export const OPPONENT_LEFT = "OPPONENT_LEFT";
export const NEW_GAME = "NEW_GAME";
export const CLEAR_TILES = "CLEAR_TILES";
export const SELECT_TILE = "SELECT_TILE";
export const CONFIRM_TILES = "CONFIRM_TILES";
export const COMPLETE_SELECTION = "COMPLETE_SELECTION";
export const SET_OPPONENT_SHIPS = "SET_OPPONENT_SHIPS";
export const OPPONENTS_TURN = "OPPONENTS_TURN";
export const SHOT = "SHOT";
export const OPPONENT_SHOT = "OPPONENT_SHOT";
export const END = "END";
export const MISSED = "MISSED";
export const SELECTED = "SELECTED";
export const CONFIRMED = "CONFIRMED";
export const HIT = "HIT";

export const INITIAL_MSG_NO_OPPONENT = "No hay oponentes en la sala. Esperando un oponente...";
export const INITIAL_MSG_HAVE_OPPONENT = "Un oponente se ha unido. Comienza el juego!";
export const MSG_HAVE_OPPONENT = "Un oponente se ha unido. Comienza el juego!";
export const MSG_NO_OPPONENT = "El oponente abandonó la partida. Esperando a otro oponente...";
export const MSG_INVALID_TILES = "Debes seleccionar casillas continuas (horizontal o verticalmente).";
export const MSG_ATTACK = "Es tu turno.";
export const MSG_DEFEND = "Turno del oponente.";
export const MSG_WAITING_FOR_PLAYER = "Esperando oponente...";
export const MSG_WIN = "Victoria";
export const MSG_LOSE = "Derrota";
export const MSG_OPPONENT_PLACING_SHIPS = "El oponente esta colocando sus barcos...";
export const MSG_ENTER_NEW_GAME = "[Juego nuevo] Has iniciado un juego nuevo.";

export const ships = [
  { name: "Portaviones", numOfTiles: 5 },
  { name: "Buque de guerra", numOfTiles: 4 },
  { name: "Crucero", numOfTiles: 3 },
  { name: "Submarino", numOfTiles: 3 },
  { name: "Destructor", numOfTiles: 2 },
];

// initial state used in the hook useGame
export const initialState = () => {
  return {
    gameState: 0,
    shipTilesState: 0,
    messages: [{ time: getCurrentTime(), message: "Bienvenido a Battleship!" }],
    myShips: [],
    myShipsShot: [],
    opponentShips: null,
    chosenTiles: [],
    opponentShipsShot: [],
    opponent: undefined,
    gotInitialOpponent: false,
    haveSendInitialMsg: false,
  };
};