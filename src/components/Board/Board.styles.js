import styled, { css } from 'styled-components';

export const StartBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 4px solid black;
  border-radius: 4px;

  height: 20%;
  width: 40%;
  background: #F5F5DC;
`;

export const Button = styled.button`
  border: 4px solid red;
  border-radius: 8px;
  outline: none;
  font-size 2vw;
  color: white;
  height: 40%;
  width: 40%;
  background: red;

  &:hover {
    border: 4px solid red;
    background: white;
    color: red;
  } 
`;

export const GameBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: space-between;

  border: 4px solid black;
  border-radius: 4px;

  height: 80%;
  width: 60%;
  background: #F5F5DC;
`;

export const ControlBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: space-around;
  align-items: center;
  height: 25%;
  width: 100%;
`;

export const ScoreHeader = styled.h1`
  font-size: 2em;
  font-family: 'Arial';
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 60%;
`;