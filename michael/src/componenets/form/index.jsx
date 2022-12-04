import { useEffect } from "react";
import { useState } from "react";
import {
  Button,
  EmailInput,
  FieldContainer,
  FormContainer,
  FormTopContainer,
  Input,
  Label,
  TextArea,
  ThankContainer,
  ThankHead,
  ThankText,
} from "./styles";

const Form = () => {
  const [submitted, setSubmitted] = useState(false);

  const FORM_ENDPOINT = process.env.REACT_APP_FORM;
  const FORM_ENDPOINT_TEST = process.env.REACT_APP_FORM_TEST;

  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <ThankContainer>
        <ThankHead>Thank you!</ThankHead>
        <ThankText>We'll be in touch soon.</ThankText>
      </ThankContainer>
    );
  }

  return (
    <div className="contactPage">
      <FormContainer>
        <form
          action={FORM_ENDPOINT_TEST}
          onSubmit={handleSubmit}
          method="POST"
          target="_blank"
          class="form"
        >
          <FormTopContainer>
            <FieldContainer>
              <Label>Your first name</Label>
              <Input type="text" name="firstName" required />
            </FieldContainer>
            <FieldContainer>
              <Label>Your surname</Label>
              <Input type="text" name="surname" required />
            </FieldContainer>
          </FormTopContainer>
          <FieldContainer>
            <Label>Email</Label>
            <EmailInput type="email" name="email" required />
          </FieldContainer>
          <FieldContainer>
            <Label>Your message</Label>
            <TextArea name="message" required />
          </FieldContainer>

          <FieldContainer>
            <Button type="submit">Submit</Button>
          </FieldContainer>
        </form>
      </FormContainer>
    </div>
  );
};

export default Form;
