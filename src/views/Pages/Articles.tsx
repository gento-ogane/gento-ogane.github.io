import * as React from 'react';
import styled from 'styled-components';
import TitleText from '../atoms/TitleText';
import { headerHeightNum } from '../../utils/size';

const Articles: React.FC = props => {
  return (
    <Wrap>
      <TitleText variant='h5'>Articles</TitleText>
    </Wrap>
  );
};
const Wrap = styled.div`
  margin-top: ${headerHeightNum + 'px'};
  width: 100%;
`;

export default Articles;
