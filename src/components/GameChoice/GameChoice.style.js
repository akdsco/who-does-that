import styled from "styled-components";

export const StyledGameChoice = styled.div``;

export const BaseCircle = styled.div`
  width: 76px;
  height: 76px;
  border: 10px solid;
  position: absolute;
  border-color: ${(props) => props.color};
  border-radius: 50%;
`;

export const OvalOuter = styled.div`
  height: 73px;
  width: 76px;
  position: absolute;
  top: 5px;
  left: 7px;
  border-radius: 50%;
  border: 11px solid ${(props) => props.color};
  z-index: 1;
`;

export const OvalInner = styled.div`
  height: 68px;
  width: 76px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 11px;
  left: 8px;
  border-radius: 50%;
  border: 10px solid #babfd4;
`;

export const ImageHolder = styled.img`
  height: 70%;
  // width: 31px;
  position: relative;
  font-size: 12px;
  // top: 16px;
  // left: 20px;
`;
