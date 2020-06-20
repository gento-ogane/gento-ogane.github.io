import * as React from "react";
import styled from "styled-components";
import TitleText from "../atoms/TitleText";
import {headerHeightNum} from "../../utils/size";

const Products: React.FC = (props) => {
  return (
    <Wrap>
      <TitleText variant="h5">Products</TitleText>
    </Wrap>
  );
};

const Wrap = styled.div`
 margin-top:${headerHeightNum+"px"};
  width: 100%;
`;

export default Products;
