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
`;
