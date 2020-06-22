import * as React from "react";
import styled from "styled-components";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { footerHeightNum } from "../../utils/size";

const Footer: React.FC = (props) => {

  return (
    <Foot>
      <MenuItem>
        <a href="https://github.com/gento-ogane"><GitHubIcon  style={{ color: "white" }}/></a>
      </MenuItem>
      <MenuItem>
      <a href="https://www.facebook.com/gento.ogane"><FacebookIcon  style={{ color: "white" }}/></a>
      </MenuItem>
      <MenuItem>
      <a href="https://twitter.com/charge_time"><TwitterIcon style={{ color: "white" }}/></a>
      </MenuItem>
    </Foot>
  );
};

const Foot = styled.footer`
  width: 100%;
  height: ${footerHeightNum + "px"};
  background: #404040;
  display:flex;
  justify-content:space-around;
  align-items:center;
`;

const MenuItem =styled.div`
  text-align:center;
`

export default Footer;
