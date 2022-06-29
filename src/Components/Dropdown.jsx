import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { CloseRounded,HomeRounded, ArrowDropDownOutlined, ArrowUpDownOutlined, ShoppingCart, Reorder, CloseOutlined  } from "@material-ui/icons";
import { useState } from 'react';
import {SidebarData, sidebarData} from './SidebarData'
import SubMenu from './SubMenu';


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
`;


const Left = styled.div`
flex: 1;
justify-content: flex-end;
margin: 10px;
`;

const Navigation = styled(Link)`
margin-left: 1rem;
color: white;
font-size: 2rem;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
`;

const SidebarNav = styled.nav`
background: #001747;
width: 250px;
height: 100vh;
display: flex;
justify-content: center;
position: fixed;
top: 0;
left: ${({sidebar}) => (sidebar ? '0' : '-100%')};
transition: 350ms;
z-index: 10;
`
const SidebarWrap= styled.div`
width: 100%;
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
          </Left>
        </Wrapper>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
          <Navigation to='#'>
            <CloseOutlined onClick={showSidebar}/> 
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
