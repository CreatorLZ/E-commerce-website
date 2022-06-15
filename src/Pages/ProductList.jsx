
import React, { useState } from 'react'
import styled from 'styled-components'
import Navbar from "../Components/Navbar"
import Products from "../Components/Products"
import Newsletter from "../Components/Newsletter"
import Footer from "../Components/Footer"
import { useLocation } from 'react-router-dom'


const Container = styled.div`
background-color: #001747;
`
const Title = styled.h1`
margin-left: 30px;
align-items: center;

`
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
margin: 20px;
background-color:  rgba(241, 235, 235, 0.993);
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
const Wrappper = styled.div`
background-color: white;
`

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({})
  const [sort, setSort] = useState("Newest")



  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters ({
      ...filters,
      [e.target.name]: value,
    });
  };

  
  return (
    <Container>
      <Wrappper>
      <FilterContainer>
    <Filter><FilterText>Filter Products: </FilterText>
    <Select name='color' onChange={handleFilters}>
      <Option disabled >
        Color
      </Option>
      <Option>white</Option>
      <Option>black</Option>
      <Option>Red</Option>
      <Option>yellow</Option>
      <Option>green</Option>
      <Option>gold</Option>
      <Option>brown</Option>
      <Option>blue</Option>
    </Select>

    <Select name='size' onChange={handleFilters}>
    <Option disabled >
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
      <Select onChange={e=>setSort(e.target.value)}>
      <Option value="Newest" >Newest </Option>
      <Option value="asc" >Price  (asc)</Option>
      <Option value="desc" >Price (desc)</Option> 
    </Select>
    </Filter>
      </FilterContainer>
      <Title>{cat}</Title>
      <Products cat={cat} filters={filters} sort={sort}/>
      </Wrappper>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default ProductList
