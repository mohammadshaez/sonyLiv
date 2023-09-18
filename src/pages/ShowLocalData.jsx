import React, { useEffect, useState } from "react";
import TvShows from "../components/TvShows";
import AddIcon from "@mui/icons-material/Add";
import ShareIcon from "@mui/icons-material/Share";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { styled } from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { FaCrown } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import DoneIcon from "@mui/icons-material/Done";
import { TodaysHotPickData } from "../helper/data";
import YouTube from "react-youtube";
const Container = styled.div`
  background-image: linear-gradient(to right, #151515 40%, transparent 60%),
    linear-gradient(to top, #151515 20%, transparent 60%),
    url(${(props) => props.thumb});
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;
  padding-top: 100px;
  height: 90vh;
  width: 100%;
`;
const InfoContainer = styled.div`
  padding: 0 40px;
  margin: 20px 0;
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  & > h1 {
    color: white;
    width: 50%;
    font-size: 35px;
  }
`;
const InfoWrapper = styled.div`
  font-size: 15px;
  width: 40%;
  margin: 20px 0;
  & > span {
    color: lightgray;
    &:not(:last-child)::after {
      content: " • ";
      font-size: 18px;
      color: gold;
    }
  }
`;
const DescriptionContainer = styled.div`
  padding: 10px 0;
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  height: ${(props) => (props.menustatus ? "auto" : "30px")};
  overflow: ${(props) => (props.menustatus ? "auto" : "hidden")};
  text-overflow: ellipsis;
  & > div {
    visibility: ${(props) => props.menustatus && "hidden"};
  }
`;
const MoreContainer = styled.div`
  color: white;
  align-items: center;
  display: flex;
  cursor: pointer;
`;
const LessContainer = styled.div`
  color: white;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const BodyText = styled.span`
  color: white;
  text-overflow: ellipsis;
`;
const BodyTextDark = styled.span`
  color: lightgray;
`;
const WrapperDiv = styled.div`
  /* border: 1px solid white; */
  padding: 5px 0;
`;
const MoreInfoContainer = styled.div`
  width: 50%;
`;
const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const HiddenMoreInfoContainer = styled.div`
  visibility: ${(props) => !props.menustatus && "hidden"};
`;
const VisibleMoreInfoContainer = styled.div``;
const SubscribeContainer = styled.div`
  width: 350px;
  height: 60px;
  margin: 20px 0;
  background-color: #313a45;
  border-radius: 10px;
  display: flex;
  color: white;
  font-size: 13px;
  font-weight: 300;
  display: flex;
  align-items: center;
`;
const SubscribeButton = styled(Link)`
  text-decoration: none;
  background-color: #e1a51a;
  color: white;
  cursor: pointer;
  width: 250px;
  height: 40px;
  margin: 10px;
  border: none;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 5px;
  font-size: 15px;
  &:hover {
    background-color: #c79216;
  }
`;
const SubscribeInfo = styled.div`
  padding: 0 5px;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: white;
  cursor: pointer;
`;
const InfoButton = styled.div`
  border: 0.5px solid lightgray;
  margin-right: 15px;
  border-radius: 5px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 5px;
`;
const MediaContainer = styled.div``;
// Modal
const VideoBackground = styled.video`
  width: 100%;
  height: 100%;
`;
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "black",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const SyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
const ShowLocalData = () => {
  const { id } = useParams();
  const data = TodaysHotPickData?.filter((item) => item.id == id);
  console.log(TodaysHotPickData, id, data);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isFullView, setIsFullView] = useState(false);
  const [isAddToList, setIsAddedToList] = useState(false);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const opts = {
    height: "600",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <>
      <Navbar />
      <Container thumb={data[0].imageURL}>
        <InfoContainer>
          <TitleContainer>
            <img
              src="https://images.slivcdn.com/UI_icons/packWise/premium_icon.png?h=24&w=24&q=high&fr=webp"
              alt="premuim image"
              width="25px"
              height="25px"
            />
            <h1>{data[0].title}</h1>
          </TitleContainer>
          <InfoWrapper>
            <span>English</span>
            <span>2023</span>
            <span>U/A 16+</span>
            <span>1 Seasons</span>
            <span>5 Episodes</span>
            <span>{data[0].keywords}</span>
          </InfoWrapper>
          <DescriptionContainer
            menustatus={isFullView ? isFullView : undefined}
          >
            <BodyText>{data[0].description}</BodyText>
            <MoreContainer onClick={() => setIsFullView(true)}>
              More
              <KeyboardArrowDownIcon />
            </MoreContainer>
          </DescriptionContainer>
          <MoreInfoContainer>
            <VisibleMoreInfoContainer>
              <WrapperDiv>
                <BodyTextDark>Subtitles: </BodyTextDark>
                <BodyText>English</BodyText>
              </WrapperDiv>
              <WrapperDiv>
                <BodyTextDark>Audio Language: </BodyTextDark>
                <BodyText>
                  Hindi, Tamil, Telugu, Marathi, Bengali, Malayalam, Kannada
                </BodyText>
              </WrapperDiv>
            </VisibleMoreInfoContainer>
            <HiddenMoreInfoContainer menustatus={isFullView}>
              <WrapperDiv>
                <BodyTextDark>Cast: </BodyTextDark>
                <BodyText>{data[0].cast}</BodyText>
              </WrapperDiv>
              <WrapperDiv>
                <BodyTextDark>Director: </BodyTextDark>
                <BodyText>{data[0].director}</BodyText>
              </WrapperDiv>

              <TextContainer>
                <WrapperDiv>
                  <BodyTextDark>Producers: </BodyTextDark>
                  <BodyText>{data[0].producer}</BodyText>
                </WrapperDiv>
                <LessContainer onClick={() => setIsFullView(false)}>
                  Less
                  <KeyboardArrowUpIcon />
                </LessContainer>
              </TextContainer>
            </HiddenMoreInfoContainer>
          </MoreInfoContainer>
          <SubscribeContainer>
            <SubscribeButton to="/subscribe">
              <FaCrown style={{ fontSize: "25px" }} />
              <span>Subscribe Now</span>
            </SubscribeButton>
            <SubscribeInfo>
              Stream Live Sports and Ad-free Orignals
            </SubscribeInfo>
          </SubscribeContainer>
          <ButtonContainer>
            {isAddToList ? (
              <InfoButton>
                <DoneIcon />
                {/* <p onClick={()=>dispatch(addToList())}>Added</p> */}
                <p>Added</p>
              </InfoButton>
            ) : (
              <SyledLink to="/maintainance">
                <InfoButton>
                  <AddIcon />
                  <p>My List</p>
                </InfoButton>
              </SyledLink>
            )}
            <SyledLink to="/maintainance">
              <InfoButton>
                <ShareIcon />
                <p>Share</p>
              </InfoButton>
            </SyledLink>
            <InfoButton onClick={handleOpen}>
              <PlayArrowIcon />
              <p>Trailer</p>
            </InfoButton>
          </ButtonContainer>
        </InfoContainer>
        <MediaContainer></MediaContainer>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <YouTube videoId={data[0].video_url} opts={opts} />
          </Box>
        </Modal>
      </Container>
      <TvShows />
      <Footer />
    </>
  );
};

export default ShowLocalData;
