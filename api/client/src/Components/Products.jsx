import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {popProducts} from "../data";
import { mobile } from '../responsive';
import Product from './Product';

const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: center;
background-color: white;
width: 90%;
align-items: center;
margin: 10px 10px;
margin-left: 35px;
position: relative;
${mobile({  })};
`

const Pop = styled.div`
position: absolute;
background-color:  #DEBA50;
top: 0;
left: 0;
margin-bottom: 50px;
margin-left: 25px;
color: white;
font-size: 24px;
font-weight: 400;
display: flex;
width: 1162px;
height: 23px;
${mobile({display: "none"})};

`;

const Products = ({cat,filters,sort}) => {
 
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(()=>{
    const getProducts = async ()=>{
      try{
        const res = await axios.get(cat ? `http://localhost:5000/api/products?category=${cat}` : "http://localhost:5000/api/products");
       setProducts(res.data)
      }catch(err){
        
      }
    };
    getProducts()
  },[cat])

  useEffect(()=> {
    cat && setFilteredProducts(
      products.filter((item)=> Object.entries(filters).every(([key, value]) =>
      item[key].includes(value)
      ))
    )
  },[cat,filters, products])


  useEffect(()=>{
    if(sort === "Newest"){
      setFilteredProducts(prev=> 
        [...prev].sort((a,b)=> a.createdAT - b.createdAT)
        );
    } else if (sort === "asc"){
      setFilteredProducts(prev=> 
        [...prev].sort((a,b)=> a.price - b.price)
        );
    } else {
      setFilteredProducts(prev=> 
        [...prev].sort((a,b)=> b.price - a.price)
        );
    } 
  }, [sort])



  return (
    <Container>
      <Pop>POPULAR PRODUCTS</Pop>
      {cat ? filteredProducts.map(item=> (
        <Product item={item} key={item.id} />  
      )) :  products
          .map(item=> (
        <Product item={item} key={item.id} />  
      ))}
    </Container>
  )
}

export default Products
