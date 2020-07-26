import styled from "styled-components";

export const Button = styled.button`
  all: unset;
  height: 40px;
  width: 128px;
  background: transparent;
  color: white;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  border: 1px solid white;
  text-transform: uppercase;
  border-radius: 8px;
  transition: 0.8s;

  &:hover,
  &:focus {
    cursor: pointer;
    color: #131537;
    background: white;
  }
`;
