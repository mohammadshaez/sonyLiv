import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import TodaysHotPick from "../components/TodaysHotPick";
import TvShows from "../components/TvShows";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import FilteredShowList from "../components/FilteredShowList";

const Home = () => {
  const { currentUser } = useSelector((state) => state.user);
  // console.log("User From Homepage : ",currentUser)
  const hotPickRef = useRef(null);
  const tvShowsRef = useRef(null);
  const romanceRef = useRef(null);
  const thrillerRef = useRef(null);
  const fantasyRef = useRef(null);
  const comedyRef = useRef(null);
  const actionRef = useRef(null);
  const sciFiRef = useRef(null);
  return (
    <>
      <Navbar
        hotPickRef={hotPickRef}
        tvShowsRef={tvShowsRef}
        romanceRef={romanceRef}
        thrillerRef={thrillerRef}
        fantasyRef={fantasyRef}
        comedyRef={comedyRef}
        actionRef={actionRef}
        sciFiRef={sciFiRef}
      />
      <Slider />
      <TodaysHotPick id="hotPick" ref={hotPickRef} />
      <TvShows />
      <FilteredShowList category={"romance"} />
      <FilteredShowList category={"thriller"} />
      <FilteredShowList category={"fantasy"} />
      <FilteredShowList category={"comedy"} />
      <FilteredShowList category={"action"} />
      <FilteredShowList category={"sci-fi"} />
      <Footer />
    </>
  );
};

export default Home;
