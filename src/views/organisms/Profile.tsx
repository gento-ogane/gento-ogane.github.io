import * as React from 'react';
import styled from 'styled-components';
import Avatar from '../../utils/avatar.jpg';


const Profile:React.FC=()=>{

    return(
    <>
      <Img src={Avatar} alt='avatar' />
     <Table>
        <Tbody>
          <tr>
            <Tdl>Name</Tdl>
            <Tdr>Gento Ogane</Tdr>
          </tr>
          <tr>
            <Tdl>Birth</Tdl>
            <Tdr>1998.11.24</Tdr>
          </tr>
          <tr>
            <Tdl>University</Tdl>
            <Tdr>Sophia University</Tdr>
          </tr>
          <tr>
            <Tdl>Major</Tdl>
            <Tdr>Information Science</Tdr>
          </tr>
        </Tbody>
      </Table>
    </>)

}

const Img = styled.img`
  width: 200px;
  margin: 10px;
`;

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

export default Profile