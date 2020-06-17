import * as React from "react";
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography  from '@material-ui/core/Typography'
import {headerHeightNum}from '../../utils/size';


const Header:React.FC=props=>{

return (<>
<Head position="static">
<Toolbar>
<Typography variant="h6" >
      Top
</Typography>
<Typography variant="h6" >
      About
</Typography>
<Typography variant="h6" >
      Works
</Typography>
<Typography variant="h6" >
      Articles
</Typography>
<Typography variant="h6" >
      Contact
</Typography>
</Toolbar>
</Head>
</>)
}

const Head=styled(AppBar)`
height:${headerHeightNum+"px"};
`

export default Header
