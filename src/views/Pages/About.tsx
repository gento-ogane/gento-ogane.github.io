import * as React from "react";
import styled from "styled-components";
import TitleText from "../atoms/TitleText";
import Avatar from '../../utils/avatar.jpg';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';

const About: React.FC = (props) => {
  return (
    <Wrap>
      <TitleText variant="h5">About</TitleText>
      <TitleText variant="h6">profile</TitleText>
      <Img src={Avatar} alt="avatar"/>
      <Table>
          <Tbody >
              <tr><Td>Name</Td><td>Gento Ogane</td></tr>
              <tr><Td>Birth</Td><td>1998.11.24</td></tr>
              <tr><Td>University</Td><td>Sophia Unitversity</td></tr>
              <tr><Td>Major</Td><td>Information Science</td></tr>
              <tr><Td>Interesting</Td><td>Web Application</td></tr>
          </Tbody>
      </Table>
      <TitleText variant="h6">history</TitleText>
      <TitleText variant="h6">skills</TitleText>
      <Tooltip title="Lebel3"><Button>HTML</Button></Tooltip>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  text-align:center;
`
const Img = styled.img`
  width:200px;
  margin:10px;
`

const Table=styled.table`
 display:flex;
 justify-content:center;
`

const Tbody=styled.tbody`
 width:320px;
`

const Td=styled.td`
 width:52%;
 text-align:left;
 padding:10px;

`

export default About;
