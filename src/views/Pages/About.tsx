import * as React from "react";
import styled from "styled-components";
import TitleText from "../atoms/TitleText";

const About: React.FC = (props) => {
  return (
    <Wrap>
      <TitleText variant="h5">About</TitleText>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
`;

export default About;
