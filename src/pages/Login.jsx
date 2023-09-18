import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
// import { login } from "../redux/apiCalls";
import { mobile, tablet, large } from "../helper/responsiveHelper";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { addToken, loginFailed, loginStart, loginSuccess } from "../redux/userSlice";
const Container = styled.div`
  width: 100%;
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
  max-width: 30%;
  padding: 30px;
  ${large({
    maxWidth: "50%",
  })}
  ${tablet({
    maxWidth: "60%",
  })}
  ${mobile({
    maxWidth: "100%",
    margin: "2rem 0",
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
  &:disabled {
    background-color: grey;
    color: white;
    cursor: not-allowed;
  }
`;
const StyledLink = styled(Link)`
  margin: 10px 20px;
  width: 100%;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: red;
  }
`;
const Error = styled.span`
  color: red;
  margin: 20px;
`;
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, userToken, currentUser } = useSelector((state) => state.user);
  useEffect(()=>window.scrollTo({top: 0, behavior: 'smooth',}),[])
  const handleClick = async (e) => {
      e.preventDefault();
      const userData = {
          email,
          password,
          appType: "ott",
        };
        try {
      const config = {
        headers: {
          Authorization: `Bearer ${userToken}`,
          projectId: "9m8ybce3f4vg",
        },
    };
    dispatch(loginStart());
    const response = await axios.post(
        "https://academics.newtonschool.co/api/v1/user/login",
        userData,
        config
        );
        console.log(response.data.token); 
        if (response.data.status == "success") {
            navigate("/");
        }
        dispatch(loginSuccess(response.data));
        dispatch(addToken(response.data.token))
        // console.log(error, userToken, currentUser);
    } catch (error) {
      console.log(error);
      dispatch(loginFailed());
    }
  };
  return (
    <>
      <Navbar />
      <Container>
        <Content>
          <Title>LOGIN</Title>
          <Form onSubmit={handleClick}>
            <Input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Agreement>
              By signing in, I consent to process my personal data.
            </Agreement>
            <Button type="submit">Login</Button>
            {error && <Error>Invalid Username Or Password!!!</Error>}
            <StyledLink>Forgot Password? Click here</StyledLink>
            <StyledLink to="/register">
              Do not have an account. Sign Up here.
            </StyledLink>
          </Form>
        </Content>
      </Container>
      <Footer />
    </>
  );
};

export default Login;
