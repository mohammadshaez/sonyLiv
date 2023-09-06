import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import TodaysHotPick from '../components/TodaysHotPick'
import TvShows from '../components/TvShows'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
        <Navbar />
        <Slider />
        <TodaysHotPick />
        <TvShows />
        <Footer />
    </>
  )
}

export default Home