import { AuthContext } from "@/client/context/Auth/Auth";
import {
  CustomButton,
  CustomForm,
  CustomFormField,
  CustomInput,
} from "@/client/styles/FormStyling.styled";
import React, { useContext } from "react";

export default function EditProfileForm() {
  const { currentUser } = useContext(AuthContext);

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <CustomForm method="POST" onSubmit={handleSubmit}>
      <CustomFormField>
        <label id="user_name">Name: </label>
        <CustomInput
          type="text"
          id="user_name"
          name="name"
          value={currentUser?.name}
          disabled
          readOnly
        />
      </CustomFormField>
      <CustomFormField>
        <label id="user_email">Email: </label>
        <CustomInput
          type="email"
          id="user_email"
          name="email"
          value={currentUser?.email}
          readOnly
          disabled
        />
      </CustomFormField>
      <CustomButton type="submit">Save changes</CustomButton>
    </CustomForm>
  );
}
