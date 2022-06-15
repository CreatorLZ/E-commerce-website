import React from 'react'
import styled from "styled-components";
import { secondCategories } from "../data";
import { mobile } from "../responsive";
import Categoryitem from "./Categoryitem";



const Container = styled.div`

  display: flex;
  padding: 5px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })};
  background-color: white;
  margin-top: none;


`;

const SecondCategories = () => {
  return (
    <Container>
      {secondCategories.map((item) => (
        <Categoryitem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default SecondCategories;
