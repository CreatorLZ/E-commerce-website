import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'



const Container = styled.div`
flex:1;
margin: 10px;
margin-bottom: 0px;
min-width: 280px;
height: 350px;
display: flex;
align-items: center;
justify-content: center;
background-color: rgba(241, 235, 235, 0.993);
-webkit-border-radius: 15px;
border-radius: 15px;
position: relative;
margin-bottom: 60px;
`
const Image = styled.img`
width: 410px;
  height: 320px;
  object-fit: cover;
`
const Info = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`
const Title = styled.h1`
color: black;
margin-bottom: 20px;
`
const Button = styled.button`
border: none;
padding: 5px;
background-color:rgba(255, 255, 255, 0.5);
color: gray;
cursor: pointer;
font-weight: 600;

transition: all 0.5s ease;
&:hover {
  background-color: gold;
  transform: scale(1.1);
}`

const Categoryitem = ({item}) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
      <Image src = {item.img}/>
      <Info>
    <Title>{item.title}</Title>
    <Button>SHOP NOW</Button>
      </Info>
      </Link>
    </Container>
  )
}

export default Categoryitem
