import React from "react";
// import PropTypes from "prop-types";
import {
  OvalOuter,
  OvalInner,
  StyledGameChoice,
  BaseCircle,
  ImageHolder,
} from "./GameChoice.style";

// GameChoice.propTypes = {};

interface Props {
  shadeColor: string;
  color: string;
  icon: string;
}

export const GameChoice: React.FC<Props> = ({ shadeColor, color, icon }) => {
  return (
    <StyledGameChoice>
      <BaseCircle color={shadeColor} />
      <OvalOuter color={color} />
      <OvalInner>
        <ImageHolder src={icon} alt="fist" />
      </OvalInner>
    </StyledGameChoice>
  );
};
