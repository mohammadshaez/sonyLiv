import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import TodaysHotPick from '../components/TodaysHotPick'
import TvShows from '../components/TvShows'
import Footer from '../components/Footer'
import { useSelector } from 'react-redux'
import FilteredShowList from '../components/FilteredShowList'

const Home = () => {
  const {currentUser} = useSelector((state) => state.user);
  // console.log("User From Homepage : ",currentUser)
  return (
    <>
        <Navbar />
        <Slider />
        <TodaysHotPick />
        <TvShows />
        <FilteredShowList category={"romance"}/>
        <FilteredShowList category={"thriller"}/>
        <FilteredShowList category={"fantasy"}/>
        <FilteredShowList category={"comedy"}/>
        <FilteredShowList category={"action"}/>
        <FilteredShowList category={"sci-fi"}/>
        <Footer />
    </>
  )
}

export default Home