import * as React from "react";
import styled from "styled-components";
import TitleText from "../atoms/TitleText";
import { headerHeightNum,footerHeightNum } from "../../utils/size";
import TextField from "@material-ui/core/TextField";
import {Button as OriginalButton} from "@material-ui/core";


const styles = {
  input1: {
    height: 50,
  },
};

const Contact: React.FC = (props) => {
  return (
    <Wrap>
      <Form>
        <TitleText variant="h5">Contact</TitleText>
        <SubjectTextField required label="subject" variant="outlined" />
        <EmailTextField required label="email" variant="outlined" />
        <ContentTextField
          required
          label="content"
          variant="outlined"
          multiline
          rows={10}
        />
        <SubmitButton variant="outlined">Submit</SubmitButton>
      </Form>
    </Wrap>
  );
};

const Wrap = styled.div`
  margin-top: ${headerHeightNum + "px"};
  margin-bottom: ${footerHeightNum + "px"};
  width: 100%;
  text-align: center;
`;

const Form = styled.div`
  width: 70%;
  margin: auto;
`;

const SubjectTextField = styled(TextField)`
  width: 100%;
  margin: 20px 0px !important;
`;

const EmailTextField = styled(TextField)`
  width: 100%;
  margin: 20px 0px !important;
`;

const ContentTextField = styled(TextField)`
  width: 100%;
  margin: 20px 0px !important;
`;

const SubmitButton =styled(OriginalButton)`
   width: 80%;
  margin: 20px 0px !important;
`

export default Contact;
