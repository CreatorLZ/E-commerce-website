import React from 'react'
import Categories from '../Components/Categories'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Newsletter from '../Components/Newsletter'
import Products from '../Components/Products'
import Slider from '../Components/Slider'
import Dropdown from '../Components/Dropdown'
import SecondCategories from '../Components/SecondCategories'
import Trends from '../Components/Trends'
import styled from 'styled-components'


const Container = styled.div`
background-color: #001747;
`

const Home = () => {
  return (
    <div>
      <Container>
     <Navbar />
     <Dropdown />
     <Slider />
     <Categories />
     <SecondCategories />
     <Trends />
     <Products />
     <Newsletter />
     <Footer />
      </Container>
    </div>
  )
}

export default Home
