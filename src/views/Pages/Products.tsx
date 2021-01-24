import * as React from 'react';
import styled from 'styled-components';
import TitleText from '../atoms/TitleText';
import { headerHeightNum } from '../../utils/size';
import ProductCard from '../organisms/ProductCard';
import logo1 from '../../utils/products/product01.jpg';
import { Box } from '@material-ui/core';

const Products: React.FC = props => {
  return (
    <Wrap>
      <TitleText variant='h5'>Products</TitleText>
      <Container>
        <WrapBox>
          <a href="https://gento-ogane.github.io/gentz">
          <ProductCard
            image={logo1}
            title={'gento-ogane.github.io'}
            detail={
              '自身の経歴や作品をまとめたシンプルなポートフォリオサイトです。'
            }
          />
          </a>
        </WrapBox>
      </Container>
    </Wrap>
  );
};

const Wrap = styled.div`
  margin-top: ${headerHeightNum + 'px'};
  width: 100%;
`;

const Container = styled.div`
  width: calc((100vw - 1 * 100vw / 4) + 6 * 40px);
  margin: auto;
`;

const WrapBox = styled(Box)`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export default Products;
