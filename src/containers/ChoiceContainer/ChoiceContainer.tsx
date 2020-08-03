import React from "react";
import { ChoiceContainerWrapper, ChoiceWrapper } from "./ChoiceContainer.style";
import { GameChoice } from "../../components/GameChoice/GameChoice";
import scissors from "../../assets/icons/icon-scissors.svg";
import rock from "../../assets/icons/icon-rock.svg";
import paper from "../../assets/icons/icon-paper.svg";
import lizard from "../../assets/icons/icon-lizard.svg";
import spock from "../../assets/icons/icon-spock.svg";

interface Props {}

export const ChoiceContainer: React.FC<Props> = () => {
  return (
    <ChoiceContainerWrapper>
      <ChoiceWrapper justify="center">
        <GameChoice shadeColor="#C76C1B" color="#EB9F0E" icon={scissors} />
      </ChoiceWrapper>
      <ChoiceWrapper justify="space-between" margin="-6px">
        <GameChoice shadeColor="#2D8DAB" color="#3FB7CD" icon={spock} />
        <GameChoice shadeColor="#2A45C2" color="#4664F4" icon={paper} />
      </ChoiceWrapper>
      <ChoiceWrapper justify="space-around" margin="24px">
        <GameChoice shadeColor="#5F37A8" color="#834EE3" icon={lizard} />
        <GameChoice shadeColor="#9D1634" color="#DB2E4D" icon={rock} />
      </ChoiceWrapper>
    </ChoiceContainerWrapper>
  );
};
