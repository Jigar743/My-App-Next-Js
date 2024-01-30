import React, { useState } from "react";
import {
  Button,
  Form,
  FormContainer,
  FormField,
  Input,
} from "../../../styles/FormStyling.styled";

export default function ForgetPasswordForm() {
  const [email, setEmail] = useState("");

  return (
    <FormContainer>
      <Form method="POST">
        <FormField>
          <label htmlFor="emailId">Email: </label>
          <Input
            id="emailId"
            type="email"
            name="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormField>
        <Button>Submit</Button>
      </Form>
    </FormContainer>
  );
}
