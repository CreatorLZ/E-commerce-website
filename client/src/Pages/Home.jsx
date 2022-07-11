import React from 'react'
import Categories from '../Components/Categories'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Newsletter from '../Components/Newsletter'
import Products from '../Components/Products'
import Slider from '../Components/Slider'
import Dropdown from '../Components/Dropdown'
import styled from 'styled-components'


const Container = styled.div`
background-color: whitesmoke;
`

const Home = () => {
  return (
    <div>
      <Container>
     <Navbar />
     <Dropdown />
     <Slider/>
     <Categories />
     <Products />
     <Newsletter />
     <Footer />
      </Container>
    </div>
  )
}

export default Home
