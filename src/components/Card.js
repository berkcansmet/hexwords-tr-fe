import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
  background-color: ${(props) => props.color};
  border-radius: 4px;
  padding: .5rem;
  margin: .5rem;
`;

const Description = styled.p`
  color: #000;
  font-size:20px;
  text-align: center;   
  font-style: bold;
`;

const Card = ({ color, hex, words }) => {
  return (
    <Wrapper color={color}>
      <Description>{hex}</Description>
      <Description>{words}</Description>
    </Wrapper>
  );
};

export default Card;
