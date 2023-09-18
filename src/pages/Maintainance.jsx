import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f7f7f7;
`;

const MaintenanceText = styled.h1`
  font-size: 24px;
  text-align: center;
`;

const MaintenancePage = () => {
  return (
    <>
      <Navbar />
      <Container>
        <MaintenanceText>
          We're currently undergoing maintenance.
          <br />
          Please check back later!
        </MaintenanceText>
      </Container>
    </>
  );
};

export default MaintenancePage;
