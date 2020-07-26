import React from "react";
import { ScoreBoardContainer, Image } from "./ScoreBoard.style";
import logo from "../../assets/images/logo.svg";
import { Score } from "../../components/Score/Score";

interface Props {}

export const ScoreBoard: React.FC<Props> = () => {
  return (
    <ScoreBoardContainer>
      <Image src={logo} alt="logo" />
      <Score score={3} />
    </ScoreBoardContainer>
  );
};
