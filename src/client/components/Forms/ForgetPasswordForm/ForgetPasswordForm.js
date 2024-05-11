import React, { useState } from "react";
import {
  CustomButton,
  CustomForm,
  FormContainer,
  CustomFormField,
  CustomInput,
} from "../../../styles/FormStyling.styled";

export default function ForgetPasswordForm() {
  const [email, setEmail] = useState("");

  return (
    <FormContainer>
      <CustomForm method="POST">
        <CustomFormField>
          <label htmlFor="emailId">Email: </label>
          <CustomInput
            id="emailId"
            type="email"
            name="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </CustomFormField>
        <CustomButton>Submit</CustomButton>
      </CustomForm>
    </FormContainer>
  );
}
