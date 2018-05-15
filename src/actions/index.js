export const startGame = () => ({ type: 'START_GAME' });

export const reset = () => ({ type: 'RESET' });

export const hit = (player) => ({ type: 'HIT', player });

export const stand = () => ({ type: 'STAND' });

export const playerWins = () => ({ type: 'PLAYER_WINS' });

export const dealerWins = () => ({ type: 'DEALER_WINS' });

export const draw = () => ({ type: 'DRAW' });