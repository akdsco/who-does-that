import React from "react";
import { Score } from "./Score";

export default { title: "Score Board" };

const props = {
  score: 12,
};

export const defaultBoard = () => <Score {...props} />;
