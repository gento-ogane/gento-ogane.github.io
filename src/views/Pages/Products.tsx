import * as React from 'react';
import styled from 'styled-components';
import TitleText from '../atoms/TitleText';
import { headerHeightNum } from '../../utils/size';
import ProductCard from '../organisms/ProductCard';
import logo1 from '../../utils/products/product01.jpg';
import { Grid } from '@material-ui/core';

const Products: React.FC = props => {
  return (
    <Wrap>
      <TitleText variant='h5'>Products</TitleText>
      <Grid>
        <ProductCard
          image={logo1}
          title={'Gentz.dev'}
          detail={
            '自身の経歴や作品をまとめたシンプルなポートフォリオサイトです。'
          }
        />
      </Grid>
    </Wrap>
  );
};

const Wrap = styled.div`
  margin-top: ${headerHeightNum + 'px'};
  width: 100%;
`;

export default Products;
