import { useEffect, useState } from "react";
import { styled } from "styled-components";
// import { publicRequest } from "../../requestMethods";
import { mobile, tablet, large } from "../helper/responsiveHelper";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import { useHistory } from "react-router-dom";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5298bac0-b8bf-4c80-af67-725c1272dbb0/dexe47y-93532dcd-45cd-4381-8758-b6c5535c3a4e.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUyOThiYWMwLWI4YmYtNGM4MC1hZjY3LTcyNWMxMjcyZGJiMFwvZGV4ZTQ3eS05MzUzMmRjZC00NWNkLTQzODEtODc1OC1iNmM1NTM1YzNhNGUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0._OCNwhauEgAp5HxfFfGyYAJt72-sQvTXsi4QdaFBsCE");
    background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Content = styled.div`
  background-color: white;
  max-width: 50%;
  padding: 30px;
  ${tablet({
    maxWidth: "60%",
  })}
  ${mobile({
    maxWidth: "100%",
    margin: "2rem 0"
  })}
`;
const Title = styled.h1`
  text-align: center;
`;
const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  margin: 10px 20px;
  flex: 1;
  padding: 10px 20px;
  font-size: 17px;
`;
const CustomUploadButton = styled.label`
  display: inline-block;
  padding: 10px 20px;
  margin: 10px 20px;
  background-color: #007bff;
  flex: 1;
  font-size: 17px;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
const FileButton = styled.input`
    display: none;
`
const Agreement = styled.p`
  font-size: 17px;
  margin: 20px;
`;
const Button = styled.button`
  background-color: black;
  color: white;
  margin: 0 20px;
  padding: 10px 20px;
  width: 40%;
  font-size: 17px;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
  }
`;
const Error = styled.p`

`;

const Registration = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
    file: null,
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
//   const history = useHistory();
  console.log(userDetails)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !userDetails.name ||
      !userDetails.email ||
      !userDetails.password ||
      !confirmPassword
    ) {
      setError("Please Fill All The Details!!!");
    } else if (userDetails.password !== confirmPassword) {
      setError("Password does not match!!!");
    } else {
      setError("");

    //   try {
    //     const response = await publicRequest.post(
    //       "/auth/register",
    //       userDetails
    //     );
    //     if (response.data.success) {
    //       history.push("/login");
    //     }
    //     console.log("Registration response:", response);
    //   } catch (error) {
    //     console.error("Registration error:", error.message);
    //     setError("Something went wrong", error.message);
    //   }
    }
  };
  return (<>
        <Navbar/>
    <Container>
      <Content>
        <Title>Create A New Account</Title>
        <Form>
          <Input
            type="text"
            placeholder="Full Name"
            value={userDetails.name}
            onChange={(e) =>
              setUserDetails((prevUserDetails) => ({
                ...prevUserDetails,
                name: e.target.value,
              }))
            }
            required
          />
          
          <Input
            type="email"
            placeholder="Email"
            value={userDetails.email}
            onChange={(e) =>
              setUserDetails((prevUserDetails) => ({
                ...prevUserDetails,
                email: e.target.value,
              }))
            }
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={userDetails.password}
            onChange={(e) =>
              setUserDetails((prevUserDetails) => ({
                ...prevUserDetails,
                password: e.target.value,
              }))
            }
            required
          />
          <Input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <CustomUploadButton htmlFor="fileInput">Upload Image</CustomUploadButton>
          <FileButton
            type="file"
            id="fileInput"
            accept=".jpg, .jpeg, .png, .gif"
            placeholder="Username"
            value={userDetails.username}
            onChange={(e) =>
              setUserDetails((prevUserDetails) => ({
                ...prevUserDetails,
                file: e.target.files[0],
              }))
            }
          />
          <Agreement>
            By creating an account, I consent to process my personal data.
          </Agreement>
          <Button onClick={handleSubmit}>Create</Button>
          <Error>{error}</Error>  
        </Form>
      </Content>
    </Container>
    <Footer/>
    </>
  );
};

export default Registration;
