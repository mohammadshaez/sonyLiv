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
import axios from "axios";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import DoneIcon from "@mui/icons-material/Done";
import { addToList } from "../redux/myListSlice";
import { removeFromList } from "../redux/myListSlice";

const Container = styled.div`
  background-image: linear-gradient(to right, #151515 40%, transparent 60%),
    linear-gradient(to top, #151515 20%, transparent 60%),
    /* url("https://images.slivcdn.com/videoasset_images/scam2003thetelgistory_5_masthead_web_v1.jpg?h=auto&w=1366&q=high&fr=webp"); */
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
    /* border: 1px solid white; */
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
  align-items: flex-start;
  gap: 20px;
  height: ${(props) => (props.menustatus ? "auto" : "30px")};
  /* height: 30px; */
  overflow: ${(props) => (props.menustatus ? "auto" : "hidden")};
  /* overflow: hidden; */
  text-overflow: ellipsis;
  /* margin-right: 50px; */
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
const SubscribeButton = styled.button`
  background-color: #e1a51a;
  color: white;
  margin: 10px;
  width: 250px;
  height: 40px;
  padding: 10px;
  border: none;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 5px;
  font-size: 15px;
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
  // border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Show = () => {
  window.scrollTo(0, 0);
  const { id } = useParams();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { token } = useSelector((state) => state.user.currentUser);
  const [isFullView, setIsFullView] = useState(false);
  const [data, setData] = useState("");
  const [isAddToList, setIsAddedToList] = useState(false);
  const dispatch = useDispatch();
  const { myWatchlist } = useSelector((state) => state.myList);
  console.log("myWatchlist ", myWatchlist);
  // Modal
  useEffect(() => {
    if (myWatchlist.includes(id)) {
      setIsAddedToList(true);
      // console.log("isAdd true");
    } else {
      // console.log("isAdd false");
      // console.log("myWatchlist ", myWatchlist);
      setIsAddedToList(false);
    }
  }, [id]);

  // console.log("data : ", data._id);
  useEffect(() => {
    const fetchShowData = async () => {
      try {
        const config = {
          headers: {
            projectId: "9m8ybce3f4vg",
          },
        };
        const response = await axios.get(
          `https://academics.newtonschool.co/api/v1/ott/show/${id}`,
          config
        );
        // console.log(response.data);
        if (response.data.status == "success") {
          setData(response.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchShowData();
  }, [id]);

  const handleAddtoMyList = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          projectId: "9m8ybce3f4vg",
        },
      };
      const bodyData = {
        showId: data._id,
      };
      const response = await axios.patch(
        `https://academics.newtonschool.co/api/v1/ott/watchlist/like`,
        bodyData,
        config
      );
      console.log("res--> ", response.data.data.shows);
      if (response.data.status == "success") {
        setIsAddedToList(!isAddToList);
        dispatch(addToList(response.data.data.shows));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveMyList = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          projectId: "9m8ybce3f4vg",
        },
      };
      const bodyData = {
        showId: data._id,
      };
      const response = await axios.patch(
        `https://academics.newtonschool.co/api/v1/ott/watchlist/like`,
        bodyData,
        config
      );
      console.log("res--> ", response.data.data.shows);
      if (response.data.status == "success") {
        setIsAddedToList(!isAddToList);
        dispatch(removeFromList(data._id));
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Navbar />
      <Container thumb={data.thumbnail}>
        <InfoContainer>
          <TitleContainer>
            <img
              src="https://images.slivcdn.com/UI_icons/packWise/premium_icon.png?h=24&w=24&q=high&fr=webp"
              alt="premuim image"
              width="25px"
              height="25px"
            />
            <h1>{data.title}</h1>
          </TitleContainer>
          <InfoWrapper>
            <span>English</span>
            <span>2023</span>
            <span>U/A 16+</span>
            <span>1 Seasons</span>
            <span>5 Episodes</span>
            <span>{data.keywords}</span>
          </InfoWrapper>
          <DescriptionContainer menustatus={isFullView ? isFullView : undefined}>
            <BodyText>{data.description}</BodyText>
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
                <BodyText>{data.cast}</BodyText>
              </WrapperDiv>
              <WrapperDiv>
                <BodyTextDark>Director: </BodyTextDark>
                <BodyText>{data.director}</BodyText>
              </WrapperDiv>

              <TextContainer>
                <WrapperDiv>
                  <BodyTextDark>Producers: </BodyTextDark>
                  <BodyText>
                    Sameer Nair, Deepak Segal, Indranil Chakraborty
                  </BodyText>
                </WrapperDiv>
                <LessContainer onClick={() => setIsFullView(false)}>
                  Less
                  <KeyboardArrowUpIcon />
                </LessContainer>
              </TextContainer>
            </HiddenMoreInfoContainer>
          </MoreInfoContainer>
          <SubscribeContainer>
            <SubscribeButton>
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
                <p onClick={handleRemoveMyList}>Added</p>
              </InfoButton>
            ) : (
              <InfoButton onClick={handleAddtoMyList}>
                <AddIcon />
                <p>My List</p>
              </InfoButton>
            )}
            <InfoButton>
              <ShareIcon />
              <p>Share</p>
            </InfoButton>
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
            <VideoBackground autoPlay loop>
              <source src={data.video_url} type="video/mp4" />
              Your browser does not support the video tag.
            </VideoBackground>
          </Box>
        </Modal>
      </Container>
      <TvShows />
      <Footer />
    </>
  );
};

export default Show;
