import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startGame } from '../../actions';

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
  return { startGame: () => dispatch(startGame()) };
}

class Board extends Component {

  checkWinner() {

  }

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

  componentDidMount() {

  }

  render() {
    const gameState = this.props.game;

    // Render view in the return
    let view;

    // Game hasn't started
    if (gameState.playerHand.length === 0) {
      view = (
        <StartBox>
          <Button onClick={this.props.startGame}>Start Game</Button>
        </StartBox>
      );
    } else if (!gameState.winner) {
      view = (
        <GameBox>
          <CardRow player={false} hand={this.props.game.computerHand}></CardRow>
          <CardRow player hand={this.props.game.playerHand}></CardRow>
          <ControlBox>
            <ScoreHeader>Score: {this.calculateScore(true)}</ScoreHeader>
            <ButtonBox>
              <Button>Hit</Button>
              <Button>Stand</Button>
            </ButtonBox>
          </ControlBox>
        </GameBox>
      )
    }
    return view;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);