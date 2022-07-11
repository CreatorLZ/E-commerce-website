import React from 'react';
import styled from 'styled-components';
import { FaceRounded, FlagOutlined, HowToRegOutlined, LanguageOutlined, PersonOutline, RowingTwoTone, ShoppingCartOutlined, StoreRounded } from "@material-ui/icons";
import { Badge } from '@material-ui/core';
import {mobile} from "../responsive"
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Container = styled.div`
height: 60px;
background-color: #001747;
margin-bottom: 0px;
${mobile({ height: "50px" , marginBottom: "0px", })};
position: sticky;
top: 0;
z-index: 50;
`

const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
align-items: center;
${mobile({ padding: "0px 0px",})};
`

const Left = styled.div`
flex: 1;
justify-content: flex-end;
margin-left: 10px;
text-decoration: none;
${mobile({ display: "flex", marginLeft: "0px", justifyContent: "center"})};
`;

const Language = styled.span`
font-size: 14px; 
cursor: pointer;
color: white;
font-weight: 600;
margin-right: 10px;
margin-left: 0px;
${mobile({ display: "none" })};

`

const SearchContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
${mobile({postion: "absolute", top:"0",display: 'none' })};
`


const Input  = styled.input`
border: 1.5px solid lightgray;
padding: 10px;
width: 80vh;
border-radius: 5px;
${mobile({ width: "150px", height: "10px",display: "none" })};
`


const Center = styled.div`

flex: 1;
display: flex;
align-items: center;
justify-content: center;
${mobile({ marginBottom: "5px",  marginLeft: "0px", display: "none" })};
`


const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
color: white;
${mobile({flex: "6", justifyContent: "space-between",  })};
`


const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
font-weight: 550;
color: white;
&:hover {
  transform: scale(1.1);
}
${mobile({ fontSize: "9px", marginLeft: "10px",  marginRight: "5px", marginTop: "5px" })};
`


const Logo = styled(Link)`
font-weight: bold ;
font-size: 280%;
color: white;
margin-right: 100px;
text-decoration: none;
${mobile({ fontSize: "24px", display: "flex" })};
`

const Button = styled.button`
color: white;
font-size: 18px;
background-color: #DEBA50;
border: none;
cursor: pointer;
flex: 1;
padding: 10px;
margin-left: 0px;
border-radius: 5px;
${mobile({padding: "2px", display: "none"})};
`
const Register = styled(Link)`
text-decoration: none;
color: white;
`;




const Navbar = () => {
 const quantity = useSelector(state=>state.cart.quantity)

 

  return (
    <Container>
     <Wrapper>
    
     <Left >
     <Logo Link to = "/">Across <StoreRounded style={{margin: "none"}} /> </Logo>
       </Left>
       
     <Center>
       <SearchContainer>
       <Language>EN</Language>
       <Input placeholder='Search products, brands, and categories ' />
       </SearchContainer>
       <Button>Search</Button>
       </Center>
       <Right>

     <Register Link to = "/register">
       
       <MenuItem > REGISTER</MenuItem>
       
      </Register>

       <Register Link to = "/login">
        
       <MenuItem  > SIGN IN</MenuItem>
       
       </Register>
     
       <Link to = "/cart">
       <MenuItem>
       <Badge badgeContent={quantity} color="primary">
       
  <ShoppingCartOutlined style={{fontSize: "50px"}}  />
      
</Badge>
       </MenuItem>
        </Link>
     </Right>
     </Wrapper>
    </Container>
  )
}

export default Navbar
