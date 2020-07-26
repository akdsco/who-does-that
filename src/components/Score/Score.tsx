import React from "react";
import {
  ScoreContainer,
  ScoreLabel,
  ScoreNumber,
  DataContainer,
} from "./Score.style";

interface Props {
  score: number;
}

export const Score: React.FC<Props> = ({ score }) => {
  return (
    <ScoreContainer>
      <DataContainer>
        <ScoreLabel>Score</ScoreLabel>
        <ScoreNumber>{score}</ScoreNumber>
      </DataContainer>
    </ScoreContainer>
  );
};
