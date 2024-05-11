import React, { useState } from "react";
import {
  CustomButton,
  CustomForm,
  FormContainer,
  CustomFormField,
  CustomInput,
} from "../../../styles/FormStyling.styled";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import { API_ROUTES } from "../../../../utils/ApiManage";
import { cookiesMethods, localStorageMethods } from "../../../../utils/helper";
import { message } from "antd";

export default function LoginForm() {
  const [inputFields, setInputFields] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    try {
      const { email, password } = inputFields;
      const response = await axios.post(API_ROUTES.loginUser, {
        email,
        password,
      });

      if (response.status === 200) {
        setInputFields({
          email: "",
          password: "",
        });
        localStorageMethods.setItem("token", response.data.token);
        localStorageMethods.setItem("loggedIn-Time", new Date())
        cookiesMethods.set("token", response.data.token);
        router.replace("/");
        message.success("Successfully logged in!");
      }
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <FormContainer>
      <CustomForm method="POST" onSubmit={handleSubmit}>
        <CustomFormField>
          <label htmlFor="emailId">Email: </label>
          <CustomInput
            id="emailId"
            type="email"
            name="email"
            placeholder="Enter email"
            value={inputFields.email}
            onChange={(e) =>
              setInputFields((v) => ({ ...v, email: e.target.value }))
            }
          />
        </CustomFormField>
        <CustomFormField topMargin>
          <label htmlFor="passwordId">Password: </label>
          <CustomInput
            id="passwordId"
            type="password"
            name="password"
            placeholder="Enter password"
            value={inputFields.password}
            onChange={(e) =>
              setInputFields((v) => ({ ...v, password: e.target.value }))
            }
          />
        </CustomFormField>
        <CustomButton type="submit">Login</CustomButton>
      </CustomForm>
      <p style={{ display: "flex", justifyContent: "space-between" }}>
        <span>
          Don&apos;t have Account?{" "}
          <Link href={"/signup"}>Create New Account</Link>
        </span>
        <span>
          <Link href={"/forget-password"}>Forget Password?</Link>
        </span>
      </p>
    </FormContainer>
  );
}
