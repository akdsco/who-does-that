import React from "react";
import { ScoreBoard } from "./ScoreBoard";

export default { title: "Score Board" };

const props = {
  score: 12,
};

export const defaultBoard = () => <ScoreBoard {...props} />;
