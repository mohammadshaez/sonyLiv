import { styled } from "styled-components";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useEffect, useState } from "react";
import axios from "axios";
import {mobile, tablet, large} from '../helper/responsiveHelper';

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
  .MuiCard-root:hover, .MuiCard-root:focus  {
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
  /* bottom: 50%; */
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

const TvShows = () => {
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
    // console.log("data",data)
    
    const handleScroll = (direction) => {
        const container = document.getElementById("card-scroll-container");
        const cardWidth = 180; // Width of a card (adjust as needed)
        const cardsInView = Math.floor(container.clientWidth / cardWidth);
        const scrollAmount = cardWidth * cardsInView;
        console.log(container.clientWidth)
        if (direction === "left") {
          setScrollLeft((prevScrollLeft) =>
            prevScrollLeft - scrollAmount <= 0 ? 0 : prevScrollLeft - scrollAmount
          );
        } else {
          setScrollLeft((prevScrollLeft) =>
            prevScrollLeft + scrollAmount >= container.scrollWidth
              ? container.clientWidth
              : prevScrollLeft + scrollAmount
          );
        }
      };

  useEffect(() => {
    const fetchData = async () => {
        try {
          const config = {
            headers: {
              "projectId": "9m8ybce3f4vg",
            },
          };
        const response = await axios.get(
          "https://academics.newtonschool.co/api/v1/ott/show?page=2&limit=15", config
        );
        // console.log("response",response.data)
        setData(response.data);
      } catch (error) {
        // console.log("error",error)
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Container>
        <Title>Popular TV Shows</Title>
        <LeftButton
          onClick={() => handleScroll("left")}
          onMouseOver={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ opacity: isHovered ? 1 : 0 }}
        >
          <ArrowBackIcon sx={{ color: "white", fontSize: "30px" }} />
        </LeftButton>
        <CardScrollContainer >
          <CardContainer
            style={{
              transform: `translateX(-${scrollLeft}px)`,
              transition: "all 0.5s ease",
            }}
            onMouseOver={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            id="card-scroll-container"
          >
            {data.data?.map((item) => (
              <Card
                sx={{
                  maxWidth: 345,
                  borderRadius: 2,
                  width: "180px",
                  "&:first-child": { marginLeft: "50px" },
                }}
                raised
                key={item.id}
              >
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="280"
                  image={item.thumbnail}
                  sx={{ objectFit: "cover" }}
                />
              </Card>
            ))}
          </CardContainer>
        </CardScrollContainer>
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
