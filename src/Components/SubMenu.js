import React, { useState } from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';



const Container = styled.div`
box-sizing: border-box;
margin: 0;
padding: 0;
`
const SidebarLink = styled(Link) `
display: flex;
color: white;
justify-content: space-between;
align-items: center;
padding: 20px;
list-style: none;
height: 60px;
text-decoration: none;
font-size: 18px;

&:hover {
    background: #252831;
    border-left: 4px solid #DEBA50;
    cursor: pointer;
}
` 
const SidebarLabel = styled.span`
margin-left: 16px;
`;

const DropdownLink = styled(Link) `
background: white;
height: 60px;
padding-left: 3rem;
display: flex;
align-items: center;
text-decoration: none;
color: black;
font-size: 18px;
& :hover {
  background-color: rgb(241, 234, 224);
  cursor: pointer;
  transform: scale(1.1);
}

`

const SubMenu = ({item}) => {
    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => setSubnav(!subnav);
  return (
    <Container>
      <SidebarLink to ={item.path} onClick={item.subNav && showSubnav}>
        <div>
            {item.icon}
            <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        {item.subNav && subnav
         ? item.iconOpened
         : item.subNav
         ?item.iconClosed
         : null}
      </SidebarLink>
      {subnav && item.subNav.map((item, index) => {
        return(
          <DropdownLink to ={item.path} key ={index}>
            {item.icon}
            <SidebarLabel>{item.title}</SidebarLabel>
          </DropdownLink>
        )
      })}
    </Container>
  )
}

export default SubMenu
