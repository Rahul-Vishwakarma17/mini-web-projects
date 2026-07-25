import React from 'react'
import HeroSection from './components/HeroSection'
import { useGlobalContext } from './context';
import { useEffect } from 'react';
import Services from "./Services"
import Contact from "./Contact"


const Home = () => {


  // const data = {
  //   name:"Rahul Pagal",
  //   image:"./images/hero.png"
  // }


const {updateHomePage} = useGlobalContext();

useEffect(() => updateHomePage(), [])
 

  return (
  <>
  <HeroSection />
  <Services/>
  <Contact />

  </>
  )
}

export default Home
