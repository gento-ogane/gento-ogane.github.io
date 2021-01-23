import * as React from 'react';
import styled from 'styled-components';
import TitleText from '../atoms/TitleText';
import { headerHeightNum, footerHeightNum } from '../../utils/size';

const Top: React.FC = props => {
  return (
    <Wrap>
      <TitleText variant='h5'>Top</TitleText>
      <TopTitle>Welcome to Gento's Portfolio Site!!</TopTitle>
      <TopText>
        Working hard every day to become an engineer lead the surroundings while having not only technical knowledge but also a wide range of business knowledge. 
        This is a site for sending products and articles.
      </TopText>
    </Wrap>
  );
};
const Wrap = styled.div`
  margin-top: ${headerHeightNum + 'px'};
  width: 100%;
  height: calc(
    100vh - ${headerHeightNum + 'px'} - ${footerHeightNum + 'px'} - 25px
  );
`;

const TopTitle = styled.h1`
  font-size: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 14%;
  margin-bottom: 7%;
  color: #494eaa;
`;

const TopText = styled.p`
  font-size: 22px;
  width: 66%;
  margin: auto;
`;
export default Top;
