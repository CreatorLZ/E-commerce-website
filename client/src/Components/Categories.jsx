import React from 'react';
import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import Categoryitem from "./Categoryitem";



const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
background-color: white;
width: 90%;
align-items: center;
margin: 10px 10px;
padding: 30px;
margin-left: 35px;
position: relative;
${mobile({ padding: "0px", flexDirection: "column", flexWrap: "wrap",})};
`
const Pop = styled.div`
position: absolute;
background-color: Teal;
top: 0;
left: 0;
margin-left: 35px;
margin-top: 5px;
color: white;
font-size: 24px;
font-weight: 400;
display: flex;
width: 1144px;
height: 30px;
${mobile({ display: "none",})};

`;

const Categories = () => {
  return (
    <Container>
      <Pop>SHOP BY CATEGORY</Pop>
      {categories.map((item) => (
        <Categoryitem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
