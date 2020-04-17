import styled from "styled-components";

const Paragraph = styled.p`
  display: flex;
  align-items: start !important;
  justify-content: start !important;
  margin: ${props => (props.margin ? props.margin : '')};
  font-size: ${props => (props.font ? props.font : '12px')};
  font-weight: 400;
  color: ${props => (props.fontColor ? props.fontColor : '#fafaca')};
  padding-top: 2px;
`;

export default Paragraph;
