import React from "react";
import { Score } from "./Score";

export default { title: "Score" };

const props = {
  score: 12,
};

export const defaultScore = () => <Score {...props} />;
