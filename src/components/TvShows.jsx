import { styled } from "styled-components";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { mobile, tablet, large } from "../helper/responsiveHelper";
import { Link } from "react-router-dom";

const Container = styled.div`
  /* width: 100%; */
  padding: 40px 0;
  position: relative;
  overflow: hidden;
`;
const Title = styled.h2`
  color: white;
  font-weight: 400;
  margin-left: 50px;
`;
const CardScrollContainer = styled.div`
  width: 100%;
  overflow-x: scroll;
  white-space: nowrap;
  /* overflow: hidden; */
  position: relative;
  /* border: 1px solid white; */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CardContainer = styled.div`
  margin: 20px 0;
  /* position: relative; */
  display: inline-flex;
  /* border: 1px solid white; */
  gap: 15px;
  cursor: pointer;
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
const Button = styled.button`
  cursor: pointer;
  width: 50px;
  height: 150px;
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  opacity: 0.5;
  transform: translateY(-50%);
  z-index: 2;
  transition: opacity 0.3s ease;
`;
const LeftButton = styled(Button)`
  left: 0px;
`;
const RightButton = styled(Button)`
  right: 0px;
`;
const StyledLink = styled(Link)`
  &:first-of-type {
    margin-left: 50px;
  }
`;

// All TV Shows - - unfiltered
const TvShows = () => {
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // console.log("data",data)
  const [pageNumber, setPageNumber] = useState(1);
  const [hasMore, setHasMore] = useState(true); // Add a flag to track if there's more data to load
  const containerRef = useRef(null);
  // console.log(data);

  const handleScroll = (direction) => {
    const container = document.getElementById("card-scroll-container");
    const cardWidth = 180;
    const cardsInView = Math.floor(container.clientWidth / cardWidth);
    const scrollAmount = cardWidth * cardsInView;

    if (direction === "left") {
      const container = containerRef.current;
      const cardWidth = container.querySelector(".card").offsetWidth;
      setScrollLeft(scrollLeft - cardWidth * 5);
    } else {
      const container = containerRef.current;
      const cardWidth = container.querySelector(".card").offsetWidth;
      // console.log(cardWidth);
      setScrollLeft(scrollLeft + cardWidth * 5);
      setPageNumber((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const config = {
          headers: {
            projectId: "9m8ybce3f4vg",
          },
        };
        const response = await axios.get(
          `https://academics.newtonschool.co/api/v1/ott/show?page=${pageNumber}&limit=15`,
          config
        );
        // console.log(response);
        if (response.data.data.length === 0) {
          setHasMore(false);
        }
        setData((prevData) => [...prevData, ...response.data.data]);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (hasMore) {
      fetchData();
    }
  }, [pageNumber, hasMore]);

  return (
    <>
      <Container>
        <Title id="tvShows">Popular TV Shows</Title>

        {/* Button */}
        <LeftButton
          onClick={() => handleScroll("left")}
          onMouseOver={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ opacity: isHovered ? 1 : 0 }}
        >
          <ArrowBackIcon sx={{ color: "white", fontSize: "30px" }} />
        </LeftButton>

        {/* Card */}
        <CardScrollContainer>
          <CardContainer
            ref={containerRef}
            style={{
              transform: `translateX(-${scrollLeft}px)`,
              transition: "all 0.5s ease",
            }}
            onMouseOver={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            id="card-scroll-container"
          >
            {data.map((item) => (
              <StyledLink to={`/show/${item._id}`} key={item._id}>
                <Card
                  sx={{
                    maxWidth: 345,
                    borderRadius: 2,
                    width: "180px",
                  }}
                  raised
                  className="card"
                >
                  <CardMedia
                    component="img"
                    alt={item.title}
                    height="280"
                    image={item.thumbnail}
                    sx={{ objectFit: "cover" }}
                  />
                </Card>
              </StyledLink>
            ))}
          </CardContainer>
        </CardScrollContainer>

        {/* Button */}
        <RightButton
          onClick={() => handleScroll("right")}
          onMouseOver={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ opacity: isHovered ? 1 : 0 }}
        >
          <ArrowForwardIcon sx={{ color: "white", fontSize: "30px" }} />
        </RightButton>
      </Container>
    </>
  );
};

export default TvShows;
