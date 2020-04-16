import styled from "styled-components";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 50px;
  margin: ${(props) => (props.margin? props.margin : '1rem')};
  background: ${(props) => (props.color ? props.color : "hsl(154, 59%, 51%)")};
  color: ${(props) => (props.font ? props.font : "#fff")};
  font-size: 16px;
  font-weight: 500;
  border-radius: 8px;
  box-shadow: 1px 1px 4px;
  text-transform: uppercase;
  transition: opacity 300ms;

  &:hover{
      opacity: 0.8;
  }
`;

export default Button;
