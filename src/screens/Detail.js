import React from "react";
import styled from "styled-components";

const Detail = (item) => {
  return (
    <ComponentContainer>
      <TextItem>{"Detail " + item.route.params}</TextItem>
    </ComponentContainer>
  );
};
const TextItem = styled.Text`
  color: white;
  font-family: poppins-bold;
  font-size: 30px;
`;
const ComponentContainer = styled.View`
  background-color: red;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Detail;
