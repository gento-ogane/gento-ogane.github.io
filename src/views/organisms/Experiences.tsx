import * as React from 'react';
import styled from 'styled-components';

const Experiences: React.FC = () => {
  return (
    <>
      <Table>
        <Tbody>
          <tr>
            <Tdl>2019.4 ~ 2021.1</Tdl>
            <Tdr>GeekSalon</Tdr>
          </tr>
          <tr>
            <Tdl>2019.11 ~ 2020.4</Tdl>
            <Tdr>IntelligenceDesign</Tdr>
          </tr>
          <tr>
            <Tdl>2020.8.17 ~ 8.21</Tdl>
            <Tdr>BrainPad</Tdr>
          </tr>
          <tr>
            <Tdl>2020.8.31 ~ 8.2</Tdl>
            <Tdr>AamazonWebService</Tdr>
          </tr>
          <tr>
            <Tdl>2020.10.8 ~ 10.28</Tdl>
            <Tdr>Speee</Tdr>
          </tr>
          <tr>
            <Tdl>2020.7 ~</Tdl>
            <Tdr>RIT</Tdr>
          </tr>
        </Tbody>
      </Table>
    </>
  );
};

const Table = styled.table`
  display: flex;
  justify-content: center;
  margin: auto;
  width: 900px;
`;

const Tbody = styled.tbody`
  width: 500px;
`;

const Tdl = styled.td`
  width: 65%;
  text-align: left;
  padding: 10px;
`;

const Tdr = styled.td`
  text-align: left;
  padding: 10px;
`;

export default Experiences;
