import * as React from 'react';
import styled from 'styled-components';
import TitleText from '../atoms/TitleText';
import { headerHeightNum, footerHeightNum } from '../../utils/size';
import Avatar from '../../utils/avatar.jpg';

const Top: React.FC = () => {
  return (
    <Wrap>
      <TitleText variant='h5'>Top</TitleText>
      <Content>
        <Img src={Avatar} alt='avatar' />
        <TopText>
          <p>:) Hi, I`m Gentz!</p>
          <p>Welcome to my portfolio site!!</p>
          <p>Please Relax and enjoy!!</p>
        </TopText>
      </Content>
    </Wrap>
  );
};
const Wrap = styled.div`
  margin-top: ${headerHeightNum + 'px'};
  width: 100%;
  text-align: center;
  height: calc(
    100vh - ${headerHeightNum + 'px'} - ${footerHeightNum + 'px'} - 25px
  );
`;

const Img = styled.img`
  width: 300px;
  margin: 10px;
`;

const Content = styled.div`
  height: 60%;
  margin: auto;
`;

const TopText = styled.div`
  justify-content: center;
  font-size: 22px;
  width: 66%;
  margin: 30px auto;
`;
export default Top;
