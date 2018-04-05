import React from 'react';
import Game from './Game.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.cards = {
      0: ["./assets/cards/svg-cards/2_of_clubs.svg", 2],
      1: ["./assets/cards/svg-cards/2_of_diamonds.svg", 2],
      2: ["./assets/cards/svg-cards/2_of_hearts.svg", 2],
      3: ["./assets/cards/svg-cards/2_of_spades.svg", 2],
      4: ["./assets/cards/svg-cards/3_of_clubs.svg", 3],
      5: ["./assets/cards/svg-cards/3_of_diamonds.svg", 3],
      6: ["./assets/cards/svg-cards/3_of_hearts.svg", 3],
      7: ["./assets/cards/svg-cards/3_of_spades.svg", 3],
      8: ["./assets/cards/svg-cards/4_of_clubs.svg", 4],
      9: ["./assets/cards/svg-cards/4_of_diamonds.svg", 4],
      10: ["./assets/cards/svg-cards/4_of_hearts.svg", 4],
      11: ["./assets/cards/svg-cards/4_of_spades.svg", 4],
      12: ["./assets/cards/svg-cards/5_of_clubs.svg", 5],
      13: ["./assets/cards/svg-cards/5_of_diamonds.svg", 5],
      14: ["./assets/cards/svg-cards/5_of_hearts.svg", 5],
      15: ["./assets/cards/svg-cards/5_of_spades.svg", 5],
      16: ["./assets/cards/svg-cards/6_of_clubs.svg", 6],
      17: ["./assets/cards/svg-cards/6_of_diamonds.svg", 6],
      18: ["./assets/cards/svg-cards/6_of_hearts.svg", 6],
      19: ["./assets/cards/svg-cards/6_of_spades.svg", 6],
      20: ["./assets/cards/svg-cards/7_of_clubs.svg", 7],
      21: ["./assets/cards/svg-cards/7_of_diamonds.svg", 7],
      22: ["./assets/cards/svg-cards/7_of_hearts.svg", 7],
      23: ["./assets/cards/svg-cards/7_of_spades.svg", 7],
      24: ["./assets/cards/svg-cards/8_of_clubs.svg", 8],
      25: ["./assets/cards/svg-cards/8_of_diamonds.svg", 8],
      26: ["./assets/cards/svg-cards/8_of_hearts.svg", 8],
      27: ["./assets/cards/svg-cards/8_of_spades.svg", 8],
      28: ["./assets/cards/svg-cards/9_of_clubs.svg", 9],
      29: ["./assets/cards/svg-cards/9_of_diamonds.svg", 9],
      30: ["./assets/cards/svg-cards/9_of_hearts.svg", 9],
      31: ["./assets/cards/svg-cards/9_of_spades.svg", 9],
      32: ["./assets/cards/svg-cards/10_of_clubs.svg", 10],
      33: ["./assets/cards/svg-cards/10_of_diamonds.svg", 10],
      34: ["./assets/cards/svg-cards/10_of_hearts.svg", 10],
      35: ["./assets/cards/svg-cards/10_of_spades.svg", 10],
      36: ["./assets/cards/svg-cards/jack_of_clubs.svg", 10],
      37: ["./assets/cards/svg-cards/jack_of_diamonds.svg", 10],
      38: ["./assets/cards/svg-cards/jack_of_hearts.svg", 10],
      39: ["./assets/cards/svg-cards/jack_of_spades.svg", 10],
      40: ["./assets/cards/svg-cards/queen_of_clubs.svg", 10],
      41: ["./assets/cards/svg-cards/queen_of_diamonds.svg", 10],
      42: ["./assets/cards/svg-cards/queen_of_hearts.svg", 10],
      43: ["./assets/cards/svg-cards/queen_of_spades.svg", 10],
      44: ["./assets/cards/svg-cards/king_of_clubs.svg", 10],
      45: ["./assets/cards/svg-cards/king_of_diamonds.svg", 10],
      46: ["./assets/cards/svg-cards/king_of_hearts.svg", 10],
      47: ["./assets/cards/svg-cards/king_of_spades.svg", 10],
      48: ["./assets/cards/svg-cards/ace_of_clubs.svg", 11, 1],
      49: ["./assets/cards/svg-cards/ace_of_diamonds.svg", 11, 1],
      50: ["./assets/cards/svg-cards/ace_of_hearts.svg", 11, 1],
      51: ["./assets/cards/svg-cards/ace_of_spades.svg", 11, 1],
    };

    this.state = {
      turn: true, // Indicates whether it's the player (true) or the dealers (false) turn
      playerHand: [],
      dealerHand: [],
      playerTotal: 0,
      dealerTotal: 0,
      hiddenCard: true, // Indicates whether the dealers second card is hidden, starts hidden
      dealtCards: {},
      winner: '',
      pastResults: [],
    };
  };

  render() {
    return <h1>Hello World!</h1>;
  }
}
export default App;
