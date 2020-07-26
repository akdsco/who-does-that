import React from "react";
import { ScoreContainer, ScoreLabel, ScoreNumber } from "./Score.style";

interface Props {
  score: number;
}

export const Score: React.FC<Props> = ({ score }) => {
  return (
    <ScoreContainer>
      <div>
        <ScoreLabel>Score</ScoreLabel>
        <ScoreNumber>{score}</ScoreNumber>
      </div>
    </ScoreContainer>
  );
};
