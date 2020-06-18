import * as React from "react";
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography  from '@material-ui/core/Typography'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {headerHeightNum}from '../../utils/size';
import {useHistory} from 'react-router-dom';


const Header:React.FC=props=>{
    const history=useHistory();

return (
  <>
    <Head position="static">
      <Bar>
        <Title variant="h6">Gento's Portfolio</Title>
        <MenuItem button onClick={()=>{history.push('/');}}>
        <MenuItemText>Top</MenuItemText>
        </MenuItem>
        <MenuItem button onClick={()=>{history.push('/about')}}>
          <MenuItemText>About</MenuItemText>
        </MenuItem>
        <MenuItem button onClick={()=>{history.push('/products')}}>
          <MenuItemText>Products</MenuItemText>
        </MenuItem>
        <MenuItem button onClick={()=>{history.push('/articles')}}>
          <MenuItemText>Articles</MenuItemText>
        </MenuItem>
        <MenuItem button onClick={()=>{history.push('/contact')}}>
          <MenuItemText>Contact</MenuItemText>
        </MenuItem>
      </Bar>
    </Head>
  </>
);
}



const Head=styled(AppBar)`
height:${headerHeightNum+"px"};
background:#404040 !important;
`
const Bar=styled(Toolbar)`
  
`

const Title=styled(Typography)`
width:50%;
`
const MenuItemText=styled(ListItemText)`
 text-align:center;
`

const MenuItem=styled(ListItem)`
 width:10% !important;
`



export default Header
