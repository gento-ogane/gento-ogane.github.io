import * as React from "react";
import styled from "styled-components";
import TitleText from "../atoms/TitleText";
import { headerHeightNum, footerHeightNum } from "../../utils/size";
import TextField from "@material-ui/core/TextField";
import { Button as OriginalButton } from "@material-ui/core";
import axios from "../../api/base";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

const Contact: React.FC = (props) => {
    
  //変数宣言
  const useState = React.useState;

  //状態管理
  const [subject, setSubject] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [content, setContent] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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

  //関数
  const _handlePostForm = async () => {
    try {
      axios.post("/send", {
        name: subject,
        email: email,
        body: content,
      });
      setIsSuccess(true);
      setOpen(true);
    } catch (e) {
      setIsSuccess(false);
      setOpen(true);
    }
  };

  const _handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Wrap>
      <Snackbar open={open} autoHideDuration={6000} onClose={_handleClose}>
        {isSuccess ? (
          <Alert onClose={_handleClose} severity="success">
            メッセージを送信しました。
          </Alert>
        ) : (
          <Alert onClose={_handleClose} severity="error">
            メッセージを送信できませんでした。
          </Alert>
        )}
      </Snackbar>
      <Form>
        <TitleText variant="h5">Contact</TitleText>
        <p>お気軽にお問い合わせください。</p>
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
          rows={20}
          onChange={_handleContentChange}
        />
        <SubmitButton variant="outlined" onClick={_handlePostForm}>
          Submit
        </SubmitButton>
      </Form>
    </Wrap>
  );
};

const Wrap = styled.div`
  margin-top: ${headerHeightNum + "px"};
  margin-bottom: ${footerHeightNum + "px"};
  width: 100%;
  height:100vh;
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
  margin: 30px 0px !important;
  color: white !important;
  background: #404040 !important;
`;

export default Contact;
