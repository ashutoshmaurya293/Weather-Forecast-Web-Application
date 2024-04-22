import React, { useState } from "react";
import styled from "styled-components";
import UseFetch from "../Hooks/UseFetch";

const city = () => {
  const { Data } = UseFetch(
    "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=100&refine=cou_name_en%3A%22India%22"
  );
  // console.log(Data);
  return (
    <Container>
      <Title>
      Weather Forecast Web Application
      </Title>
      <ResponsiveTable>
        <TableHeader>
          <TableColumn width="30%">city </TableColumn>
          <TableColumn width="40%">country</TableColumn>
          <TableColumn width="20%">timezone </TableColumn>
        </TableHeader>
      {Data?.map((e,i)=>(
        <TableRow key={i}>
            <TableColumn width="30%" data-label="Job Id">
              {e.name}
            </TableColumn>
            <TableColumn width="40%" data-label="Customer Name">
              {e.cou_name_en}
            </TableColumn>
            <TableColumn width="20%" data-label="Amount">
              {e.timezone}
            </TableColumn>
          </TableRow>
      ))}
          

      </ResponsiveTable>
    </Container>
  );
};

export default city;

const Container = styled.div`
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
  @media (max-width: 800px) {
    max-width: 100%;
    padding-left: 0px;
    padding-right: 0px;
  }
`;

const Title = styled.h2`
  font-size: 26px;
  margin: 20px 0;
  text-align: center;

  small {
    font-size: 0.5em;
  }
`;

const ResponsiveTable = styled.ul`
  list-style-type: none;
  width: 100%;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const TableHeader = styled.li`
  background-color: #95a5a6;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  display: flex;
  justify-content: space-between;
  border-radius: 3px;
  padding: 25px 30px;
`;

const TableRow = styled.li`
  background-color: #ffffff;
  box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  border-radius: 3px;
  padding: 25px 30px;
`;

const TableColumn = styled.div`
  flex-basis: ${(props) => props.width};
  font-size: 17px;
  cursor: pointer;
`;
