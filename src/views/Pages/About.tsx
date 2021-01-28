import * as React from 'react';
import styled from 'styled-components';
import TitleText from '../atoms/TitleText';
import { headerHeightNum } from '../../utils/size';
import Divider from '@material-ui/core/Divider';
import Skills from '../organisms/Skills';
import Profile from '../organisms/Profile';
import Experiences from '../organisms/Experiences';

const About: React.FC = props => {
  return (
    <Wrap>
      <TitleText variant='h5'>About</TitleText>
      <TitleText variant='h6'>profile</TitleText>
      <Divide variant='middle' />
      <Profile />
      <TitleText variant='h6'>intern experiences</TitleText>
      <Divide variant='middle' />
      <Experiences />
      <TitleText variant='h6'>skills</TitleText>
      <Divide variant='middle' />
      <Skills />
    </Wrap>
  );
};

const Wrap = styled.div`
  margin-top: ${headerHeightNum + 'px'};
  width: 100%;
  text-align: center;
  padding-bottom: 100px;
`;

const Divide = styled(Divider)`
  width: 40%;
  margin: auto !important;
`;

export default About;
