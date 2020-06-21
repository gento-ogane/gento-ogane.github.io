import * as React from "react";
import styled from "styled-components";
import TitleText from "../atoms/TitleText";
import { headerHeightNum, footerHeightNum } from "../../utils/size";
import TextField from "@material-ui/core/TextField";
import { Button as OriginalButton } from "@material-ui/core";

const Contact: React.FC = (props) => {

  //変数宣言
  const useState = React.useState;
    
  //状態管理
  const [subject, setSubject] = useState<string|null>(null);
  const [email, setEmail] = useState<string|null>(null);
  const [content, setContent] = useState<string|null>(null);

  //OnChange
  const _handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(e.target.value);
  };

  const _handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const _handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  return (
    <Wrap>
      <Form>
        <TitleText variant="h5">Contact</TitleText>
        <SubjectTextField
          required
          label="subject"
          variant="outlined"
          onChange={_handleSubjectChange}
        />
        <EmailTextField
          required
          label="email"
          variant="outlined"
          onChange={_handleEmailChange}
        />
        <ContentTextField
          required
          label="content"
          variant="outlined"
          multiline
          rows={10}
          onChange={_handleContentChange}
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

const SubmitButton = styled(OriginalButton)`
  width: 80%;
  margin: 20px 0px !important;
`;

export default Contact;
