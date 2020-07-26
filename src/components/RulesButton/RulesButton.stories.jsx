import React from "react";
import { RulesButton } from "./RulesButton";

export default {
  title: "Rules Button",
  parameters: {
    backgrounds: [
      {
        name: "who does that bg",
        value: "#1F3757",
        default: true,
      },
    ],
  },
};

const defaultProps = {};

export const defaultButton = () => <RulesButton {...defaultProps} />;
