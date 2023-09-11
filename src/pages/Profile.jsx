import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EditIcon from "@mui/icons-material/Edit";
import styled from "styled-components";
import { FaCrown } from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";
import PaidIcon from "@mui/icons-material/Paid";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import LogoutIcon from "@mui/icons-material/Logout";
import { useSelector } from "react-redux";
import axios from "axios";
const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  color: white;
  font-weight: 400;
`;
const ProfileWrapper = styled.div`
  background-color: #212121;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  margin: 20px 0;
  border-radius: 10px;
  & > p {
    color: lightgray;
  }
`;
const ProfileImage = styled.img`
  /* padding: 20px; */
  margin: 20px;
  width: 100px;
  height: 90px;
  border-radius: 10px;
`;
const EditDetailsBtn = styled.button`
  cursor: pointer;
  background-color: transparent;
  color: lightgray;
  border: none;
  &:hover {
    color: white;
  }
`;
const HiddenContainer = styled.div`
  padding: 5px 20px;
  & form {
    display: flex;
    flex-direction: column;
  }
`;
const EditNameInput = styled.input`
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-bottom: 10px;
`;
const EditPicLabel = styled.label`
  font-size: 13px;
  padding: 5px;
  /* width: 80px; */
  height: 30px;
  color: white;
  background-color: #5564c1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  &:hover {
    background-color: ;
  }
`;
const EditProfilePicInput = styled.input`
  display: none;
`;
const EditPasswordButton = styled.button`
  font-size: 13px;
  padding: 5px;
  /* width: 80px; */
  height: 30px;
  color: white;
  background-color: #5564c1;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  align-items: center;
  border: none;
  &:hover {
    background-color: ;
  }
`;
const EditPasswordWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const SubmitButton = styled.button`
  font-size: 13px;
  padding: 5px;
  /* width: 80px; */
  height: 30px;
  color: white;
  background-color: #5564c1;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  align-items: center;
  border: none;
  &:hover {
    background-color: ;
  }
`;

const PremuimButton = styled.a`
  background-image: linear-gradient(to top, #27285eff, #181821ff);
  padding: 20px 10px;
  border: none;
  border-radius: 10px;
  margin: 10px;
  color: lightgray;
  display: flex;
  gap: 20px;
  align-items: center;
  cursor: pointer;
  & > div {
    display: flex;
    flex-direction: column;
  }
  &:hover {
    color: white;
  }
`;
const BottomDivWrapper = styled.div`
  width: 100%;
`;
const BottomDiv = styled.div`
  color: lightgray;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #2e2d2d;
  }
`;
const Profile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = useSelector((state) => state.user.currentUser.data);
  const userToken = useSelector(state => state.user.currentUser.token);
  console.log(userToken)
  const [error, setError] = useState(false);    
  const [userDetails, setUserDetails] = useState({
    name: "",
    profileImage: null,
    passwordCurrent: "",
    password: "",
    email: user.email,
    "appType": "ott",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userDetails.passwordCurrent == userDetails.updatedPassword) {
      setError(true);
    } else {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${userToken}`,
            projectId: "9m8ybce3f4vg",
          },
        };
        const response = await axios.patch(
          "https://academics.newtonschool.co/api/v1/user/updateMyPassword",
          userDetails,
          config
        );
        console.log("Update response:", response); // getting response

        if (response.data.status == "success") {
        //   navigate("/login");
        }
        // dispatch(addToken(response.data.token));
      } catch (error) {
        console.error("Registration error:", error.message);
        // setError("Something went wrong", error.message);
      }
    }
  };

//   console.log(userDetails);
  return (
    <>
      <Navbar />
      <Container>
        <Title>My Account</Title>
        <ProfileWrapper>
          <ProfileImage
            src={
              user.profileImage ||
              "https://www.w3schools.com/howto/img_avatar.png"
            }
            alt="avatar"
          />
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>0987654321</p>
          <EditDetailsBtn onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <EditIcon sx={{ fontSize: "20px" }} />
            Edit Details
          </EditDetailsBtn>
          {isMenuOpen && (
            <HiddenContainer>
              <form>
                <EditNameInput
                  type="name"
                  placeholder="Enter Your Name"
                  value={userDetails.name}
                  onChange={(e) =>
                    setUserDetails((prevDetails) => ({
                      ...prevDetails,
                      name: e.target.value,
                    }))
                  }
                />
                <EditPicLabel htmlFor="fileInput">Update Image</EditPicLabel>
                <EditProfilePicInput
                  type="file"
                  id="fileInput"
                  //   value={userDetails.file}
                  onChange={(e) =>
                    setUserDetails((prevDetails) => ({
                      ...prevDetails,
                      profileImage: e.target.files[0],
                    }))
                  }
                />

                <EditPasswordWrapper>
                  <EditNameInput
                    type="password"
                    placeholder="Current Password"
                    value={userDetails.passwordCurrent}
                    onChange={(e) =>
                      setUserDetails((prevDetails) => ({
                        ...prevDetails,
                        passwordCurrent: e.target.value,
                      }))
                    }
                  />
                  <EditNameInput
                    type="password"
                    placeholder="New Password"
                    value={userDetails.password}
                    onChange={(e) =>
                      setUserDetails((prevDetails) => ({
                        ...prevDetails,
                        password: e.target.value,
                      }))
                    }
                  />
                </EditPasswordWrapper>
                <SubmitButton type="submit" onClick={handleSubmit}>
                  Submit
                </SubmitButton>
              </form>
            </HiddenContainer>
          )}
          <PremuimButton>
            <FaCrown style={{ fontSize: "25px" }} />
            <div>
              <span>To watch premuim videos</span>
              <span>Go premium</span>
            </div>
            <AiOutlineRight style={{ fontSize: "25px", padding: "0 10px" }} />
          </PremuimButton>
          <BottomDivWrapper>
            <BottomDiv>
              <PaidIcon />
              <span>Transaction History</span>
            </BottomDiv>
            <BottomDiv>
              <ImportantDevicesIcon />
              <span>Device Management</span>
            </BottomDiv>
            <BottomDiv>
              <LogoutIcon />
              <span>Sign Out</span>
            </BottomDiv>
          </BottomDivWrapper>
        </ProfileWrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Profile;
