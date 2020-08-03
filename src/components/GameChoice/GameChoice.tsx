import React from "react";
import { ImageHolder, Circle } from "./GameChoice.style";

interface Props {
  shadeColor: string;
  color: string;
  icon: string;
}

export const GameChoice: React.FC<Props> = ({ shadeColor, color, icon }) => {
  return (
    <Circle color={color} shadeColor={shadeColor}>
      <ImageHolder src={icon} alt="fist" />
    </Circle>
  );
};
