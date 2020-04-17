import styled from "styled-components";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.width? props.width : '300px')};
  height: 50px;
  margin: ${(props) => (props.margin? props.margin : '')};
  margin-bottom: ${(props) => (props.marginBottom? props.marginBottom : '')};
  background: ${(props) => (props.color ? props.color : "hsl(154, 59%, 51%)")};
  color: ${(props) => (props.font ? props.font : "#fff")};
  font-size: 16px;
  font-weight: 400;
  border-radius: 8px;
  text-transform: uppercase;
  transition: opacity 300ms;

  &:hover{
      opacity: 0.8;
  }
`;

export default Button;
