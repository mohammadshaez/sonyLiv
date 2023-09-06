import { styled } from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import ReplyIcon from "@mui/icons-material/Reply";
import { sliderData } from "../helper/data";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useRef, useState } from "react";

const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
`;
const Container = styled.div`
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.sliderindex * -100}vw);
  display: inline-flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  position: relative;
  /* border: 2px solid white; */
`;
const ImageContainer = styled.div`
  height: 100%;
  width: 100vw;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 30%;
    background-image: linear-gradient(
      to bottom,
      rgba(255, 0, 0, 0),
      rgba(0, 0, 0, 1)
    );
  }
`;
const HeroImage = styled.img`
  height: 100%;
  /* object-fit: cover; */
  width: 100vw;
`;

// Arrows
const Arrow = styled.div`
  position: absolute;
  transform: translateY(-50%);
  top: 0;
  bottom: 0;
  margin: auto;
  z-index: 2;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: white;
  opacity: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LeftArrow = styled(Arrow)`
  left: 10px;
`;
const RightArrow = styled(Arrow)`
  right: 10px;
`;
// Info
const DetailsWrapper = styled.div`
  position: absolute;
  bottom: 50px;
  left: 150px;
  color: white;
  display: flex;
  flex-direction: column;
  font-weight: 300;
`;
const UpperWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 400;
  align-items: center;
`;
const Details = styled.p`
  margin: 0 5px;
`;
const Dot = styled.span`
  color: gold;
  font-size: 1.5rem;
`;
const Language = styled.p`
  margin: 0 5px;
`;
const Year = styled.p`
  height: 100%;
`;
const Left = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
`;

const BottomWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Title = styled.h3`
  font-weight: 500;
`;
const Center = styled.div`
  padding: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const CenterButton = styled.button`
  padding: 12px 30px;
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  border-radius: 10px;
  border: none;
`;
const Right = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;

const Slider = () => {
  const [sliderindex, setsliderindex] = useState(0);
  //touch
  const [touchStartX, setTouchStartX] = useState(null);
  const sliderRef = useRef(null);

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (touchStartX === null) return;
    const touchX = e.touches[0].clientX;
    const deltaX = touchX - touchStartX;
    if (deltaX > 30) {
      handleClick('left');
    } else if (deltaX < -30) {
      handleClick('right');
    }
    setTouchStartX(null);
  };
  const handleClick = (direction) => {
    if (direction === "left") {
      return setsliderindex(
        (prevIndex) => (prevIndex - 1 + sliderData.length) % sliderData.length
      );
    }
    setsliderindex((prevIndex) => (prevIndex + 1) % sliderData.length);
  };
  return (
    <>
    <div
      className="slider"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      ref={sliderRef}
    >

      <LeftArrow onClick={() => handleClick("left")}>
        <ArrowBackIosIcon />
      </LeftArrow>
      <Wrapper>
        {sliderData.map((item) => (
          <Container sliderindex={sliderindex}>
            <ImageContainer>
              <HeroImage src={item.imageURL} />
            </ImageContainer>
            <DetailsWrapper>
              <UpperWrapper>
                <Details>{item.details} </Details>
                <Dot>•</Dot>
                <Language>{item.language} </Language>
                <Dot>•</Dot>
                <Year> {item.releaseYear}</Year>
              </UpperWrapper>
              <BottomWrapper>
                <Left>
                  <AddIcon sx={{ fontSize: "2rem" }} />
                  <Title>Add to My List</Title>
                </Left>
                <Center>
                  <CenterButton>Play Now</CenterButton>
                </Center>
                <Right>
                  <ReplyIcon />
                  <Title>Share</Title>
                </Right>
              </BottomWrapper>
            </DetailsWrapper>
          </Container>
        ))}
      </Wrapper>

      <RightArrow onClick={() => handleClick("right")}>
        <ArrowForwardIosIcon />
      </RightArrow>

      </div>
    </>
  );
};

export default Slider;
