import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Navbar from "../Components/Navbar"
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'
import { Add, Remove } from '@material-ui/icons'
import { useLocation } from 'react-router-dom'
import axios from 'axios';



const Container = styled.div`
background-color: #001747;
`
const Wrapper = styled.div`
padding: 50px;
display: flex;
background-color: white;
`;

const ImgContainer = styled.div`
flex: 1;
`;
const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
`;
const InfoContainer = styled.div`
flex: 1;
padding: 0px 50px;
`;
const Title = styled.h1`
font-weight: 300;
`;
const Description = styled.p`
margin: 20px 0px;
`;

const Price = styled.span`
font-weight: 100;
font-size: 40px;
`
const FilterContainer = styled.div`
width: 50%;
margin: 30px 0px;
display: flex;
justify-content: space-between;
`
const Filter = styled.div`
display: flex;
align-items: center;
`
const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;
`
const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=> props.color};
margin: 0px 5px;
cursor: pointer;
`
const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;
`
const FilterSizeOption = styled.option`

`

const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;

`
const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
`
const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`
const Button = styled.button`
padding: 15px;
border: 2px solid teal;
background-color: white;
cursor: pointer;
font-weight: 500;

&:hover {
    background-color: #909e9e85;
}
`

const Product = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];

    const [product, setProduct] = useState({});

    useEffect(()=>{
        const getProduct = async()=> {
            try{
                const res = await axios.get("http://localhost:5000/api/products/find/"+ id);
                setProduct(res.data);
            }catch{} 
              
        };
        getProduct()
    }, [id]);
    return (
        <Container>
          <Navbar />
          <Wrapper>
            <ImgContainer>
              <Image src={product.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{product.title}</Title>
              <Description>{product.desc}</Description>
              <Price>&#8358;{product.price}</Price>
              <FilterContainer>
              <Filter>
                    <FilterTitle>Color</FilterTitle>
                    {product.color.map((c) => (
                  <FilterColor color={c} key={c} />
              ))}
                </Filter>
                <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                        <FilterSizeOption>XS</FilterSizeOption>
                        <FilterSizeOption>S</FilterSizeOption>
                        <FilterSizeOption>L</FilterSizeOption>
                        <FilterSizeOption>XL</FilterSizeOption>
                        <FilterSizeOption>M</FilterSizeOption>
                        
                    </FilterSize>
                </Filter>
            </FilterContainer>
              <AddContainer>
                <AmountContainer>
                  <Remove  />
                  <Amount>{1}</Amount>
                  <Add  />
                </AmountContainer>
                <Button>ADD TO CART</Button>
              </AddContainer>
            </InfoContainer>
          </Wrapper>
          <Newsletter />
          <Footer />
        </Container>
      );
    };

    export default Product;