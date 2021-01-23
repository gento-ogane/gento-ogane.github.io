import * as React from 'react';
import styled from 'styled-components';
import TitleText from '../atoms/TitleText';
import Avatar from '../../utils/avatar.jpg';
import Chip from '@material-ui/core/Chip';
import { headerHeightNum } from '../../utils/size';
import Divider from '@material-ui/core/Divider';

const About: React.FC = props => {
  return (
    <Wrap>
      <TitleText variant='h5'>About</TitleText>
      <TitleText variant='h6'>profile</TitleText>
      <Divide variant='middle' />
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
            <Tdl>lMajor</Tdl>
            <Tdr>Information Science</Tdr>
          </tr>
          <tr>
            <Tdl>Interesting</Tdl>
            <Tdr>Web Application</Tdr>
          </tr>
        </Tbody>
      </Table>
      <TitleText variant='h6'>skills</TitleText>
      <Divide variant='middle' />
      <Star>★★★★★</Star>
      <Row>
        <SkillChip label='React' />
        <SkillChip label='TypeScript' />
        <SkillChip label='JavaScript' />
      </Row>
      <Star>★★★★</Star>
      <Row>
        <SkillChip label='Unity(C#)' />
        <SkillChip label='Next.js' />
        <SkillChip label='Ruby on Rails' />
        <SkillChip label='HTML' />
        <SkillChip label='CSS' />
      </Row>
      <Star>★★★</Star>
      <Row>
        <SkillChip label='Git/GitHub' />
        <SkillChip label='Amplify' />
        <SkillChip label='Python' />
        <SkillChip label='Flask' />
        <SkillChip label='AWS' />
      </Row>
      <Star>★★</Star>
      <Row>
        <SkillChip label='GAS' />
        <SkillChip label='Docker' />
        <SkillChip label='jQuery' />
        <SkillChip label='jinja2' />
      </Row>
      <Star>★</Star>
      <Row>
        <SkillChip label='Flutter' />
        <SkillChip label='WordPress' />
        <SkillChip label='FireBase' />
      </Row>
    </Wrap>
  );
};

const Wrap = styled.div`
  margin-top: ${headerHeightNum + 'px'};
  width: 100%;
  text-align: center;
  padding-bottom: 100px;
`;
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
  width: 70%;
  text-align: left;
  padding: 10px;
`;

const Tdr = styled.td`
  width: 60%;
  text-align: left;
  padding: 10px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: space-around;
  flex-wrap: wrap;
  width: 50%;
  margin: auto;
  margin-bottom: 60px;
`;

const SkillChip = styled(Chip)`
  margin: 10px;
`;

const Star = styled.p`
  color: #494eaa;
`;
const Divide = styled(Divider)`
  width: 40%;
  margin: auto !important;
`;

export default About;
