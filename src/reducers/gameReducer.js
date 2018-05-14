import { dealCard, rmFromDeck } from './utils';

const initialState = {
  winner: null,
  playerTurn: null,
  playerHand: [],
  computerHand: [],
  cardCount: 52,
  deck: [
    { path: './assets/cards/svg-cards/2_of_clubs.svg', value: 2 },
    { path: './assets/cards/svg-cards/2_of_diamonds.svg', value: 2 },
    { path: './assets/cards/svg-cards/2_of_hearts.svg', value: 2 },
    { path: './assets/cards/svg-cards/2_of_spades.svg', value: 2 },
    { path: './assets/cards/svg-cards/3_of_clubs.svg', value: 3 },
    { path: './assets/cards/svg-cards/3_of_diamonds.svg', value: 3 },
    { path: './assets/cards/svg-cards/3_of_hearts.svg', value: 3 },
    { path: './assets/cards/svg-cards/3_of_spades.svg', value: 3 },
    { path: './assets/cards/svg-cards/4_of_clubs.svg', value: 4 },
    { path: './assets/cards/svg-cards/4_of_diamonds.svg', value: 4 },
    { path: './assets/cards/svg-cards/4_of_hearts.svg', value: 4 },
    { path: './assets/cards/svg-cards/4_of_spades.svg', value: 4 },
    { path: './assets/cards/svg-cards/5_of_clubs.svg', value: 5 },
    { path: './assets/cards/svg-cards/5_of_diamonds.svg', value: 5 },
    { path: './assets/cards/svg-cards/5_of_hearts.svg', value: 5 },
    { path: './assets/cards/svg-cards/5_of_spades.svg', value: 5 },
    { path: './assets/cards/svg-cards/6_of_clubs.svg', value: 6 },
    { path: './assets/cards/svg-cards/6_of_diamonds.svg', value: 6 },
    { path: './assets/cards/svg-cards/6_of_hearts.svg', value: 6 },
    { path: './assets/cards/svg-cards/6_of_spades.svg', value: 6 },
    { path: './assets/cards/svg-cards/7_of_clubs.svg', value: 7 },
    { path: './assets/cards/svg-cards/7_of_diamonds.svg', value: 7 },
    { path: './assets/cards/svg-cards/7_of_hearts.svg', value: 7 },
    { path: './assets/cards/svg-cards/7_of_spades.svg', value: 7 },
    { path: './assets/cards/svg-cards/8_of_clubs.svg', value: 8 },
    { path: './assets/cards/svg-cards/8_of_diamonds.svg', value: 8 },
    { path: './assets/cards/svg-cards/8_of_hearts.svg', value: 8 },
    { path: './assets/cards/svg-cards/8_of_spades.svg', value: 8 },
    { path: './assets/cards/svg-cards/9_of_clubs.svg', value: 9 },
    { path: './assets/cards/svg-cards/9_of_diamonds.svg', value: 9 },
    { path: './assets/cards/svg-cards/9_of_hearts.svg', value: 9 },
    { path: './assets/cards/svg-cards/9_of_spades.svg', value: 9 },
    { path: './assets/cards/svg-cards/10_of_clubs.svg', value: 10 },
    { path: './assets/cards/svg-cards/10_of_diamonds.svg', value: 10 },
    { path: './assets/cards/svg-cards/10_of_hearts.svg', value: 10 },
    { path: './assets/cards/svg-cards/10_of_spades.svg', value: 10 },
    { path: './assets/cards/svg-cards/jack_of_clubs.svg', value: 10 },
    { path: './assets/cards/svg-cards/jack_of_diamonds.svg', value: 10 },
    { path: './assets/cards/svg-cards/jack_of_hearts.svg', value: 10 },
    { path: './assets/cards/svg-cards/jack_of_spades.svg', value: 10 },
    { path: './assets/cards/svg-cards/queen_of_clubs.svg', value: 10 },
    { path: './assets/cards/svg-cards/queen_of_diamonds.svg', value: 10 },
    { path: './assets/cards/svg-cards/queen_of_hearts.svg', value: 10 },
    { path: './assets/cards/svg-cards/queen_of_spades.svg', value: 10 },
    { path: './assets/cards/svg-cards/king_of_clubs.svg', value: 10 },
    { path: './assets/cards/svg-cards/king_of_diamonds.svg', value: 10 },
    { path: './assets/cards/svg-cards/king_of_hearts.svg', value: 10 },
    { path: './assets/cards/svg-cards/king_of_spades.svg', value: 10 },
    { path: './assets/cards/svg-cards/ace_of_clubs.svg', value: [11, 1]},
    { path: './assets/cards/svg-cards/ace_of_diamonds.svg', value: [11, 1] },
    { path: './assets/cards/svg-cards/ace_of_hearts.svg', value: [11, 1] },
    { path: './assets/cards/svg-cards/ace_of_spades.svg', value: [11, 1] },
  ]
}

function startGame(state) {
  let newDeck = [...state.deck]
  const playerHand = [];
  const computerHand = [];
  for (let i = 0 ; i < 4; i++) {
    const card = dealCard(state.cardCount - 1 - i);
    if (i % 2 === 0) playerHand.push(deck[card]);
    else computerHand.push(deck[cards]);
    newDeck = rmFromDeck(card, newDeck);
  }
  return {
    cardCount: 48,
    deck: newDeck,
    playerHand,
    computerHand,
  }
}


const game = (state = initialState, action) => {
  switch(action.type) {
    case 'START_GAME':
      return {
        ...state,
        ...startGame(state),
      };
    default:
      return state;
  }
}

export default game;