import React from 'react'
import { Send } from "@material-ui/icons"
import styled from 'styled-components'



const Container = styled.div`
height: 60vh;
background-color:rgba(241, 235, 235, 0.993);
display: flex;
align-items: center;
justify-content: center;
flex-direction: column`


const Title = styled.h1`
font-size: 70px;
margin: 20px;
`
const Description = styled.div`
font-size: 24px;
font-weight: 300;
margin-bottom: 20px;
`
const InputContainer = styled.div`
width: 100vh;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
border: 1px solid lightgray;
border-radius: 5px;
`
const Input = styled.input`
border: none;
flex:9;
padding-left: 28px;
`
const Button = styled.button`
flex: 1;
border: none;
background-color: #DEBA50;
color: white;
width: 10vh;
margin-left: 5px;
border-radius: 5px;
cursor: pointer;
`

const Wrapper = styled.div`
display: flex;
`


const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates from your favourite products.</Description>
      <Wrapper>
      <InputContainer>
      <Input placeholder="Input your Email"/>
      </InputContainer>
      <Button>
      <Send />
      </Button>
      </Wrapper>
    </Container>
  )
} 

export default Newsletter
