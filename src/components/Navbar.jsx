import styled from "styled-components";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SearchIcon from "@mui/icons-material/Search";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { mobile, tablet, large } from "../helper/responsiveHelper";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SettingsIcon from "@mui/icons-material/Settings";
import ContactsIcon from "@mui/icons-material/Contacts";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PercentIcon from "@mui/icons-material/Percent";
import { Link } from "react-router-dom";
import { Link as LinkScroll} from "react-scroll";
import { useSelector } from "react-redux";

const Wrapper = styled.header`
  display: flex;
  width: 100%;
  position: fixed;
  /* top: 0; */
  justify-content: space-between;
  height: 45px;
  z-index: 2;

  ${large({})}
  ${tablet({})}
  ${mobile({})}
`;
const Blur = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(4px);
  background-color: rgba(53, 47, 68, 0.4);
`;
const Left = styled.div`
  padding-left: 30px;
  z-index: 2;
  display: flex;
  flex: 1;
  /* border: 1px solid black; */
  justify-content: center;
  align-items: center;
`;

const LogoWrapper = styled.div``;
const Logo = styled.img`
  margin-right: 10px;
  width: 35px;
`;
const SubscribeButton = styled(Link)`
  text-decoration: none;
  height: 20px;
  display: flex;
  align-items: center;
  background-color: #5564c1;
  border: none;
  font-weight: 300;
  border-radius: 3px;
  font-size: 0.8rem;
  padding: 5px;
  color: white;
`;
const Pipe = styled.p`
  z-index: 2;
  font-size: 2rem;
  color: lightgray;
  margin-left: 15px;
  font-weight: 100;
`;
const Center = styled.div`
  z-index: 2;
  display: inline-flex;
  overflow-x: scroll;
  /* border: 1px solid white; */
  flex: 8;
  align-items: center;
  border-bottom: 1px solid transparent;
  margin-left: 20px;
  /* justify-content: center; */
  &::-webkit-scrollbar {
    display: none;
  }
  ${large({})}
  ${tablet({})}
  ${mobile({})}
`;
const ScrollLink = styled(LinkScroll)`
  text-decoration: none;
  height: 100%;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  list-style-type: none;
  padding: 0 18px;
  color: lightgray;
  font-weight: 300;
  font-size: 0.9rem;
  cursor: pointer;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: white;
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  &:hover {
    color: white;
    font-weight: 400;
    &::after {
      opacity: 1;
    }
  }
`;

const Right = styled.div`
  display: flex;
  flex-shrink: 0;
  justify-content: space-around;
  align-items: center;
  flex: 1;
  z-index: 2;
  margin: 0 20px;
  /* position: relative; */
`;

const UserDropdownContainer = styled.div`
  width: 250px;
  position: absolute;
  top: 40px;
  right: 0;
  z-index: 99;
  display: none;
`;

const AccountBoxIconContainer = styled.div`
  position: relative; /* Needed for positioning the UserDropdownContainer */
  /* display: inline-block; Ensure they are in a line */
  /* border: 1px solid white; */
  cursor: pointer;

  &:hover ${UserDropdownContainer} {
    display: block;
  }
`;
const UserDropdownContent = styled(Link)`
  color: lightgray;
  text-decoration: none;
  background-color: rgba(10, 10, 10, 0.8);
  list-style-type: none;
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
  &:hover {
    color: #0a0a0a;
    background-color: lightgray;
    & p {
      transform: translateX(5px);
    }
  }
  & p {
    transition: transform 0.3s ease;
    margin-left: 10px;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;
const Navbar = ({
  hotPickRef,
  tvShowsRef,
  romanceRef,
  thrillerRef,
  fantasyRef,
  comedyRef,
  actionRef,
  sciFiRef,
}) => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <>
      <Wrapper>
        <Blur />
        <Left>
          <LogoWrapper>
            <Link to="/">
              <Logo src="https://images.slivcdn.com/UI_icons/sonyliv_new_revised_header_logo.png?w=40&q=high&fr=webp" />
            </Link>
          </LogoWrapper>
          <SubscribeButton to="/subscribe">
            Subscribe
            <ChevronRightIcon sx={{ fontSize: "1rem" }} />
          </SubscribeButton>
        </Left>
        <Pipe>|</Pipe>
        <Center>
          <ScrollLink to="hotPick" spy={true} smooth={true} duration={500}>Trending</ScrollLink>
          <ScrollLink to="tvShows" spy={true} smooth={true} duration={500}>TV Shows</ScrollLink>
          <ScrollLink to="romance" spy={true} smooth={true} duration={500}>Romance</ScrollLink>
          <ScrollLink to="thriller" spy={true} smooth={true} duration={500}>Thriller</ScrollLink>
          <ScrollLink to="fantasy" spy={true} smooth={true} duration={500}>Fantasy</ScrollLink>
          <ScrollLink to="comedy" spy={true} smooth={true} duration={500}>Comedy</ScrollLink>
          <ScrollLink to="action" spy={true} smooth={true} duration={500}>Action</ScrollLink>
          <ScrollLink to="sciFi" spy={true} smooth={true} duration={500}>Sci-Fi</ScrollLink>
        </Center>
        <Right>
          <SearchIcon
            sx={{
              fontSize: "2rem",
              color: "lightgray",
              fontWeight: "light",
              cursor: "pointer",
              padding: "0 10px",
            }}
          />
          <AccountBoxIconContainer>
            <AccountBoxIcon
              sx={{
                fontSize: "2rem",
                color: "lightgray",
                fontWeight: "light",
                cursor: "pointer",
                padding: "10px 10px",
                // border: "1px solid white"
              }}
            />
            <UserDropdownContainer>
              {user ? (
                <UserDropdownContent to="/profile">
                  <img
                    src="/src/assets/Misc/UserDropdownSignin.png"
                    alt="sign in avatar"
                  />

                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p>Welcome, {user.data.name}</p>
                  </div>
                </UserDropdownContent>
              ) : (
                <UserDropdownContent to="/login">
                  <img
                    src="src/assets/Misc/UserDropdownSignin.png"
                    alt="sign in avatar"
                  />
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <p>Sign in</p>
                    <p>a better experience</p>
                  </div>
                </UserDropdownContent>
              )}
              <UserDropdownContent to="/subscribe">
                <SubscriptionsIcon />
                <p>Subscribe Now</p>
              </UserDropdownContent>
              <UserDropdownContent to="/mylist">
                <LiveTvIcon />
                <p>My Watchlist</p>
              </UserDropdownContent>

              <UserDropdownContent>
                <SettingsIcon />
                <p>Settings & Preferences</p>
              </UserDropdownContent>
              <UserDropdownContent>
                <ContactsIcon />
                <p>Contact Us</p>
              </UserDropdownContent>
              <UserDropdownContent>
                <WhatsAppIcon />
                <p>Chat with us on Whatsapp</p>
              </UserDropdownContent>
              <UserDropdownContent>
                <PercentIcon />
                <p>Activate Offers</p>
              </UserDropdownContent>
            </UserDropdownContainer>
          </AccountBoxIconContainer>
        </Right>
      </Wrapper>
    </>
  );
};

export default Navbar;
