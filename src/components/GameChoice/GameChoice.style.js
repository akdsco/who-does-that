import styled from "styled-components";

export const Circle = styled.div`
  height: 76px;
  width: 76px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 10px solid ${(props) => props.color};
  box-shadow: inset 0 4px rgb(186, 191, 212),
    0 4px ${(props) => props.shadeColor};
`;

export const ImageHolder = styled.img`
  height: 50%;
`;
