import * as React from "react";
import styled from "styled-components";
import TitleText from "../atoms/TitleText";

const Contact: React.FC = (props) => {
  return (
    <Wrap>
      <TitleText variant="h5">Contact</TitleText>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
`;

export default Contact;
