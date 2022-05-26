
import React from 'react'
import styled from 'styled-components'
import Announcements from '../Components/Announcements'
import Navbar from "../Components/Navbar"
import Products from "../Components/Products"
import Newsletter from "../Components/Newsletter"
import Footer from "../Components/Footer"

const Container = styled.div`

`
const Title = styled.h1`
margin-left: 20px;
`
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
margin: 20px;
`
const Filter = styled.div`
margin: 20px;
`
const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
`

const Select = styled.select`
padding: 10px;
margin: 10px;
`
  

const Option = styled.option`

`


const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Title>Dresses</Title>
      <FilterContainer>
    <Filter><FilterText>Filter Products: </FilterText>
    <Select>
      <Option disabled selected>
        Color
      </Option>
      <Option>White</Option>
      <Option>Black</Option>
      <Option>Red</Option>
      <Option>Yellow</Option>
      <Option>Green</Option>
      <Option>Black</Option>
      <Option>Gold</Option>
    </Select>

    <Select>
    <Option disabled selected>
        Size
      </Option>
      <Option>XL</Option>
      <Option>L</Option>
      <Option>S</Option>
      <Option>M</Option>
      <Option>XL</Option>
    </Select>
    </Filter>
    
    
    <Filter>
      <FilterText>Sort Products:</FilterText>
      <Select>
      <Option selected>
        Newest
      </Option>
      <Option>Price (asc)</Option>
      <Option>Price (dsc)</Option>
      
      
    </Select>
    </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default ProductList
