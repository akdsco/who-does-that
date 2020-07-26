import React from "react";
import { GameChoice } from "./GameChoice";
import scissors from "../../assets/icon/scissors.svg";
import rock from "../../assets/icon/rock.svg";
import paper from "../../assets/icon/shape.svg";
import lizard from "../../assets/icon/lizard.svg";
import spock from "../../assets/icon/spock.svg";

export default { title: "GameChoice" };

const scissorsProps = {
  shadeColor: "#C76C1B",
  color: "#EB9F0E",
  icon: scissors,
};

const rockProps = {
  shadeColor: "#9D1634",
  color: "#DB2E4D",
  icon: rock,
};

const paperProps = {
  shadeColor: "#2A45C2",
  color: "#4664F4",
  icon: paper,
};

const lizardProps = {
  shadeColor: "#5F37A8",
  color: "#834EE3",
  icon: lizard,
};

const spockProps = {
  shadeColor: "#2D8DAB",
  color: "#3FB7CD",
  icon: spock,
};

export const scissorsChoice = () => <GameChoice {...scissorsProps} />;
export const rockChoice = () => <GameChoice {...rockProps} />;
export const paperChoice = () => <GameChoice {...paperProps} />;
export const lizardChoice = () => <GameChoice {...lizardProps} />;
export const spockChoice = () => <GameChoice {...spockProps} />;
