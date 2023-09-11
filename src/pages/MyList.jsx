import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import TvShows from "../components/TvShows";
import Footer from "../components/Footer";
import styled from "styled-components";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { addToList, resetWatchlist } from "../redux/myListSlice";
const Container = styled.div`

  padding: 70px 50px;
`;
const TitleContainer = styled.div`
  & > h1 {
      color: white;
    font-weight: 300;
  }
`;
const CardContainer = styled.div`
  padding: 20px 0;
  display: flex;
  flex-wrap: wrap;
  /* border: 1px solid white; */
  gap: 15px;
  /* overflow-x: scroll; */
  .MuiCard-root:hover,
  .MuiCard-root:focus {
    transform: scale(1.1); /* Scale up the card on hover */
    transition: transform 0.5s ease-in-out;
    & > .scroll-button {
      opacity: 1; /* Make the button visible on hover */
    }
  }
`;
const StyledLink = styled(Link)``

const MyList = () => {
  const containerRef = useRef(null);
  const userToken = useSelector((state) => state.user.currentUser.token);
  const [list, setList] = useState([]);
  const dispatch = useDispatch();
  //   console.log("list ", list[0].thumbnail);
//   list.map(item => dispatch(addToList({id: item._id})))
  useEffect(() => {
    const fetchMyList = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${userToken}`,
            projectId: "9m8ybce3f4vg",
          },
        };
        const response = await axios.get(
          `https://academics.newtonschool.co/api/v1/ott/watchlist/like  `,
          config
        );
        console.log("resp", response.data.data.shows);
        if (response.data.status == "success") {
          setList(response.data.data.shows);
          //   setIsAddedToList(true);
          // dispatch(addToList(response.data.data.shows))
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchMyList();
  }, []);

  // useEffect(() => {
  //     list?.map((item) => {
  //     dispatch(addToList({ id: item._id }));
  //   });
  // }, [dispatch, list]);

  return (
    <>
      <Navbar />
      <Container>
        <TitleContainer>
          <h1>My Watchlist</h1>
          <button onClick={()=> dispatch(resetWatchlist())}>Reset Watchlist</button>
        </TitleContainer>
        <CardContainer ref={containerRef}>
          {list?.map((item) => (
            <StyledLink to={`/show/${item._id}`} key={item._id}>
              <Card
                sx={{
                  maxWidth: 345,
                  borderRadius: 2,
                  width: "345px",
                  cursor: "pointer",
                }}
                raised
                className="card"
              >
                <CardMedia
                  component="img"
                  alt="Contagion"
                  height="280"
                  image={item.thumbnail}
                  sx={{ objectFit: "cover" }}
                />
              </Card>
            </StyledLink>
          ))}
        </CardContainer>
      </Container>
      <TvShows />
      <Footer />
    </>
  );
};

export default MyList;
