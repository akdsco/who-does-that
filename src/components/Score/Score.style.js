import styled from "styled-components";

export const ScoreContainer = styled.div`
  background: white;
  width: 80px;
  height: 72px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ScoreLabel = styled.p`
  margin: 0;
  margin-bottom: 4px;
  color: #2a45c2;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  font-family: "Barlow Semi Condensed", sans-serif;
  font-size: 10px;
  font-weight: 600;
`;

export const ScoreNumber = styled.p`
  margin: 0;
  color: #565468;
  font-family: "Barlow Semi Condensed", sans-serif;
  line-height: 36px;
  font-size: 40px;
  font-weight: 700;
`;
