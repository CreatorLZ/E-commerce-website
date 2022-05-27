import React from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar'
import Announcements from '../Components/Announcements'
import Footer from '../Components/Footer'
import { Add, Remove } from '@material-ui/icons'

const Container = styled.div`

`;

const Wrapper = styled.div`
 padding: 20px;
`;

const Title = styled.h1`
font-weight: 200;
text-align: center;
`;

const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${props => props.type === "filled" && "none"};
background-color: ${props => props.type === "filled" ? "black" : "transparent"};
color: ${props => props.type === "filled" && "white"};

`;

const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`;

const TopTexts = styled.div ``;

const TopText = styled.span `
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;
`;

const Bottom = styled.div`
display: flex;
justify-content: space-between;
`;


const Info = styled.div`
flex: 3;
`;

const Product = styled.div`
display: flex;
justify-content: space-between;
`;

const Hr = styled.hr`
background-color: #eee;
border: none;
height: 1px;
`;

const ProductDetail = styled.div`
flex: 2;
display: flex;
`;

const Image = styled.img`
width: 200px;
background-size: cover;
`;
const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`;
const ProductName = styled.span`
margin-bottom: 20px;
`;
const ProductId = styled.span`
margin-bottom: 20px;
`;

const ProductColor= styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props => props.color};
margin-bottom: 20px;
`;
const ProductSize = styled.span`
margin-bottom: 20px;
`;

const PriceDetail = styled.span`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`;

const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;
`;

const ProductPrice = styled.div`
font-size: 30px;
font-weight: 200;
`;

const Summary = styled.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 50vh;
`;

const SummaryTitle = styled.h1`
font-weight: 200;

`;

const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props => props.type === "total" && "500"};
font-size: ${props => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span`

`;
const SummaryItemPrice = styled.span`

`;
const Button = styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight: 600;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Wrapper>
          <Title>YOUR BAG</Title>
          <Top>

            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
              <TopText>Shopping bags</TopText>
              <TopText>Your Wishlist</TopText>
            </TopTexts>
            <TopButton type='filled'>CHECKOUT NOW</TopButton>
          </Top>
          <Bottom>
            <Info>
              <Product>
                <ProductDetail>
                  <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFfxUhdFDO_8bcfMDDGC-0bwpyof9HAh0rWg&usqp=CAU' />
                  <Details>
                    <ProductName><b>Product:</b> SWORD OF TRUTH</ProductName>
                    <ProductId><b>ID:</b> 456377778</ProductId>
                    <ProductColor color='black' />
                    <ProductSize><b>Size:</b> 6ft</ProductSize>

                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>2</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>N25,000</ProductPrice>
                </PriceDetail>
              </Product>

              <Hr />

              <Product>
                <ProductDetail>
                  <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFfxUhdFDO_8bcfMDDGC-0bwpyof9HAh0rWg&usqp=CAU' />
                  <Details>
                    <ProductName><b>Product:</b> SWORD OF TRUTH</ProductName>
                    <ProductId><b>ID:</b> 456377778</ProductId>
                    <ProductColor color='black' />
                    <ProductSize><b>Size:</b> 6ft</ProductSize>

                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>2</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>N25,000</ProductPrice>
                </PriceDetail>
              </Product>

            </Info>
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>SubTotal</SummaryItemText>
                <SummaryItemPrice>N25,000</SummaryItemPrice>
              </SummaryItem>

              <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice>N2,500</SummaryItemPrice>
              </SummaryItem>

              <SummaryItem>
                <SummaryItemText>Shipping Discount</SummaryItemText>
                <SummaryItemPrice>-N2,500</SummaryItemPrice>
              </SummaryItem>

              <SummaryItem type = 'total'>
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>N25,000</SummaryItemPrice>
              </SummaryItem>
              <Button>CHECKOUT NOW</Button>

            </Summary>
          </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart
