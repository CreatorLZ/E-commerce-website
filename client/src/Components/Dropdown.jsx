import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { CloseRounded,HomeRounded, ArrowDropDownOutlined, ArrowUpDownOutlined, ShoppingCart, Reorder, CloseOutlined, StoreRounded, SearchOutlined  } from "@material-ui/icons";
import { useState } from 'react';
import {SidebarData, sidebarData} from './SidebarData'
import SubMenu from './SubMenu';
import { mobile } from '../responsive';


const Container = styled.div`
box-sizing: border-box;
margin: 0;
padding: 0;
`;

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
color: white;
align-items: center;
background-color:  #04215e;
height: 40px;
align-items: center;
`;

const SidebarNav = styled.nav`
background: whitesmoke;
width: 400px;
height: 100vh;
display: flex;
justify-content: center;
position: fixed;
top: 0;
left: ${({sidebar}) => (sidebar ? '0' : '-100%')};
transition: 650ms;
z-index: 75;
box-sizing: border-box;
margin: 0;
padding: 0;
${mobile({width: "230px" })};
`

const Left = styled.div`
flex: 1;
justify-content: flex-start;
margin-left: 10px;
text-decoration: none;
display: flex;
align-items: center;
${mobile({  marginLeft: "0px" })};


`;

const Navigation = styled(Link)`
margin-left: 1rem;
color: white;
font-size: 2rem;
height: 40px;

&:hover {
  
  transform: scale(1.1);
}
`;

const SidebarWrap= styled.div`
width: 100%;
position: relative;
overflow-y: scroll;
::-webkit-scrollbar{
  width: 10px;
}
::-webkit-scrollbar-track{
  background-color: white;
}
::-webkit-scrollbar-thumb {
  background-color: #dbd1d1;
}
`
const Center =styled.div`
color: white;
font-size: 15px;
flex: 1;
display: flex;

`
const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
color: white;
display: normal;
${mobile({ display: "none"})};
`;

const RightMobile = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
color: white;
display: none;
${mobile({ })};
`;


const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 0px;
margin-right: 20px;
font-weight: 600;
color: white;
height: 20px;

&:hover {
  
  padding: 5px;
  transition: 150ms;
  transform: scale(1.1);
  align-items: center;
  justify-content: center;
}
`

const Overlay = styled.div`
position: fixed;
top: 0;
left: ${({sidebar}) => (sidebar ? '0' : '-100%')};
width: 100%;
height: 100%;
z-index: 50;
background-color: rgba(0, 0, 0, 0.7);
`;

const Adjust = styled.div `
position: absolute;
top: 0;
right:0;
color: white;
`;

const Greeting = styled.div`

background-color: #04215e;
color: white;
padding: 10px 0px 10px 30px;
font-size: 23px;
font-weight: 500;
position: sticky;
top: 0;
`;
const Input  = styled.input`
border: 1.5px solid lightgray;
padding: 15px;
width: 80vh;
border-radius: 5px;
display:none;
${mobile({ width: "200px", height: "10px",display: "flex" })};
`
const Button = styled.button`
color: white;
font-size: 18px;
background-color: #DEBA50;
border: none;
cursor: pointer;
padding: 10px;
margin-left: 0px;
border-radius: 5px;
display:none;
${mobile({padding: "1px", display: "flex", width: "25px" , })};
`

const Dropdown = () => {
const [sidebar, setSidebar] = useState(false);

const showSidebar = () => setSidebar(!sidebar);

  return (
    <Container>
        <Wrapper>
      <Left>
          <Navigation to='#'>
            <Reorder onClick={showSidebar}/> 
          </Navigation>
          <MenuItem style={{marginLeft: "0px"}}>All</MenuItem>
          </Left>
          <Center>
            <Input placeholder='Search products, brands, and categories ' />
            <Button><SearchOutlined/></Button>
            </Center>
          <Right>
            <MenuItem>Customer Service</MenuItem>
            <MenuItem>Sell</MenuItem>
            <MenuItem>Gift Cards</MenuItem>
          </Right>
          <RightMobile>
            Across<StoreRounded style={{margin: "none"}} />
          </RightMobile>
        </Wrapper>
        <Overlay sidebar={sidebar} onClick={showSidebar}/>
        <SidebarNav sidebar={sidebar}>
          
          <SidebarWrap>
          <Greeting>Hello, Welcome to Across shop</Greeting>
          <Navigation to='#'>
            <Adjust>
            <CloseOutlined style={{fontWeight: "900", fontSize: "40px"}} onClick={showSidebar}/> 
            </Adjust>
          </Navigation>
          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key = {index} />
          })}
          </SidebarWrap>
        </SidebarNav>
    </Container>
  )
}

export default Dropdown
