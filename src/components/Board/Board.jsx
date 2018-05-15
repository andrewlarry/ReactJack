import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  startGame, 
  hit, 
  stand, 
  playerWins, 
  dealerWins, 
  draw,
  reset,
} from '../../actions';

import CardRow from '../CardRow';
import { 
  StartBox, 
  Button, 
  GameBox,
  ControlBox,
  ScoreHeader,
  ButtonBox,
} from './Board.styles';


const mapStateToProps = (state) => {
  return { game: state.game };
}
const mapDispatchToProps = (dispatch) => {
  return { 
    startGame: () => dispatch(startGame()),
    hit: (player) => dispatch(hit(player)),
    stand: () => dispatch(stand()),
    playerWins: () => dispatch(playerWins()),
    dealerWins: () => dispatch(dealerWins()),
    draw: () => dispatch(draw()),
    reset: () => dispatch(reset()),
  };
}

function calculateScore(hand) {
  return hand.reduce((score, card) => {
      if (typeof card.value !== 'number') {
        score += card.value[0];
        if (score > 21) score -= 10;
      } else {
        score += card.value;
      }
      return score;
    }, 0)
}

class Board extends Component {
  componentDidUpdate() {
    const winner = this.checkWinner();
    // Someone won the game
    if (winner && !this.props.game.winner) {
      if (winner === 'PLAYER') {
        setTimeout(this.props.playerWins, 1000);
      } else if (winner === 'DEALER') {
        setTimeout(this.props.dealerWins, 1000);
      } else {
        setTimeout(this.props.draw, 1000);
      }
    } else if (!this.props.game.playerTurn && !this.props.game.winner) {
      setTimeout(this.props.hit, 1000);
    }
  }

  // Returns a string representing the winner (or draw) or null if there is no winner
  checkWinner() {
    let result = null;
    const playerScore = calculateScore(this.props.game.playerHand);
    const dealerScore = calculateScore(this.props.game.dealerHand);

    if (playerScore === 21 && dealerScore === 21) result = 'DRAW';
    else if (playerScore === 21 || dealerScore > 21) result = 'PLAYER';
    else if (dealerScore === 21 || playerScore > 21) result = 'DEALER';
    else if (dealerScore === playerScore && !this.props.game.playerTurn) result = 'DRAW';
    else if (dealerScore > playerScore && !this.props.game.playerTurn) result = 'DEALER';

    return result;
  }
  
  // Returns a number representing the blackjack score of the player or dealer
  calculateScore(player) {
    const hand = (player) ? this.props.game.playerHand : this.props.game.dealerHand;
    return hand.reduce((score, card) => {
      if (typeof card.value !== 'number') {
        score += card.value[0];
        if (score > 21) score -= 10;
      } else {
        score += card.value;
      }
      return score;
    }, 0)
  }

  render() {
    const gameState = this.props.game;
    console.log(gameState.winner);
    // Render view in the return
    let view;

    // Game hasn't started
    if (gameState.playerHand.length === 0) {
      view = (
        <StartBox>
          <Button onClick={this.props.startGame}>Start Game</Button>
        </StartBox>
      );
    } else if (gameState.winner) {
      let banner;
      if (gameState.winner === 'DRAW') banner = gameState.winner;
      else banner = `${gameState.winner} WINS!`;
      view = (
        <GameBox>
          <CardRow player dealer score={this.calculateScore(false)} hand={this.props.game.dealerHand}></CardRow>
          <CardRow player score={this.calculateScore(true)}hand={this.props.game.playerHand}></CardRow>
          <ControlBox>
            <ScoreHeader>{banner}</ScoreHeader>
            <ButtonBox>
              <Button onClick={this.props.reset}>Play Again</Button>
            </ButtonBox>
          </ControlBox>
        </GameBox>
      )
    } else {
      view = (
        <GameBox>
          <CardRow player={!this.props.game.playerTurn} dealer={!this.props.game.playerTurn} score={this.calculateScore(false)} hand={this.props.game.dealerHand}></CardRow>
          <CardRow player score={this.calculateScore(true)} hand={this.props.game.playerHand}></CardRow>
          <ControlBox>
            <ButtonBox>
              <Button onClick={this.props.hit}>Hit</Button>
              <Button onClick={this.props.stand}>Stand</Button>
            </ButtonBox>
          </ControlBox>
        </GameBox>
      )
    }
    return view;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);