import React from 'react'
import styled from "styled-components";

const Container = styled.div`
background-color: #213766;
height: 30px;
`;

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
color: white;
align-items: center;
`;


const Left = styled.div`
flex: 1;
justify-content: flex-end;
margin: 10px;
`;

const Navigation = styled.span`

`;

const Center = styled.div`
flex: 1;
display: flex;
align-items: center;
margin-top: 5px;
justify-content: center;
`;


const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
`;



const Dropdown = () => {
  return (
    <Container>
        <Wrapper>
      <Left>
          <Navigation>LEFT
          </Navigation>
          </Left>
      <Center>Super Deal! Free Shipping On Orders Over N5000</Center>
      <Right>Right</Right>
        </Wrapper>
    </Container>
  )
}

export default Dropdown
