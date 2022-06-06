import React from 'react';
import styled from 'styled-components';
import { HowToRegOutlined, PersonOutline, ShoppingCartOutlined, StoreRounded } from "@material-ui/icons";
import { Badge } from '@material-ui/core';
import {mobile} from "../responsive"


const Container = styled.div`
height: 60px;
${mobile({ backgroundColor: "red" })};
margin-bottom: 10px;
`

const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
align-items: center;

`

const Left = styled.div`
flex: 1;
justify-content: flex-end;
margin: 10px;
`;

const Language = styled.span`
font-size: 14px; 
cursor: pointer;

`

const SearchContainer = styled.div`
border: none;
display: flex;
align-items: center;
margin-left: 25px;
padding: 2px;
justify-content: space-between;
width: 100%;
border-radius: 5px;
`


const Input  = styled.input`
border: 1.5px solid lightgray;
flex:9;
padding: 10px;
width: 80vh;
border-radius: 5px;
`


const Center = styled.div`

flex: 1;
display: flex;
align-items: center;

`


const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;`

;

const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
font-weight: 500;

`


const Logo = styled.h1`
font-weight: bold ;
font-size: 280%;
`

const Button = styled.button`
color: white;
font-size: 18px;
background-color: teal;
border: none;
cursor: pointer;
flex: 1;
padding: 10px;
margin-left: 3px;
border-radius: 5px;

`


const Navbar = () => {
  return (
    <Container>
     <Wrapper>
     <Left>
     <Logo>Across <StoreRounded /> </Logo>
       </Left>
     <Center><Language>EN</Language>
       <SearchContainer>
       <Input placeholder='Search products, brands, and categories ' />
       </SearchContainer>
       <Button>Search</Button>
       </Center>
       
     <Right>
       <MenuItem> <HowToRegOutlined style={{fontSize: "large"}} /> REGISTER</MenuItem>
       <MenuItem> <PersonOutline style={{fontSize: "large"}} /> SIGN IN</MenuItem>
       <MenuItem>
       <Badge badgeContent={4} color="primary">
  <ShoppingCartOutlined />
</Badge>
       </MenuItem>
     </Right>
     </Wrapper>
    </Container>
  )
}

export default Navbar
