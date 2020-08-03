import styled from "styled-components";
import bg from "../../assets/images/bg-pentagon.svg";

export const ChoiceContainerWrapper = styled.div`
  width: 311px;
  height: 305px;
  background: url("${bg}");
  background-size: 75%;
  background-position: 50%;
  background-repeat: no-repeat;
`;

export const ChoiceWrapper = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify};
  margin-top: ${(props) => props.margin};
`;
