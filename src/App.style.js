import styled from "styled-components";
import { colors } from "./config/projectConfig";
const { gradientOne, gradientTwo } = colors.background;

export const AppContainer = styled.div`
  background: ${gradientOne};
  background: radial-gradient(
    circle at 50% 0%,
    ${gradientOne} 5%,
    ${gradientTwo} 90%
  );
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GameContainer = styled.div`
  min-height: 300px;
  height: calc(100vh - 20%);
  max-height: 750px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
