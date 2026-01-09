import React, { useState } from "react";
import {
  Button,
  Form,
  FormCard,
  FormContainer,
  FormField,
  Input,
  FormFooter,
} from "../../../styles/FormStyling.styled";
import Link from "next/link";

export default function ForgetPasswordForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // call forget-password API here
  };

  return (
    <FormContainer>
      <FormCard>
        <Form onSubmit={handleSubmit}>
          <FormField>
            <label htmlFor="emailId">Email</label>
            <Input
              id="emailId"
              type="email"
              placeholder="you@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormField>

          <Button type="submit">Send reset link</Button>
        </Form>

        <FormFooter>
          <Link href="/login">Back to login</Link>
        </FormFooter>
      </FormCard>
    </FormContainer>
  );
}
