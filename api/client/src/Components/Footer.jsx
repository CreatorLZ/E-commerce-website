import { Facebook, Instagram, MailOutline, MyLocation, Phone, StoreRounded, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
display: flex;
color: white;
background-color: #001747;
${mobile({  flexDirection: "column"})};

`
const Left = styled.div`
flex:1;
display: flex;
flex-direction: column;
padding: 20px;
${mobile({})};
`

const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color:#${props => props.color} ;
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`

const Desc = styled.p`
margin: 20px 0px;
`

const SocialContainer = styled.div `
display: flex;
`

const Logo = styled.h1`
`

const Center = styled.div`
flex:1;
padding: 20px;
${mobile({ display: "none"})};
`
const Title = styled.h3`
margin-bottom: 20px;

`
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`

const Right = styled.div`
flex:1;
padding: 20px;
${mobile({})};
`

const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;

`

const Footer = () => {
  return (
    <Container>
      <Left>
      <Logo>Across <StoreRounded /> </Logo>
        <Desc>We are dedicated to providing you the best services and products wherever and whenever you need</Desc>
        <SocialContainer>
            <SocialIcon  color='3B5999'>
                <Facebook />
            </SocialIcon>
            <SocialIcon color='E4405F'>
                <Instagram />
            </SocialIcon>
            <SocialIcon color='55ACEE'>
                <Twitter />
            </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
          <Title>Useful links</Title>
          <List>
              <ListItem>Home</ListItem>
              <ListItem>Cart</ListItem>
              <ListItem>Men's Fashion</ListItem>
              <ListItem>Women's Fashion</ListItem>
              <ListItem>Accesories</ListItem>
              <ListItem>My Account</ListItem>
              <ListItem>Order Tracking</ListItem>
              <ListItem>WishList</ListItem>
              <ListItem>Wishlist</ListItem>
              <ListItem>Terms and Conditions</ListItem>
          </List>
      </Center>
      <Right>
          <Title> Contact</Title>
          <ContactItem><MyLocation style={{marginRight:"10px"}}/>Edo state Benin city</ContactItem>
          <ContactItem><Phone style={{marginRight:"10px"}}/> 07082388238</ContactItem>
          <ContactItem><MailOutline style={{marginRight:"10px"}}/>isaacanyim3@gmail.com</ContactItem>
      </Right>
    </Container>
  )
}

export default Footer
