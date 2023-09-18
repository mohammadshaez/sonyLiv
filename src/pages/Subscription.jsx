import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import styled from "styled-components";
import { Link } from "react-router-dom";

const columns = [
  {
    id: "1",
    minWidth: 170,
    label: "Access All Content",
    category: "Movies, Originals And Live Sports",
  },
  {
    id: "2",
    minWidth: 100,
    label: "Mobile Only",
    tenure: "Yearly",
    price:"₹599",
    align: "center",
  },
  {
    id: "3",
    minWidth: 170,
    label: "LIV Premium",
    tenure: "Yearly",
    price:"₹999",
    align: "center",
  },
  {
    id: "4",
    minWidth: 170,
    label: "LIV Premium",
    tenure: "6 Months",
    price:"₹699",
    align: "center",
  },
  {
    id: "5",
    label: "LIV Premium ",
    minWidth: 170,
    tenure: "Monthly",
    price:"₹299",
    align: "center",
  },
];

function createData(id, head1, head2, head3, head4, head5) {
  return { id, head1, head2, head3, head4, head5 };
}

const rows = [
  createData(1, "Number of logged in devices", 1, 5, 5, 5),
  createData(2, "Watch on devices at same time", "1", 2, 2, 1),
  createData(
    3,
    "Max Video Quality",
    "HD (720p)",
    "FULL HD (1080p)",
    "FULL HD (1080p)",
    "FULL HD (1080p)"
  ),
  createData(
    4,
    "Max Audio Quality",
    "Stereo 2.1",
    "Stereo 2.1",
    "Stereo 2.1",
    "Stereo 2.1"
  ),
  createData(
    5,
    "Advertisement",
    "On Live Sports, Channels & Reality TV Shows",
    "On Live Sports, Channels & Reality TV Shows",
    "On Live Sports, Channels & Reality TV Shows",
    "On Live Sports, Channels & Reality TV Shows"
  ),
];
const Container = styled.div`
  display: flex;
  color: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(
      to top,
      rgba(255, 0, 0, 0),
      rgba(21, 21, 21, 1)
    ),
    url("/Misc/movie-list.png");
  background-repeat: repeat-x;
  background-size: 60%;
  z-index: 0; /* Place the overlay layer behind the content */
`;
const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  & table {
    border: 1px solid lightgray;
    max-width: 1200px;
  }
  & th {
    background-color: transparent;
    color: white;
  }
  & td {
    color: white;
    /* text-align: center; */
  }
  & tr {
    /* background-color: white; */
  }
`;

const Title = styled.h1`
  z-index: 1;
  font-weight: 400;
  font-size: 28px;
`;
const PayButton = styled.button`
  z-index: 1;
  width: 400px;
  height: 50px;
  border-radius: 5px;
  border: none;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
`;
const InfoLinkContainer = styled.div`
  z-index: 1;
`;
const InfoLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: white;
  &:not(:last-of-type)::after {
    content: " * ";
  }
`;

const StyledRow = styled(TableRow)``;

const CustomTableCell = styled(TableCell)`
  background-color: ${(props) =>
    props.colno === props.selected ? "#2c2612" : "transparent"};
`;

const Subscription = () => {
  const [selectedColumnIndex, setSelectedColumnIndex] = React.useState(4);
    const [planPrice, setPlanPrice] = React.useState(299);
  console.log(selectedColumnIndex);

  const handleClick = (colIndex, price) => {
    setSelectedColumnIndex(colIndex)
    setPlanPrice(price || planPrice)
  }
  return (
    <>
      <Container>
        <Title>Subscribe to watch all content on Sony LIV</Title>
        <TableContainer>
          <TableWrapper sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <StyledRow>
                  {columns.map((column, colIndex) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{
                        minWidth: column.minWidth,
                        cursor:"pointer",
                        background:
                          colIndex === selectedColumnIndex
                            ? "#ffc900"
                            : "transparent",
                        color:
                          colIndex === selectedColumnIndex ? "black" : "white",
                      }}
                      onClick={() => handleClick(colIndex, column.price)}
                    >
                      <p>{column.label}</p>
                      {column.category && <p>{column.category}</p>}
                      <p><span>{column.price}</span> <span>{column.tenure}</span></p>
                    </TableCell>
                  ))}
                </StyledRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => {
                  return (
                    <StyledRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      {columns.map((column, colIndex) => (
                        <CustomTableCell
                          key={column.id}
                          colno={colIndex}
                          selected={selectedColumnIndex}
                        >
                          {row[`head${colIndex + 1}`]}
                        </CustomTableCell>
                      ))}
                    </StyledRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableWrapper>
        </TableContainer>
        <Link  to="/maintainance"><PayButton>Pay {planPrice}</PayButton></Link>
        <InfoLinkContainer>
          <InfoLink to="/maintainance">Terms and Conditions</InfoLink>
          <InfoLink to="/maintainance">Privacy Policy</InfoLink>
          <InfoLink to="/maintainance">FAQs</InfoLink>
        </InfoLinkContainer>
      </Container>
    </>
  );
};

export default Subscription;
