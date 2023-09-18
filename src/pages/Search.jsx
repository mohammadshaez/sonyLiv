import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
const Container = styled.div`
  width: 100%;
`;
const UpperWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 100px;
  align-items: center;
`;
const SearchContainer = styled.div`
  padding: 10px;
  background-color: white;
  width: 80%;
  border-radius: 50px;
  display: flex;
  align-items: center;
`;
const SearchInput = styled.input`
  font-size: 20px;
  padding: 10px 0;
  margin: 0 20px;
  width: 90%;
  height: 100%;
  border: none;
  outline: none;
  font-weight: 400;
  &:focus {
    border: none;
  }
`;
const CloseBtnWrapper = styled.div`
  & .MuiSvgIcon-root {
    width: 3rem;
    height: 3rem;
  }
`;

const CardContainer = styled.div`
  margin: 100px auto;
  display: flex;
  padding: 0 50px;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 15px;
  .MuiCard-root:hover,
  .MuiCard-root:focus {
    transform: scale(1.1);
    transition: transform 0.5s ease-in-out;
  }
`;

const BottomWrapper = styled.div``;
const StyledLink = styled(Link)``;
const Search = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [searchedData, setSearchedData] = useState(null);
  const handleInput = (e) => {
    e.preventDefault();
    setInput(e.target.value);
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
          `https://academics.newtonschool.co/api/v1/ott/show?limit=500`,
          config
        );
        console.log(response.data.data);
        setData((prevData) => [...prevData, ...response.data.data]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(input.toLowerCase())
    );
    setSearchedData(filtered);
  }, [input]);

  return (
    <>
      <Container>
        <UpperWrapper>
          <SearchContainer>
            <SearchInput
              type="text"
              placeholder="Search for movies, shows, sports, etc"
              value={input}
              onChange={handleInput}
            />
          </SearchContainer>
          <CloseBtnWrapper>
            <StyledLink to="/">
              <CloseIcon
                sx={{ color: "white", fontSize: "20px", cursor: "pointer " }}
              />
            </StyledLink>
          </CloseBtnWrapper>
        </UpperWrapper>
        <BottomWrapper>
          <CardContainer>
            {searchedData?.map((item) => (
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
        </BottomWrapper>
      </Container>
    </>
  );
};

export default Search;
