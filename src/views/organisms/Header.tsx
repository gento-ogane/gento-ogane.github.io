import React, { useState } from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { headerHeightNum } from '../../utils/size';
import { useHistory } from 'react-router-dom';

const Header: React.FC = props => {
  const history = useHistory();
  const [menuState, setMenuState] = useState(0);

  return (
    <Head>
      <Bar>
        <Title variant='h6'>Gentz.dev</Title>
        <MenuItem
          button
          onClick={() => {
            history.push('/');
            setMenuState(0);
          }}
        >
          <TopItemText state={menuState}>Top</TopItemText>
        </MenuItem>
        <MenuItem
          button
          onClick={() => {
            history.push('/about');
            setMenuState(1);
          }}
        >
          <AboutItemText state={menuState}>About</AboutItemText>
        </MenuItem>
        <MenuItem
          button
          onClick={() => {
            history.push('/products');
            setMenuState(2);
          }}
        >
          <ProductsItemText state={menuState}>Products</ProductsItemText>
        </MenuItem>
      </Bar>
    </Head>
  );
};

const Head = styled(AppBar)`
  height: ${headerHeightNum + 'px'};
  background: #404040 !important;
  position: fixed;
  margin-bottom: 10px;
`;
const Bar = styled(Toolbar)``;

const Title = styled(Typography)`
  width: 50%;
`;

const MenuItem = styled(ListItem)`
  width: 10% !important;
`;

const TopItemText = styled(ListItemText)<{ state: number }>`
  text-align: center;
  color: ${props => (props.state === 0 ? '#6a5acd' : false)};
`;
const AboutItemText = styled(ListItemText)<{ state: number }>`
  text-align: center;
  color: ${props => (props.state === 1 ? '#6a5acd' : false)};
`;
const ProductsItemText = styled(ListItemText)<{ state: number }>`
  text-align: center;
  color: ${props => (props.state === 2 ? '#6a5acd' : false)};
`;

export default Header;
