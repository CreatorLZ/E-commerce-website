import { Height } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { mobile } from '../responsive'



const Container = styled.div`
flex:1;
margin: 5px;
min-width: 280px;
height: 350px;
display: flex;
align-items: center;
justify-content: center;
background-color:whitesmoke;
position: relative;

&:hover {
  transform: scale(1.03);
}
${mobile({ height: "10px", width:"5px", flexWrap: "wrap" , })};
`

const Image = styled.img`
height: 270px;
width: 250px;
object-fit: cover;
${mobile({  width:"200px",height: "150px"  })};
`

const Info = styled.p`
position: absolute;
top: 0;
left: 0;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
${mobile({ })};
`
const Title = styled.p`
color: black;
margin-bottom: 20px;
align-items: center;
justify-content: center;
text-decoration: none;

`
const Button = styled.button`
border: none;
padding: 5px;
background-color:rgba(255, 255, 255, 0.5);
color: gray;
cursor: pointer;
font-weight: 600;
${mobile({  })};


transition: all 0.5s ease;
&:hover {
  background-color: white;
  transform: scale(1.3);
}`

const Categoryitem = ({item}) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
      <Title>{item.title}</Title>
      <Image src = {item.img}/>
      <Info>
    <Button>SHOP NOW</Button>
      </Info>
      </Link>
    </Container>
  )
}

export default Categoryitem
