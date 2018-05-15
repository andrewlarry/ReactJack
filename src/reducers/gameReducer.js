import { dealCard, rmFromDeck, startGame, hit, win } from './gameUtils';

const initialState = {
  winner: null,
  playerTurn: null,
  playerHand: [],
  dealerHand: [],
  cardCount: 52,
  deck: [
    { path: '2_of_clubs.svg', value: 2 },
    { path: '2_of_diamonds.svg', value: 2 },
    { path: '2_of_hearts.svg', value: 2 },
    { path: '2_of_spades.svg', value: 2 },
    { path: '3_of_clubs.svg', value: 3 },
    { path: '3_of_diamonds.svg', value: 3 },
    { path: '3_of_hearts.svg', value: 3 },
    { path: '3_of_spades.svg', value: 3 },
    { path: '4_of_clubs.svg', value: 4 },
    { path: '4_of_diamonds.svg', value: 4 },
    { path: '4_of_hearts.svg', value: 4 },
    { path: '4_of_spades.svg', value: 4 },
    { path: '5_of_clubs.svg', value: 5 },
    { path: '5_of_diamonds.svg', value: 5 },
    { path: '5_of_hearts.svg', value: 5 },
    { path: '5_of_spades.svg', value: 5 },
    { path: '6_of_clubs.svg', value: 6 },
    { path: '6_of_diamonds.svg', value: 6 },
    { path: '6_of_hearts.svg', value: 6 },
    { path: '6_of_spades.svg', value: 6 },
    { path: '7_of_clubs.svg', value: 7 },
    { path: '7_of_diamonds.svg', value: 7 },
    { path: '7_of_hearts.svg', value: 7 },
    { path: '7_of_spades.svg', value: 7 },
    { path: '8_of_clubs.svg', value: 8 },
    { path: '8_of_diamonds.svg', value: 8 },
    { path: '8_of_hearts.svg', value: 8 },
    { path: '8_of_spades.svg', value: 8 },
    { path: '9_of_clubs.svg', value: 9 },
    { path: '9_of_diamonds.svg', value: 9 },
    { path: '9_of_hearts.svg', value: 9 },
    { path: '9_of_spades.svg', value: 9 },
    { path: '10_of_clubs.svg', value: 10 },
    { path: '10_of_diamonds.svg', value: 10 },
    { path: '10_of_hearts.svg', value: 10 },
    { path: '10_of_spades.svg', value: 10 },
    { path: 'jack_of_clubs.svg', value: 10 },
    { path: 'jack_of_diamonds.svg', value: 10 },
    { path: 'jack_of_hearts.svg', value: 10 },
    { path: 'jack_of_spades.svg', value: 10 },
    { path: 'queen_of_clubs.svg', value: 10 },
    { path: 'queen_of_diamonds.svg', value: 10 },
    { path: 'queen_of_hearts.svg', value: 10 },
    { path: 'queen_of_spades.svg', value: 10 },
    { path: 'king_of_clubs.svg', value: 10 },
    { path: 'king_of_diamonds.svg', value: 10 },
    { path: 'king_of_hearts.svg', value: 10 },
    { path: 'king_of_spades.svg', value: 10 },
    { path: 'ace_of_clubs.svg', value: [11, 1]},
    { path: 'ace_of_diamonds.svg', value: [11, 1] },
    { path: 'ace_of_hearts.svg', value: [11, 1] },
    { path: 'ace_of_spades.svg', value: [11, 1] },
  ]
}



const game = (state = initialState, action) => {
  switch(action.type) {
    case 'START_GAME':
      return {
        ...state,
        ...startGame(state),
      };
    case 'RESET':
      return {
        ...startGame(initialState),
      };
    case 'HIT':
      return {
        ...state,
        ...hit(state, action.player),
      };
    case 'STAND':
      return {
        ...state,
        playerTurn: false,
      }
    case 'PLAYER_WINS':
      return {
        ...state,
        winner: 'PLAYER',
      };
    case 'DEALER_WINS':
      return {
        ...state,
        winner: 'DEALER',
      }
    case 'DRAW':
      return {
        ...state,
        winner: 'DRAW',
      }
    default:
      return state;
  }
}

export default game;