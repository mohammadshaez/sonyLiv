// import { styled } from "styled-components";
import { mobile, tablet, large } from "../helper/responsiveHelper";
import { useMediaQuery } from "react-responsive";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import styled from "styled-components";
//Small Devices
import * as React from "react";
import { styled as styledMui } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Container = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  color: white;
`;

//Mui Accordian
const AccordianContainer = styled.div``;
const Accordion = styledMui((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  border: "none",
  color: "white",
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styledMui((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "#111111",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styledMui(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  backgroundColor: "#111111",
}));

// Useful Links
const UsefulLinksContainer = styled.div`
  padding: 25px 40px;
`;
const StyledLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  &:not(:last-of-type)::after {
    content: " • ";
  }
`;

// App Download
const MobileStoreContainer = styled.div`
  padding: 25px 40px;
`;
const MobileAppImage = styled.img`
  margin: 0 10px;
`;

// Social Links
const SocialContainer = styled.div`
  padding: 25px 40px;
`;
const SocialTitleContainer = styled.div`
  margin-bottom: 10px;
  & > p {
    font-size: 0.9rem;
  }
`;
const IconContainer = styled.div`
  display: flex;
  gap: 5px;
`;

// copyright
const CopyrightContainer = styled.div`
  padding: 25px 0px;
`;

const SmallDevice = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Container>
      <AccordianContainer>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>Explore Shows</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <a href="#">Set Shows</a>
            </Typography>
            <Typography>
              <a href="#">Sab TV Shows</a>
            </Typography>
            <Typography>
              <a href="#">Marathi TV Shows</a>
            </Typography>
            <Typography>
              <a href="#">Bengali Tv Shows</a>
            </Typography>
            <Typography>
              <a href="#">English TV Shows</a>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>Top TV Shows</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <a href="#">Game Of Thrones</a>
            </Typography>
            <Typography>
              <a href="#">Narcos</a>
            </Typography>
            <Typography>
              <a href="#">Friends</a>
            </Typography>
            <Typography>
              <a href="#">Breaking Bad</a>
            </Typography>
            <Typography>
              <a href="#">Fault In Our Stars</a>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>Sony Liv Orignals</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <a href="#">Scam 2003</a>
            </Typography>
            <Typography>
              <a href="#">Scam 1992</a>
            </Typography>
            <Typography>
              <a href="#">College Romance</a>
            </Typography>
            <Typography>
              <a href="#">Rocket Boys</a>
            </Typography>
            <Typography>
              <a href="#">The Jengaburu Curse</a>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <Typography>Sony Liv Orignals</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <a href="#">Scam 2003</a>
            </Typography>
            <Typography>
              <a href="#">Scam 1992</a>
            </Typography>
            <Typography>
              <a href="#">College Romance</a>
            </Typography>
            <Typography>
              <a href="#">Rocket Boys</a>
            </Typography>
            <Typography>
              <a href="#">The Jengaburu Curse</a>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
            <Typography>Movies by Language</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <a href="#">Hindi Movies</a>
            </Typography>
            <Typography>
              <a href="#">English Movies</a>
            </Typography>
            <Typography>
              <a href="#">Marathi Movies</a>
            </Typography>
            <Typography>
              <a href="#">Tamil Movies</a>
            </Typography>
            <Typography>
              <a href="#">Telugu Movies</a>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </AccordianContainer>

      {/* App Download */}
      <MobileStoreContainer>
        <MobileAppImage src="src/assets/App_Download/playStore.png" />
        <MobileAppImage src="src/assets/App_Download/appleStore.png" />
      </MobileStoreContainer>

      {/* Social Links */}
      <SocialContainer>
        <SocialTitleContainer>
          <p>Connect With Us</p>
        </SocialTitleContainer>
        <IconContainer>
          <LinkedInIcon sx={{ fontSize: "2.5rem" }} />
          <FacebookIcon sx={{ fontSize: "2.5rem" }} />
          <InstagramIcon sx={{ fontSize: "2.5rem" }} />
          <TwitterIcon sx={{ fontSize: "2.5rem" }} />
        </IconContainer>
      </SocialContainer>
      {/* Useful Links */}
      <UsefulLinksContainer>
        <StyledLink>Terms Of Use</StyledLink>
        <StyledLink>Privacy Policy</StyledLink>
        <StyledLink>FAQs</StyledLink>
        <StyledLink>Contact Us</StyledLink>
        <StyledLink>Advetise With Us</StyledLink>
        {/* Copyright */}
        <CopyrightContainer>
          <p>© 2022 Sony Pictures Networks India Pvt. Ltd.</p>
        </CopyrightContainer>
      </UsefulLinksContainer>
    </Container>
  );
};

// Large Device

const LargeContainer = styled.div`
  color: white;
  margin-top: 50px;
  ${large({})}
  ${tablet({})}
  ${mobile({})}
`;
const LinkCategoriesWrapper = styled.div`
  display: flex;
  margin: 0 50px;
  /* justify-content: space-evenly; */
  flex-wrap: wrap;
`;
const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;
const InfoContainer = styled.div`
  text-align: center;
  width: 15%;
  padding: 15px;
  margin: 0 auto;
  ${large({})}
  ${tablet({})}
  ${mobile({})}
  & > h4 {
    margin-bottom: 15px;
    font-weight: 400;
    ${large({})}
    ${tablet({})}
      ${mobile({})}
  }
`;
const LinksContainer = styled.div`
  ${large({})}
  ${tablet({})}
  ${mobile({})}
`;
const Link = styled.div`
  font-weight: 300;
  cursor: pointer;
  padding: 5px 0;
  ${large({})}
  ${tablet({})}
  ${mobile({})}
`;

const LargeDevice = () => {
  return (
    <>
      <LargeContainer>
        {/* Link Categories */}
        <LinkCategoriesWrapper>
          <InfoContainer>
            <h4>Explore Shows</h4>
            <LinksContainer>
              <Link>SET Shows</Link>
              <Link>SAB TV Shows</Link>
              <Link>Marathi Shows</Link>
              <Link>Bengali Shows</Link>
              <Link>English Shows</Link>
            </LinksContainer>
          </InfoContainer>
          <InfoContainer>
            <h4>Top TV Shows</h4>
            <LinksContainer>
              <Link>Game Of Thrones</Link>
              <Link>Narcos</Link>
              <Link>Friends</Link>
              <Link>Breaking Bad</Link>
              <Link>Fault In Our Stars</Link>
            </LinksContainer>
          </InfoContainer>
          <InfoContainer>
            <h4>Sony Liv Orignals</h4>
            <LinksContainer>
              <Link>Scam 2003</Link>
              <Link>Scam 1992</Link>
              <Link>College Romance</Link>
              <Link>Rocket Boys</Link>
              <Link>The Jengaburu Curse</Link>
            </LinksContainer>
          </InfoContainer>
          <InfoContainer>
            <h4>Shows By Genres</h4>
            <LinksContainer>
              <Link>Drama Shows</Link>
              <Link>Comedy Shows</Link>
              <Link>Thriller Shows</Link>
              <Link>Romantic Shows</Link>
              <Link>Reality Shows</Link>
            </LinksContainer>
          </InfoContainer>
          <InfoContainer>
            <h4>Movies By Language</h4>
            <LinksContainer>
              <Link>Hindi Movies</Link>
              <Link>English Movies</Link>
              <Link>Marathi Movies</Link>
              <Link>Bengali Movies</Link>
              <Link>Telugu Movies</Link>
            </LinksContainer>
          </InfoContainer>
        </LinkCategoriesWrapper>
        <BottomWrapper>
          {/* Useful Links */}
          <UsefulLinksContainer>
            <StyledLink>Terms Of Use</StyledLink>
            <StyledLink>Privacy Policy</StyledLink>
            <StyledLink>FAQs</StyledLink>
            <StyledLink>Contact Us</StyledLink>
            <StyledLink>Advetise With Us</StyledLink>
            {/* Copyright */}
            <CopyrightContainer>
              <p>© 2022 Sony Pictures Networks India Pvt. Ltd.</p>
            </CopyrightContainer>
          </UsefulLinksContainer>

          {/* App Download */}
          <MobileStoreContainer>
            <MobileAppImage src="src/assets/App_Download/playStore.png" />
            <MobileAppImage src="src/assets/App_Download/appleStore.png" />
          </MobileStoreContainer>

          {/* Social Links */}
          <SocialContainer>
            <SocialTitleContainer>
              <p>Connect With Us</p>
            </SocialTitleContainer>
            <IconContainer>
              <LinkedInIcon sx={{ fontSize: "2.5rem" }} />
              <FacebookIcon sx={{ fontSize: "2.5rem" }} />
              <InstagramIcon sx={{ fontSize: "2.5rem" }} />
              <TwitterIcon sx={{ fontSize: "2.5rem" }} />
            </IconContainer>
          </SocialContainer>
        </BottomWrapper>
      </LargeContainer>
    </>
  );
};

const Footer = () => {
  const isSmallDevice = useMediaQuery({
    query: "(max-width: 1000px)",
  });

  return <>{isSmallDevice ? <SmallDevice /> : <LargeDevice />}</>;
};

export default Footer;
