import React from 'react'
import HeroSection from './components/HeroSection'
import { useGlobalContext } from './context';
import { useEffect } from 'react';

const About = () => {
  // const data ={
  //   name:"Raghu Vanshi",
  //   image:"./images/about.png",
  // }

  const {updateAboutPage} = useGlobalContext();

useEffect(() =>  updateAboutPage(), [])
  



  return <HeroSection />
 
}

export default About
