import React, { useState } from "react";
import { API_ROUTES } from "../../../../utils/ApiManage";
import { useRouter } from "next/router";
import {
  Button,
  Form,
  FormContainer,
  FormField,
  Input,
} from "../../../styles/FormStyling.styled";
import Link from "next/link";
import axios from "axios";
import { cookiesMethods, localStorageMethods } from "../../../../utils/helper";
import { message } from "antd";

export default function SignupForm() {
  const [inputFields, setInputFields] = useState({
    name: "",
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const { name, email, password } = inputFields;
    try {
      const response = await axios.post(API_ROUTES.signupUser, {
        name,
        email,
        password,
      });
      if (response.status === 201) {
        setInputFields({
          name: "",
          email: "",
          password: "",
        });
        localStorageMethods.setItem("token", response.data.token);
        cookiesMethods.set("token", response.data.token);
        router.replace("/");
        message.success("Successfully signed up!");
      }
    } catch (error) {
      console.log({ signupErr: error });
    }
  };

  return (
    <FormContainer>
      <Form method="POST" onSubmit={handleSubmit}>
        <FormField>
          <label htmlFor="nameId">Name: </label>
          <Input
            id="nameId"
            type="text"
            name="userName"
            placeholder="Enter name"
            required
            value={inputFields.name}
            onChange={(e) =>
              setInputFields((v) => ({ ...v, name: e.target.value }))
            }
          />
        </FormField>
        <FormField>
          <label htmlFor="emailId">Email: </label>
          <Input
            id="emailId"
            type="email"
            name="userEmail"
            placeholder="Enter email"
            required
            value={inputFields.email}
            onChange={(e) =>
              setInputFields((v) => ({ ...v, email: e.target.value }))
            }
          />
        </FormField>
        <FormField>
          <label htmlFor="passwordId">Password: </label>
          <Input
            id="passwordId"
            type="password"
            name="userPassword"
            placeholder="Enter password"
            required
            value={inputFields.password}
            onChange={(e) =>
              setInputFields((v) => ({ ...v, password: e.target.value }))
            }
          />
        </FormField>
        <Button type="submit">Signup</Button>
      </Form>
      <p>
        Already have account? <Link href={"/login"}>Signin</Link>
      </p>
    </FormContainer>
  );
}
