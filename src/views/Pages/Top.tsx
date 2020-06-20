import * as React from "react";
import styled from "styled-components";
import TitleText from "../atoms/TitleText";
import { headerHeightNum } from "../../utils/size";

const Top: React.FC = (props) => {
  return (
    <Wrap>
      <TitleText variant="h5">Top</TitleText>
      Gentoのポートフォリオサイトへようこそ！
      将来は技術知識のみならず、幅広いビジネス知識を兼ね備えながらも周りを牽引するようなエンジニアを目指し日々精進しております。
      そのためのプロダクトや記事などを発信するためのサイトです。どうぞ暇つぶし程度にご覧になってください。
    </Wrap>
  );
};
const Wrap = styled.div`
  margin-top: ${headerHeightNum + "px"};
  width: 100%;
`;
export default Top;
